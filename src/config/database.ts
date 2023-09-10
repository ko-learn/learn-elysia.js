import mongoose from "mongoose";

export default async function database() {
    const connect = async () => {
        try {
            const conn = await mongoose.connect(Bun.env.MONGO_URI);
            const message = `MongoDB Connected: ${conn.connection.host}:${conn.connection.port}`;
            console.log("Database", message);
        } catch (error: any) {
            console.log("Database", error.message);
            return process.exit(1);
        }
    };

    await connect();

    mongoose.connection.on("disconnected", connect);
}
