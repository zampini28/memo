import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/user/UsersRepositories";
class ListUserService {
  async execute() {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const users = await usersRepositories
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.profile","profile")
    .getMany();
    return  users;

  }

   async load(id) {
    console.log(id);
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.profile","profile")
    .where('user.id = :id', { id })
    .getOne();
    return  user;

  }
}

export { ListUserService };