import { Router } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";
import { ListUsersController } from "./controller/user/LIstUserController";
import { UpdateUserController} from "./controller/user/UpdateUserController";
import { DeleteUserController} from "./controller/user/DeleteUserController";
import {AuthenticateUserController} from "./controller/autentication/AutenticationController";
import {CreateProfileController} from "./controller/profile/CreateProfileController";
import {ListProfileController} from "./controller/profile/ListProfileController";

import { ensureAuthenticated} from "./middleware/ensureAutenticated";

const createUserController  = new CreateUserController();
const listUsersController= new ListUsersController();
const updateUserController  = new UpdateUserController();
const autenticationUserController  = new AuthenticateUserController();
const deleteUserController  = new DeleteUserController();
const createProfileController  = new CreateProfileController();
const listProfileController  = new ListProfileController();

const router = Router();
router.post("/login", autenticationUserController.handle);
router.post("/reset", autenticationUserController.resetPassword);


router.post("/users", createUserController.handle);
router.post("/profile", createProfileController.handle);
router.get("/profile", listProfileController.handle);

router.get("/users", listUsersController.handle);
router.put("/users", updateUserController.handle);
router.delete("/users/:id", deleteUserController.handle);
router.get("/users/:id", listUsersController.handleOne);

router.use(ensureAuthenticated)
export {router}