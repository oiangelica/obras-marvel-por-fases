import "./Botao.css"

const Botao = (props) => {
    return ( <button className="botao">
        {/* {props.texto} fariamos assim com a props texto*/}
        {props.children}
    </button>
    
    )
}

export default Botao

//Caso queira colocar imagem ou icon dentro do botão posso fazer isso usando a propriedade children, e colocar dentro do corpo do botão a imagem que quero assim como faço no HTML, ficando assim 
// <button> 
    //vai aqui a tag img
//  <button/>
// const Botao = (props) => {
//     return ( <button className="botao">
//         {props.children}
//     </button>
//     )
// }