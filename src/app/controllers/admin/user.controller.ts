import { Context } from "elysia";
import User from "../../models/user";

export async function getUsers({ set }: Context): Promise<Record<string, any>> {
    try {
        const users = await User.find({});

        set.headers["Content-Type"] = "application/json";
        set.headers["X-Powered-By"] = "elysiajs";
        set.status = 200;

        return { message: "Success get users", users };
    } catch (err) {
        set.headers["Content-Type"] = "application/json";
        set.headers["X-Powered-By"] = "elysiajs";
        set.status = 500;

        return { message: "Something Went Wrong!" };
    }
}
