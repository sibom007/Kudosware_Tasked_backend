import { Router } from "express";
import { UserRoutes } from "../app/module/user/user.routs";

const router = Router();

const moduleRoutes = [
  {
    path: "/",
    route: UserRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
