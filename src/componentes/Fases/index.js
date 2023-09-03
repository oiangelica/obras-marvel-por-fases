import ObraMarvel from '../ObraMarvel';
import './Fases.css' 

const Fases = (props) => { 
    const estilosH3 = {borderColor: props.corPrimaria}
    return (         
        props.obras.length> 0 && <section className='fases' style={{backgroundColor: props.corSecundaria}}> 
            <h3 style={estilosH3}>{props.fase}</h3> 
            <div className='obras'>
                {props.obras.map( obra => <ObraMarvel corDeFundo={props.corPrimaria} key={obra.nomeDaObra} nomeDaObra={obra.nomeDaObra} anoLancamento={obra.anoLancamento} imagem={obra.imagem}/>)}
                </div>           
        </section>
    )
}

export default Fases;
// Com props.obras.length> 0 && eu quis dizer que se a fase estiver não estiver vazia exiba a section, se a fase estiver vazia não execulta nada. Há uma outra forma de se fazer utilizando operador ternário, neste caso ficaria assim: 
// props.obras.length> 0 ? <section.... ao final da section... : '' (Isso quer dizer se for true que tem pelo menos uma obra execulta a função, se for false não exiba nada, no nosso caso passamos ums string vazia)