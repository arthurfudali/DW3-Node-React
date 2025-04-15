import { useState } from "react";
const TrafficLight = () =>{
    // Criando o estado par manipular cores
    const [color, setColor] = useState("gray"); /* color é a variavel que consulta o valor, setColor é a funcao que vai alterala */
    return(
        <> {/* fragment */}
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h3>Semáforo</h3>
                <br />
                <div style={{ justifySelf: "space-between" }}>
                    <div style={{
                        backgroundColor: color == "red" ? color : "gray" ,
                        borderRadius: "50%",
                        width: "100px",
                        height: "100px"
                    }} ></div>
                    <div style={{
                        backgroundColor: color == "yellow" ? color : "gray",
                        borderRadius: "50%",
                        width: "100px",
                        height: "100px"
                    }} ></div>
                    <div style={{
                        backgroundColor: color == "green" ? color : "gray" /* se a cor for amarelo define o estado cor, senao deixa cinza */,
                        borderRadius: "50%",
                        width: "100px",
                        height: "100px"
                    }} ></div>
                    <br />
                    {/* botoes */}
                    <div>
                        <button onClick={()=> setColor("red")} >Pare!</button>
                        <button onClick={()=> setColor("yellow")} >Atenção!</button>
                        <button onClick={()=> setColor("green")}>Siga!</button>
                    </div>
                </div>
               
            </div>
        </>
    )
}
export default TrafficLight;