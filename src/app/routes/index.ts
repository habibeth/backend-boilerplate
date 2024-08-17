import { Router } from "express"
import { AdminRoutes } from "../module/Admin/admin.route";
import { userRoutes } from "../module/user/user.route";


const router = Router()

const moduleRoutes = [
    {
        path: '/admin',
        route: AdminRoutes,
    },
    {
        path: '/users',
        route: userRoutes,
    },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router;

