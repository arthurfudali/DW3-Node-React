import userService from "../services/userService.js";
import jwt from "jsonwebtoken";

// JWTSecret
const JWTSecret = "apithegamessecret";

// Função para cadastrar um usuário
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body; // pega os parametros do corpo da requisição
    // implementar aqui a função de hash de senha
    await userService.create(name, email, password); // chama a função de cadastro de usuário
    res.sendStatus(201); // 201 (CREATED)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};
// Autenticando um usuário
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validação de email
    if (email != undefined) {
      const user = await userService.getOne(email); //busca o email no banco
      // verifica se o usuario existe
      if (user != undefined) {
        // verifica se a senha está correta
        if (user.password === password) {
          // Gerando o token
          jwt.sign(
            { id: user._id, email: user.email },
            JWTSecret,
            { expiresIn: "48h" },
            (error, token) => {
              if (error) {
                res.status(400).json({ error: "Erro ao gerar o token" }); // 400 (BAD REQUEST)
              } else {
                res.status(200).json({ token: token }); // 200 (OK)
              }
            }
          );
          res.status(200).json({ message: "Usuário autenticado" });
        } else {
          res.status(401).json({ error: "Senha incorreta" }); // 401 (UNAUTHORIZED)
        }
      } else {
        res.status(404).json({ error: "Usuário não encontrado" }); // 404 (NOT FOUND)
      }
    } else {
      res.sendStatus(400).json({ error: "Email nao encontrado" }); // 400 (BAD REQUEST)
    }
  } catch (error) {
    console.log(error);
  }
};
export default { createUser, loginUser };
