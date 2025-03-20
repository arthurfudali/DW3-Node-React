import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connect = () =>{
    mongoose.connect(
        `mongodb+srv://arthurfudali:${process.env.DB_PASSWORD}@cluster0.79onb.mongodb.net/api-the-games?retryWrites=true&w=majority&appName=Cluster0&ssl`
    );
    const connection = mongoose.connection;
    connection.on("error", () => {
        console.log("Erro ao conectar ao servidor")
    });
    connection.on("open", () => {
        console.log("Conectado ao servidor")
    });
};
connect();
export default mongoose;