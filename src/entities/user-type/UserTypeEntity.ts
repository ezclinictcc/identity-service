import { CommonEntity } from "../common/CommonEntity";
import { IDBSchema } from "../schemas";

export const UserTypeSchema: IDBSchema = {
  name: "user_type",
  columns: [
    {
      name: "id",
      type: "uuid",
      isPrimary: true,
      isNullable: false,
    },
    {
      name: "userTypeName",
      type: "varchar",
      isPrimary: true,
      isNullable: false,
    },
  ],
};

export class UserTypeEntity extends CommonEntity {
  public readonly userTypeName: string;

  public constructor(id: string, userTypeName: string) {
    super(id, UserTypeSchema);
    this.userTypeName = userTypeName;
    Object.freeze(this);
  }
}
