import { MigrationInterface, QueryRunner, Table, TableOptions } from "typeorm";
import { ProfileSchema } from "../../../../../entities/profile/ProfileEntity";
import {
  PROFILE_ACTIONS,
  PROFILE_TYPES,
} from "../../../../../entities/profile/ProfileEnums";
import { UuidGeneratorAdapter } from "../../../uuid/UuidGeneratoryAdapter";
import { createTableOptions } from "../utils/functions";

export class CreateProfile1660229516240 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableOptions: TableOptions = {
      name: ProfileSchema.name,
    };
    tableOptions.columns = createTableOptions(ProfileSchema);

    await queryRunner.createTable(new Table(tableOptions));

    /* const uuid = new UuidGeneratorAdapter();
    await queryRunner.query(
      `INSERT INTO ${ProfileSchema.name} VALUES ('${uuid.createId()}','${
        PROFILE_TYPES.MANAGER
      }', '${PROFILE_ACTIONS.USER};${PROFILE_ACTIONS.PROFILE};${
        PROFILE_ACTIONS.CLINIC_SEARCH
      };${PROFILE_ACTIONS.DOCTOR_SCHEDULE}; ${
        PROFILE_ACTIONS.REPORTS
      }', CURRENT_TIMESTAMP)`
    );

    await queryRunner.query(
      `INSERT INTO ${ProfileSchema.name} VALUES ('${uuid.createId()}','${
        PROFILE_TYPES.DOCTOR
      }', '${PROFILE_ACTIONS.CLINIC_SEARCH};${
        PROFILE_ACTIONS.DOCTOR_SCHEDULE
      }', CURRENT_TIMESTAMP)`
    );

    await queryRunner.query(
      `INSERT INTO ${ProfileSchema.name} VALUES ('${uuid.createId()}','${
        PROFILE_TYPES.PATIANT
      }', '${PROFILE_ACTIONS.CLINIC_SEARCH}', CURRENT_TIMESTAMP)`
    ); */
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("profile");
  }
}
