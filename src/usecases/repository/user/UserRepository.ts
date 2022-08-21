import { UserEntity } from "../../../entities/user/UserEntity";
import { IUserRepository } from "../interfaces/IUserRepository";

class UserRepository implements IUserRepository<UserEntity> {
  private static INSTANCE: UserRepository;

  public static getInstance(): UserRepository {
    if (!UserRepository.INSTANCE) {
      UserRepository.INSTANCE = new UserRepository();
    }
    return UserRepository.INSTANCE;
  }

  findById(id: string): Promise<UserEntity[]> {
    return null;
  }

  add(user: UserEntity): Promise<UserEntity> {
    return null;
  }

  delete(id: string): Promise<UserEntity> {
    return null;
  }

  find(user: UserEntity): Promise<UserEntity[]> {
    return null;
  }

  update(user: UserEntity): Promise<UserEntity> {
    return null;
  }
}

export default UserRepository;
