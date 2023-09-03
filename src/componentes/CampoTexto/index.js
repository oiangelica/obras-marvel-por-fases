import './CampoTexto.css';

const CampoTexto = (props) => { 

    const placeholderModificado = `Digite ${props.placeholder}...`;
     
    const aoDigitar = (evento) => { 
        
        props.aoAlterar(evento.target.value)
    }

    return ( 
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} placeholder={placeholderModificado} required={props.obrigatorio} /> 
        </div>
    )
}

export default CampoTexto;

// Todo evento JavaScript tem um target e esse target pode ou não ter um value
