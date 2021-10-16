import { User } from "../../entities/User";
import { UserSchema } from "../../infra/shared/database/mongoose/schemas/UserSchema";
import { IUsersRepository } from "../IUsersRepository";

export class MongooseUsersRepository implements IUsersRepository {
  
  async findByEmail(email: string) {
    const user = await UserSchema.findOne({ email })
    return user;    
  }

  async save(user: User) {
    UserSchema.create(user);
    return user;
  }
}