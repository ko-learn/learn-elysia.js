import cookie from "@elysiajs/cookie";
import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { getUsers } from "./app/controllers/admin/user.controller";
import { corsConfig, elysiaConfig, swaggerConfig } from "./config/app";
import database from "./config/database";

export default function init(): Elysia {
    const app = new Elysia(elysiaConfig());

    database();

    app.use(cors(corsConfig()));
    app.use(cookie());
    app.use(swagger(swaggerConfig()));

    app.get("/", getUsers as any);

    app.get("/about", ({ set }) => {
        set.headers["Content-Type"] = "application/json";
        set.headers["X-Powered-By"] = "elysiajs";
        set.status = 200;

        return { message: "About Elysia!" };
    });

    return app;
}
