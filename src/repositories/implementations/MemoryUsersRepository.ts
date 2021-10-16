import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class MemoryUsersRepository implements IUsersRepository {

  private users: User[] = [];

  async findByEmail(email: string) {
    const user = this.users.find(user => user.email === email)
    return user;
  }

  async save(user: User) {
    this.users.push(user);
    return user;
  }

}