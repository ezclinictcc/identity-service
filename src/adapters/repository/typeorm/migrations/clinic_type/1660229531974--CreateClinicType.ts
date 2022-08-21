import { MigrationInterface, QueryRunner, Table, TableOptions } from "typeorm";
import { ClinicTypeSchema } from "../../../../../entities/clinic-type/ClinicTypeEntity";
import { createTableOptions } from "../utils/functions";

export class CreateClinicType1660229531974 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableOptions: TableOptions = {
      name: ClinicTypeSchema.name,
    };
    tableOptions.columns = createTableOptions(ClinicTypeSchema);

    await queryRunner.createTable(new Table(tableOptions));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("clinic_type");
  }
}
