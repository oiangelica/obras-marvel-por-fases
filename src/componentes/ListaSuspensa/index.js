import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterar(evento.target.value)} required={props.required} value={props.valor}>
                <option value={''}>Selecione a fase</option>
                {props.itens.map(item => {
                    return <option key={item}> {item} </option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa

//{props.itens.map(item => <option>{item}</option>)} ->  Para cada item me retorna uma option
// preciso colocar uma chave unica para cada item como se fosse um id, pois o react precisa disso para controlar a renderização e saber quando precisa atualizar ou quando estamos falando com esse item nesse caso colocarei o valor do próprio item  <option key={item}> a ausencia dessa key é um erro, mas não é um blockante, ou seja ele vai passar
 //Para iterar em cima de cada elemento da lista renderizando em HTML é preciso fazer

 //Importancia da "key" é para orientar o react sobre quando ele tem que renderizar 