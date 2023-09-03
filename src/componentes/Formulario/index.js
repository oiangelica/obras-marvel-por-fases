import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import Fases from '../Fases';

const Formulario = (props) => {
    //Aqui tinha um array de string com as fases, mas foi deletado pois com o .map() conseguimos converter do objeto inteiro presente no App.js retornando apenas o valor depois de nome: e chamando em array de string na linha 55 desse arquivo e na linha 50 do App.js com "fases={fases.map(fase => fase.nome)}" sendo fases o nome do array e fase representando o nome que dei para cada array dentro do objeto
    const [nomeDaObra, setNomeDaObra] = useState('');
    const [anoLancamento, setAnoLancamento] = useState(''); 
    const [imagem, setImagem] = useState('');
    const [fase, setFase] = useState('');


    const aoSalvar = (evento) => {
        evento.preventDefault();
        //console.log('Form foi submetido =>', `Filme: ${filme};`, `Lançamento: ${anoLancamento};`, `Imagem de capa: ${imagem};`,`Fase: ${fase}.`); //Conter os campos dos formulários e não armazenar os valores a cada add
        props.aCadaObraCadastrada({
            nomeDaObra,
            anoLancamento,
            imagem,
            fase
        })
        setNomeDaObra('')
        setAnoLancamento('')
        setImagem('')
        setFase('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Prencha os campos para criar o card da obra </h2>
                <CampoTexto 
                obrigatorio={true}
                label="Nome da obra"
                placeholder="o nome da obra" 
                valor = {nomeDaObra}
                aoAlterar={valor => setNomeDaObra(valor)}
                />
                <CampoTexto 
                obrigatorio={true} 
                label="Ano de lançamento" 
                placeholder="o ano de lançamento" 
                valor={anoLancamento}
                aoAlterar={valor => setAnoLancamento(valor)}
                />
                <CampoTexto 
                obrigatorio={true} 
                label="Imagem de capa" 
                placeholder="o endereço da imagem" 
                valor={imagem}
                aoAlterar={valor => setImagem(valor)}
                /> 
                <ListaSuspensa 
                obrigatorio={true} 
                label="Fases Marvel" 
                itens={props.fases} 
                valor={fase}
                aoAlterar={valor => setFase(valor)}
                />
                {/* <Botao texto="Criar Card"/> podemos fazer assim usando props*/}
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;  
//Appertar ctrl + espaço em CampoTexto para o vscode fazer a importação.