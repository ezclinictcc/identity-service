/* eslint-disable no-unreachable */
import { UuidGeneratorAdapter } from "../../adapters/repository/uuid/UuidGeneratoryAdapter";
import { UserEntity } from "../../entities/user/UserEntity";
import CommonRepository from "../../usecases/repository/common/CommonRepository";
import { IBaseConnection } from "../../usecases/repository/interfaces/IBaseConnection";
import CommonService from "../../usecases/service/common/CommonService";
import { IAppLogger } from "../../usecases/service/interfaces/IAppLogger";
import { IHttpRequest } from "../interfaces/http-request";
import { LogCriticality } from "../interfaces/log-criticality";
import { BaseController } from "./BaseController";

class UserController extends BaseController<UserEntity, IBaseConnection> {
  // private readonly logger: IAppLogger;

  private readonly repositoryManager: IBaseConnection;

  private entityName: string = "users";

  public constructor(repositoryManager: IBaseConnection) {
    super();
    // this.logger = logger;
    this.repositoryManager = repositoryManager;
  }

  create = async ({ body, logger }: IHttpRequest) => {
    logger.showLog(LogCriticality.INFO, "Enter create...");
    const commonRepository = new CommonRepository<UserEntity>(this.entityName);
    const service = new CommonService(commonRepository);
    const uuid = new UuidGeneratorAdapter();
    const id = body.id ? body.id : uuid.createId();
    const user: UserEntity = new UserEntity(
      id,
      body.idClinic,
      body.name,
      body.idUserType,
      body.idProfile,
      body.email,
      body.password,
      body.country,
      body.state,
      body.city,
      body.district,
      body.number,
      body.cep,
      null
    );
    const result: any = await service.create(
      user,
      logger,
      this.repositoryManager
    );
    logger.showLog(LogCriticality.INFO, "Exit create...");
    return result;
  };

  update = async ({ body, logger }: IHttpRequest) => {
    logger.showLog(LogCriticality.INFO, "Enter update...");
    const commonRepository = new CommonRepository<UserEntity>(this.entityName);
    const service = new CommonService(commonRepository);
    const user: UserEntity = new UserEntity(
      body.id,
      body.idClinic,
      body.name,
      body.idUserType,
      body.idProfile,
      body.email,
      body.password,
      body.country,
      body.state,
      body.city,
      body.district,
      body.number,
      body.cep,
      null
    );
    const result: any = await service.update(
      user,
      logger,
      this.repositoryManager
    );
    logger.showLog(LogCriticality.INFO, "Exit update...");
    return result;
  };

  find = async ({ param, logger }: IHttpRequest) => {
    logger.showLog(LogCriticality.INFO, "Enter find...");

    const commonRepository = new CommonRepository<UserEntity>(this.entityName);
    const service = new CommonService(commonRepository);
    const user = new UserEntity(
      param.id,
      param.idClinic,
      param.name,
      param.idUserType,
      param.idProfile,
      param.email,
      null,
      param.country,
      param.state,
      param.city,
      param.district,
      param.number,
      param.cep,
      null
    );

    const result: Promise<any> = service.find(
      user,
      logger,
      this.repositoryManager
    );

    logger.showLog(LogCriticality.INFO, "Exit find...");
    return result;
  };

  remove = async ({ param, logger }: IHttpRequest) => {
    logger.showLog(LogCriticality.INFO, "Enter delete...");
    const commonRepository = new CommonRepository<UserEntity>(this.entityName);
    const service = new CommonService(commonRepository);
    const user = new UserEntity(
      param.id,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    );
    const result: any = await service.delete(
      user,
      logger,
      this.repositoryManager
    );
    logger.showLog(LogCriticality.INFO, "Exit delete...");
    return result;
  };
}

export default UserController;
