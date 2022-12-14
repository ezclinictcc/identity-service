import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";
import cors from "cors";
import { getRepositoryAdapter } from "./adapters";
import ExpressAppConfig from "./adapters/external/express/ExpressAppAdapter";
import { IAppConfig } from "./external/interfaces/IAppConfig";
import routes from "./external/routes";
import swaggerFile from "./swagger.json";
import corsAdapter from "./adapters/external/cors";

dotenv.config({
  path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env",
});

const port = process.env.PORT || 8080;
const url = "https://identityservice1.herokuapp.com";
const orm = getRepositoryAdapter();
const corsOptions = {
  origin: ["*"],
  preflightContinue: false,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

orm.createConnection();

swaggerFile.servers[0].url = `${url}/identity-service`;

const app: IAppConfig = ExpressAppConfig.getInstance();

app.setMidleware(corsAdapter);
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
