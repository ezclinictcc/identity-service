import { getRepositoryAdapter } from "../../../adapters";
import { ExpressRouteAdapter } from "../../../adapters/external/express/ExpressRouteAdapter";
import { WinsonLoggerAdapter } from "../../../adapters/external/winson/WinsonAdapter";
import ClinicController from "../../../presentation/controllers/ClinicController";
import { HttpMethods } from "../../../presentation/interfaces/http-request";
import { IAppRoute } from "../../interfaces/IAppRoute";

const logger = WinsonLoggerAdapter.getInstance();

const clinicRoute: IAppRoute = ExpressRouteAdapter.getInstance(logger);
clinicRoute.createRoute(
  HttpMethods.GET,
  "/",
  new ClinicController(getRepositoryAdapter())
);
clinicRoute.createRoute(
  HttpMethods.POST,
  "/",
  new ClinicController(getRepositoryAdapter())
);
clinicRoute.createRoute(
  HttpMethods.PUT,
  "/",
  new ClinicController(getRepositoryAdapter())
);
clinicRoute.createRoute(
  HttpMethods.DELETE,
  "/",
  new ClinicController(getRepositoryAdapter())
);

export default clinicRoute;
