import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";
import cors from "cors";
import { getRepositoryAdapter } from "./adapters";
import ExpressAppConfig from "./adapters/external/express/ExpressAppAdapter";
import { IAppConfig } from "./external/interfaces/IAppConfig";
import routes from "./external/routes";
import swaggerFile from "./swagger.json";

dotenv.config({
  path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env",
});

const port = process.env.PORT || 8080;
const orm = getRepositoryAdapter();
orm.createConnection();

swaggerFile.servers[0].url = `http://localhost:${port}/identity-service`;

const app: IAppConfig = ExpressAppConfig.getInstance();
app.setMidleware(cors());
app.setMidleware("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.setPort(port);
app.setRoute(routes.getRouter());
app.startServer();

process.on("uncaughtException", (err) => {
  // eslint-disable-next-line no-console
  console.log("-------------------------------------------------------");
  console.log(err);
  console.log("-------------------------------------------------------");
});
