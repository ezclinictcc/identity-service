import { ExpressRouteAdapter } from "../../adapters/external/express/ExpressRouteAdapter";
import { WinsonLoggerAdapter } from "../../adapters/external/winson/WinsonAdapter";
import { IAppRoute } from "../interfaces/IAppRoute";
import clinicRoute from "./clinic-routes";
import profileRoute from "./profile-routes";
import userRoute from "./user-routes";

const service = "identity-service";
const logger = WinsonLoggerAdapter.getInstance();
const route: IAppRoute = ExpressRouteAdapter.getInstance(logger);
route.useRoute(`/${service}/user`, userRoute.getRouter());
route.useRoute(`/${service}/profile`, profileRoute.getRouter());
route.useRoute(`/${service}/clinic`, clinicRoute.getRouter());

export default route;
