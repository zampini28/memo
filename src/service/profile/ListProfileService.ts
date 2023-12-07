import { getCustomRepository } from "typeorm";
import { ProfilesRepositories } 
from "../../repositories/profile/ProfilesRepositories";
class ListProfileService {
  async execute() {
    const profilesRepositories = getCustomRepository(ProfilesRepositories);

    const profiles = await profilesRepositories.find();
    return  profiles;

  }
}

export { ListProfileService };