import { CommonEntity } from "../common/CommonEntity";
import { IDBSchema } from "../schemas";

export const ProfileSchema: IDBSchema = {
  name: "profile",
  columns: [
    {
      name: "id",
      type: "uuid",
      isPrimary: true,
      isNullable: false,
    },
    {
      name: "name",
      type: "varchar",
      isPrimary: true,
      isNullable: false,
    },
    {
      name: "actions",
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

export class ProfileEntity extends CommonEntity {
  public readonly name: string;

  public readonly actions: string;

  public readonly createdAt: Date;

  public constructor(
    id: string,
    name: string,
    actions: string,
    createdAt: Date
  ) {
    super(id, ProfileSchema);
    this.name = name;
    this.actions = actions;
    this.createdAt = createdAt;
    Object.freeze(this);
  }
}
