import mongoose, { connect } from "mongoose";
const dbUser = ""
const dbPassword = " "
const connnect = () =>{
    mongoose.connect(
        `stingDeConexao`
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