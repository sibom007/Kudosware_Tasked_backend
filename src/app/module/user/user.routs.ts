import express from 'express';
import { UserControllers } from './user.contorler';
import { userValidation } from './user.zodvalidation';
import validateRequest from '../../middlewares/validateRequest';



const router = express.Router();

router.post(
  "/register",
  validateRequest(userValidation.createUser),
  UserControllers.createUser
);
router.post("/create-hr", UserControllers.createHR);
router.post("/login", UserControllers.LoginHR);
router.get("/candidates", UserControllers.GetUser);



export const UserRoutes = router;
