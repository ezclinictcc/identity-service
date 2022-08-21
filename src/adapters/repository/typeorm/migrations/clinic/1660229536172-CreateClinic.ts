import { MigrationInterface, QueryRunner, Table, TableOptions } from "typeorm";
import { ClinicSchema } from "../../../../../entities/clinic/ClinicEntity";
import { createTableOptions } from "../utils/functions";

export class CreateClinic1660229536172 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableOptions: TableOptions = {
      name: ClinicSchema.name,
    };
    tableOptions.columns = createTableOptions(ClinicSchema);

    await queryRunner.createTable(new Table(tableOptions));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("clinic");
  }
}
