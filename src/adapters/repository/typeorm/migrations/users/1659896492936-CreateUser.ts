import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumnOptions,
  TableOptions,
} from "typeorm";
import { IColumnSchema } from "../../../../../entities/schemas";
import { UserTypeSchema } from "../../../../../entities/user-type/UserTypeEntity";
import { UserSchema } from "../../../../../entities/user/UserEntity";
import { UuidGeneratorAdapter } from "../../../uuid/UuidGeneratoryAdapter";
import { createTableOptions } from "../utils/functions";

export class CreateUser1659896492936 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    /* const userTypeTableOptions: TableOptions = {
      name: UserTypeSchema.name,
    };
    userTypeTableOptions.columns = createTableOptions(UserTypeSchema);

    await queryRunner.createTable(new Table(userTypeTableOptions)); */

    /* const uuid = new UuidGeneratorAdapter();
    await queryRunner.query(
      `INSERT INTO ${
        UserTypeSchema.name
      } VALUES ('${uuid.createId()}','PATIANT')`
    );

    await queryRunner.query(
      `INSERT INTO ${
        UserTypeSchema.name
      } VALUES ('${uuid.createId()}','DOCTOR')`
    );

    await queryRunner.query(
      `INSERT INTO ${
        UserTypeSchema.name
      } VALUES ('${uuid.createId()}','MANAGER')`
    ); */

    const tableOptions: TableOptions = {
      name: UserSchema.name,
      /* foreignKeys: [
        {
          columnNames: ["id_user_type"],
          referencedColumnNames: ["id"],
          referencedTableName: "user_type",
        },
      ], */
    };
    tableOptions.columns = createTableOptions(UserSchema);
    await queryRunner.createTable(new Table(tableOptions), true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
