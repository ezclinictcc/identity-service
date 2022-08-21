import { getRepositoryAdapter } from "../../../adapters";
import { ExpressRouteAdapter } from "../../../adapters/external/express/ExpressRouteAdapter";
import { WinsonLoggerAdapter } from "../../../adapters/external/winson/WinsonAdapter";
import UserController from "../../../presentation/controllers/UserController";
import { HttpMethods } from "../../../presentation/interfaces/http-request";
import { IAppRoute } from "../../interfaces/IAppRoute";

const logger = WinsonLoggerAdapter.getInstance();
const userRoute: IAppRoute = ExpressRouteAdapter.getInstance(logger);
userRoute.createRoute(
  HttpMethods.GET,
  "/",
  new UserController(getRepositoryAdapter())
);
userRoute.createRoute(
  HttpMethods.POST,
  "/",
  new UserController(getRepositoryAdapter())
);
userRoute.createRoute(
  HttpMethods.PUT,
  "/",
  new UserController(getRepositoryAdapter())
);
userRoute.createRoute(
  HttpMethods.DELETE,
  "/",
  new UserController(getRepositoryAdapter())
);

export default userRoute;
