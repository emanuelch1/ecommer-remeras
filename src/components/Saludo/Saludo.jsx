import "../Saludo/Saludo.css"


function Saludo (props)  {
    return(
        <div className="saludo">
            <h1>Bienvenido {props.username} a compras Online de Remeras Lion King </h1>
        </div>
    )
}
export default Saludo;