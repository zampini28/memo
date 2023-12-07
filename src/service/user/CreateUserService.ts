import { UsersRepositories } from "../../repositories/user/UsersRepositories";
import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
    profile:string;
  }  
  class CreateUserService {
    async execute({ name, email, admin = false, password,profile }: IUserRequest) {       
      const usersRepository = getCustomRepository(UsersRepositories);
      if (!email) {
        throw new Error("Email incorrect");     }  
      const passwordHash = await hash(password, 8);
      const user = usersRepository.create(
        {
        name, email, admin, password: passwordHash,
        profile:{id:profile}
      });
      await usersRepository.save(user);  
      return user;
    }
  }  
  export { CreateUserService };
