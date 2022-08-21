import { CommonEntity } from "../common/CommonEntity";
import { IDBSchema } from "../schemas";

export const UserSchema: IDBSchema = {
  name: "users",
  columns: [
    {
      name: "id",
      type: "uuid",
      isPrimary: true,
      isNullable: false,
    },
    {
      name: "idUserType",
      type: "uuid",
      isNullable: false,
    },
    {
      name: "idProfile",
      type: "uuid",
      isNullable: false,
    },
    {
      name: "name",
      type: "varchar",
      isNullable: false,
    },
    {
      name: "email",
      type: "varchar",
      isNullable: false,
    },
    {
      name: "password",
      type: "varchar",
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

export class UserEntity extends CommonEntity {
  public readonly name: string;

  public readonly idUserType: string;

  public readonly idProfile: string;

  public readonly email: string;

  public readonly createdAt: Date;

  public readonly password: string;

  public readonly country: string;

  public readonly state: string;

  public readonly city: string;

  public readonly district: string;

  public readonly number: number;

  public readonly cep: string;

  public constructor(
    id: string,
    name: string,
    idUserType: string,
    idProfile: string,
    email: string,
    password: string,
    country: string,
    state: string,
    city: string,
    district: string,
    number: number,
    cep: string,
    createdAt: Date
  ) {
    super(id, UserSchema);
    this.name = name;
    this.idUserType = idUserType;
    this.idProfile = idProfile;
    this.email = email;
    this.password = password;
    this.country = country;
    this.state = state;
    this.city = city;
    this.district = district;
    this.number = number;
    this.cep = cep;
    this.createdAt = createdAt;
    Object.freeze(this);
  }
}
