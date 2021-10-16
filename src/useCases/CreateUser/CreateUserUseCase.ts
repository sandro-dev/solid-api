import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {

  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider,
  ) {}

  async execute(data: ICreateUserRequestDTO) {

    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if(userAlreadyExists)
      throw new Error('User already exists')

    const user = new User(data)

    const savedUser = await this.usersRepository.save(user)

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: 'Team ToDo App',
        email: 'sandro.dev2@gmail.com'
      },
      subject: 'Seja ben-vindo ao ToDo App',
      body: '<p>Sua inscrição ocorreu com sucesso <br />'
            +'Estamos felizes em te ter por aqui ;) </p>'
    })

    return savedUser;

  }

}