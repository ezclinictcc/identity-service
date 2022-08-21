import { getRepositoryAdapter } from "../../../adapters";
import { ExpressRouteAdapter } from "../../../adapters/external/express/ExpressRouteAdapter";
import { WinsonLoggerAdapter } from "../../../adapters/external/winson/WinsonAdapter";
import ProfileController from "../../../presentation/controllers/ProfileController";
import { HttpMethods } from "../../../presentation/interfaces/http-request";
import { IAppRoute } from "../../interfaces/IAppRoute";

const logger = WinsonLoggerAdapter.getInstance();

const profileRoute: IAppRoute = ExpressRouteAdapter.getInstance(logger);
profileRoute.createRoute(
  HttpMethods.GET,
  "/",
  new ProfileController(getRepositoryAdapter())
);
profileRoute.createRoute(
  HttpMethods.POST,
  "/",
  new ProfileController(getRepositoryAdapter())
);
profileRoute.createRoute(
  HttpMethods.PUT,
  "/",
  new ProfileController(getRepositoryAdapter())
);
profileRoute.createRoute(
  HttpMethods.DELETE,
  "/",
  new ProfileController(getRepositoryAdapter())
);

export default profileRoute;
