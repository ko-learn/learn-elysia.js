import { ElysiaSwaggerConfig } from "@elysiajs/swagger/src/types";
import { ElysiaConfig } from "elysia";

export const elysiaConfig = (): Partial<ElysiaConfig<"">> => ({
    serve: {
        hostname: "0.0.0.0",
    },
});

export const corsConfig = () => ({
    origin: "*",
    credentials: true,
});

export const swaggerConfig = (): ElysiaSwaggerConfig => ({
    documentation: {
        info: {
            title: "Learn elysiajs",
            version: "1.0.50",
        },
    },
});
