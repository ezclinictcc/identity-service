import { CommonEntity } from "../common/CommonEntity";
import { IDBSchema } from "../schemas";

export const ClinicSchema: IDBSchema = {
  name: "clinic",
  columns: [
    {
      name: "id",
      type: "uuid",
      isPrimary: true,
      isNullable: false,
    },
    {
      name: "idUser",
      type: "uuid",
      isPrimary: true,
      isNullable: false,
    },
    {
      name: "name",
      type: "varchar",
      isPrimary: false,
      isNullable: false,
    },
    {
      name: "clinicSpecialty",
      type: "varchar",
      isPrimary: false,
      isNullable: false,
    },
    {
      name: "country",
      type: "varchar",
      isNullable: false,
    },
    {
      name: "state",
      type: "varchar",
      isNullable: false,
    },
    {
      name: "city",
      type: "varchar",
      isNullable: false,
    },
    {
      name: "district",
      type: "varchar",
      isNullable: false,
    },
    {
      name: "number",
      type: "numeric",
      isNullable: false,
    },
    {
      name: "cep",
      type: "varchar",
      isNullable: false,
    },
    {
      name: "createdAt",
      type: "timestamp",
      default: "now()",
      isNullable: true,
    },
  ],
};

export class ClinicEntity extends CommonEntity {
  public readonly name: string;

  public readonly idUser: string;

  public readonly clinicSpecialty: string;

  public readonly country: string;

  public readonly state: string;

  public readonly city: string;

  public readonly district: string;

  public readonly number: number;

  public readonly cep: string;

  public readonly createdAt: Date;

  public constructor(
    id: string,
    idUser: string,
    name: string,
    clinicSpecialty: string,
    country: string,
    state: string,
    city: string,
    cep: string,
    district: string,
    number: number,
    createdAt: Date
  ) {
    super(id, ClinicSchema);
    this.idUser = idUser;
    this.name = name;
    this.clinicSpecialty = clinicSpecialty;
    this.country = country;
    this.state = state;
    this.city = city;
    this.cep = cep;
    this.district = district;
    this.number = number;
    this.createdAt = createdAt;
    Object.freeze(this);
  }
}
