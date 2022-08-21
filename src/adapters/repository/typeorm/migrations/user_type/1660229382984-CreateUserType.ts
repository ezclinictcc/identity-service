import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumnOptions,
  TableOptions,
} from "typeorm";
import { IColumnSchema } from "../../../../../entities/schemas";
import { UserTypeSchema } from "../../../../../entities/user-type/UserTypeEntity";
import { createTableOptions } from "../utils/functions";

export class CreateUserType1660229382984 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableOptions: TableOptions = {
      name: UserTypeSchema.name,
    };
    tableOptions.columns = createTableOptions(UserTypeSchema);

    await queryRunner.createTable(new Table(tableOptions));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user_type");
  }
}
