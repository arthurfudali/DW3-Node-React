import mongoose from "mongoose";
const dbUser = "arthurfudali"
const dbPassword = "eiyxUnJfIjCkTSRn"
const connect = () =>{
    mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.79onb.mongodb.net/api-the-games?retryWrites=true&w=majority&appName=Cluster0`
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