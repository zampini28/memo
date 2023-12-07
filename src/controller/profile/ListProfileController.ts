import { Request, Response } from "express";
import { ListProfileService } 
from "../../service/profile/ListProfileService";

class ListProfileController {
  async handle(request: Request, response: Response) {
  
    const listUsersService = new ListProfileService();

    const users = await listUsersService.execute();

    return response.json(users);

  }
}

export { ListProfileController };