/* eslint-disable no-unreachable */
import { UuidGeneratorAdapter } from "../../adapters/repository/uuid/UuidGeneratoryAdapter";
import { ProfileEntity } from "../../entities/profile/ProfileEntity";
import { UserEntity } from "../../entities/user/UserEntity";
import CommonRepository from "../../usecases/repository/common/CommonRepository";
import { IBaseConnection } from "../../usecases/repository/interfaces/IBaseConnection";
import CommonService from "../../usecases/service/common/CommonService";
import { IHttpRequest } from "../interfaces/http-request";
import { LogCriticality } from "../interfaces/log-criticality";
import { BaseController } from "./BaseController";

class ProfileController extends BaseController<UserEntity, IBaseConnection> {
  // private readonly logger: IAppLogger;

  private readonly repositoryManager: IBaseConnection;

  private entityName: string = "profile";

  public constructor(repositoryManager: IBaseConnection) {
    super();
    // this.logger = logger;
    this.repositoryManager = repositoryManager;
  }

  create = async ({ body, logger }: IHttpRequest) => {
    logger.showLog(LogCriticality.INFO, "Enter create...");
    const commonRepository = new CommonRepository<ProfileEntity>(
      this.entityName
    );
    const service = new CommonService(commonRepository);
    const uuid = new UuidGeneratorAdapter();

    const profile: ProfileEntity = new ProfileEntity(
      uuid.createId(),
      body.name,
      body.actions,
      null
    );

    const result: any = await service.create(
      profile,
      logger,
      this.repositoryManager
    );
    logger.showLog(LogCriticality.INFO, "Exit create...");
    return result;
  };

  update = async ({ body, logger }: IHttpRequest) => {
    logger.showLog(LogCriticality.INFO, "Enter update...");
    const commonRepository = new CommonRepository<ProfileEntity>(
      this.entityName
    );
    const service = new CommonService(commonRepository);

    const profile: ProfileEntity = new ProfileEntity(
      body.id,
      body.name,
      body.actions,
      null
    );
    const result: any = await service.update(
      profile,
      logger,
      this.repositoryManager
    );
    logger.showLog(LogCriticality.INFO, "Exit update...");
    return result;
  };

  find = async ({ param, logger }: IHttpRequest) => {
    logger.showLog(LogCriticality.INFO, "Enter find...");

    const commonRepository = new CommonRepository<ProfileEntity>(
      this.entityName
    );
    const service = new CommonService(commonRepository);

    const profile: ProfileEntity = new ProfileEntity(
      param.id,
      param.name,
      param.actions,
      null
    );

    const result: Promise<any> = service.find(
      profile,
      logger,
      this.repositoryManager
    );

    logger.showLog(LogCriticality.INFO, "Exit find...");
    return result;
  };

  remove = async ({ param, logger }: IHttpRequest) => {
    logger.showLog(LogCriticality.INFO, "Enter delete...");
    const commonRepository = new CommonRepository<ProfileEntity>(
      this.entityName
    );
    const service = new CommonService(commonRepository);

    const profile: ProfileEntity = new ProfileEntity(
      param.id,
      null,
      null,
      null
    );
    const result: any = await service.delete(
      profile,
      logger,
      this.repositoryManager
    );
    logger.showLog(LogCriticality.INFO, "Exit delete...");
    return result;
  };
}

export default ProfileController;
