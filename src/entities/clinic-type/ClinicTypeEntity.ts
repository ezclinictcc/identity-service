import { CommonEntity } from "../common/CommonEntity";
import { IDBSchema } from "../schemas";

export const ClinicTypeSchema: IDBSchema = {
  name: "clinic_type",
  columns: [
    {
      name: "id",
      type: "uuid",
      isPrimary: true,
      isNullable: false,
    },
    {
      name: "idClinic",
      type: "uuid",
      isPrimary: true,
      isNullable: false,
    },
    {
      name: "clinicTypes",
      type: "varchar",
      isPrimary: false,
      isNullable: false,
    },
  ],
};

export class ClinicTypeEntity extends CommonEntity {
  public readonly clinicTypeName: string;

  public constructor(id: string, clinicTypeName: string) {
    super(id, ClinicTypeSchema);
    this.clinicTypeName = clinicTypeName;
    Object.freeze(this);
  }
}
