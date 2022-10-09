/* eslint-disable no-unreachable */
import { UuidGeneratorAdapter } from "../../adapters/repository/uuid/UuidGeneratoryAdapter";
import { ClinicEntity } from "../../entities/clinic/ClinicEntity";
import { UserEntity } from "../../entities/user/UserEntity";
import CommonRepository from "../../usecases/repository/common/CommonRepository";
import { IBaseConnection } from "../../usecases/repository/interfaces/IBaseConnection";
import CommonService from "../../usecases/service/common/CommonService";
import { IAppLogger } from "../../usecases/service/interfaces/IAppLogger";
import { IHttpRequest } from "../interfaces/http-request";
import { LogCriticality } from "../interfaces/log-criticality";
import { BaseController } from "./BaseController";

class ClinicController extends BaseController<UserEntity, IBaseConnection> {
  // private readonly logger: IAppLogger;

  private readonly repositoryManager: IBaseConnection;

  private entityName: string = "clinic";

  public constructor(repositoryManager: IBaseConnection) {
    super();
    // this.logger = logger;
    this.repositoryManager = repositoryManager;
  }

  create = async ({ body, logger }: IHttpRequest) => {
    logger.showLog(LogCriticality.INFO, "Enter create...");
    const commonRepository = new CommonRepository<ClinicEntity>(
      this.entityName
    );
    const service = new CommonService(commonRepository);
    const uuid = new UuidGeneratorAdapter();

    const clinic: ClinicEntity = new ClinicEntity(
      uuid.createId(),
      body.idUser,
      body.name,
      body.clinicSpecialty,
      body.country,
      body.state,
      body.city,
      body.cep,
      body.district,
      body.number,
      null
    );
    console.log("number", clinic);

    const result: any = await service.create(
      clinic,
      logger,
      this.repositoryManager
    );
    logger.showLog(LogCriticality.INFO, "Exit create...");
    return result;
  };

  update = async ({ body, logger }: IHttpRequest) => {
    logger.showLog(LogCriticality.INFO, "Enter update...");
    const commonRepository = new CommonRepository<ClinicEntity>(
      this.entityName
    );
    const service = new CommonService(commonRepository);

    const clinic: ClinicEntity = new ClinicEntity(
      body.id,
      null,
      body.name,
      body.clinicSpecialty,
      body.country,
      body.state,
      body.city,
      body.cep,
      body.district,
      body.number,
      null
    );
    const result: any = await service.update(
      clinic,
      logger,
      this.repositoryManager
    );
    logger.showLog(LogCriticality.INFO, "Exit update...");
    return result;
  };

  find = async ({ param, logger }: IHttpRequest) => {
    logger.showLog(LogCriticality.INFO, "Enter find...");

    const commonRepository = new CommonRepository<ClinicEntity>(
      this.entityName
    );
    const service = new CommonService(commonRepository);

    const clinic: ClinicEntity = new ClinicEntity(
      param.id,
      param.idUser,
      param.name,
      param.clinicSpecialty,
      param.country,
      param.state,
      param.city,
      param.cep,
      param.district,
      param.number,
      null
    );

    const result: Promise<any> = service.find(
      clinic,
      logger,
      this.repositoryManager
    );

    logger.showLog(LogCriticality.INFO, "Exit find...");
    return result;
  };

  remove = async ({ param, logger }: IHttpRequest) => {
    logger.showLog(LogCriticality.INFO, "Enter delete...");
    const commonRepository = new CommonRepository<ClinicEntity>(
      this.entityName
    );
    const service = new CommonService(commonRepository);

    const clinic: ClinicEntity = new ClinicEntity(
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
      null
    );
    const result: any = await service.delete(
      clinic,
      logger,
      this.repositoryManager
    );
    logger.showLog(LogCriticality.INFO, "Exit delete...");
    return result;
  };
}

export default ClinicController;
