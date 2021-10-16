import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { MemoryUsersRepository } from "../../repositories/implementations/MemoryUsersRepository";
import { MongooseUsersRepository } from "../../repositories/implementations/MongooseUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const memoryUsersRepository = new MemoryUsersRepository();
const mongooseUsersRepository = new MongooseUsersRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  mongooseUsersRepository,
  mailtrapMailProvider
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }