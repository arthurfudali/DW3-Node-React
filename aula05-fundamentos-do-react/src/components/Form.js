import { useState } from "react"

const Form = () =>{
    // Criando o estado para armazenar os dados do formulario
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // funcao para evitar o comportamento padrao do formulario
    // o comportamento padrao é recarregar a pagina, o que interfere no funcionamento do react
    const handleSubmit = (e) => {
        e.preventDefault();
        // aqui seria criaod o codigo para enviar para o backend
        console.log(name, email)

    }
    return(
        <>
            <h1>Formulario de cadastro</h1>
            <br />
            <form onSubmit={handleSubmit}> {/* onSubmit é usado no lugar do action */}
                <div>
                    {/* o 'e' (ou event) é um objeto que contem as informacoes desse evento */}
                    {/* quando o valor do input mudar, pegue o novo valor e atualize o estado */}
                    <input type="text" placeholder="Digite seu nome" onChange={(e)=> setName(e.target.value)} /> 
                    
                </div>
                <div>
                    <input type="email" placeholder="Digite seu email" onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <br /><br />
                <button type="submit">Cadastrar</button>
                <br /><br />
                {/* exibindo os estados */}
                {name} - {email}
            </form>
        </>
    )
}
export default Form;