import { ProfilesRepositories } 
from "../../repositories/profile/ProfilesRepositories";
import { getCustomRepository } from "typeorm";
interface IProfileRequest {
    name: string;
  }  
  class CreateProfileService {
    async execute({ name }: IProfileRequest) {       
       
      const profilesRepositories = getCustomRepository(ProfilesRepositories);
      const prof = profilesRepositories.create(
        {
        name,
       
      });
      return await profilesRepositories.save(prof);  
      
    }
  }  
  export { CreateProfileService };
