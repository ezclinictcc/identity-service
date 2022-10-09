import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

const profileForeignKey = new TableForeignKey({
  columnNames: ["idProfile"],
  referencedColumnNames: ["id"],
  referencedTableName: "profile",
  name: "users_x_profile",
});

const userTypeForeignKey = new TableForeignKey({
  columnNames: ["idUserType"],
  referencedColumnNames: ["id"],
  referencedTableName: "user_type",
  name: "users_x_user_type",
});

const userForeignKey = new TableForeignKey({
  columnNames: ["idUser"],
  referencedColumnNames: ["id"],
  referencedTableName: "users",
  name: "clinic_x_users",
});

const clinicForeignKey = new TableForeignKey({
  columnNames: ["idClinic"],
  referencedColumnNames: ["id"],
  referencedTableName: "clinic",
  name: "users_x_clinic",
});

export class V1Release1660256966234 implements MigrationInterface {
  // CREATE USER RELATION WITH PROFILE
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKeys("users", [profileForeignKey]);
    await queryRunner.createForeignKeys("users", [userTypeForeignKey]);
    await queryRunner.createForeignKeys("users", [clinicForeignKey]);
    await queryRunner.createForeignKeys("clinic", [userForeignKey]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys("users", [profileForeignKey]);
    await queryRunner.dropForeignKeys("users", [userTypeForeignKey]);
    await queryRunner.dropForeignKeys("clinic", [userForeignKey]);
  }
}
