import { Request, Response } from "express";
import { ListUserService } from "../../service/user/ListUserService";

class ListUsersController {
  async handle(request: Request, response: Response) {
  
    const listUsersService = new ListUserService();

    const users = await listUsersService.execute();

    return response.json(users);

  }
  async handleOne(request: Request, response: Response) {
    
    const listUsersService = new ListUserService();
    const id= request.params.id;
    console.log(id);
    const user = await listUsersService.load(id);

    return response.json(user);

  }
}

export { ListUsersController };