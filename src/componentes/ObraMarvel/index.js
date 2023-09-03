import './ObraMarvel.css'

const ObraMarvel = ({imagem, nomeDaObra, anoLancamento, corDeFundo}) => {
    return (<div className='obraMarvel'>
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nomeDaObra} />
        </div>
        <div className='rodape'>
            <h4>{nomeDaObra}</h4>
            <h5>{anoLancamento}</h5>
        </div>
    </div>)
}

export default ObraMarvel;