import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Fases from './componentes/Fases';
import Footer from './componentes/Footer';

function App() {

  const fases = [
    {
      nomeDaFase: 'Fase 1',
      corPrimaria: '#FB5D08',
      corSecundaria: '#fb9762'
    },
    {
      nomeDaFase: 'Fase 2',
      corPrimaria: '#E34007',
      corSecundaria: '#e47f5a'
    },
    {
      nomeDaFase: 'Fase 3',
      corPrimaria: '#F93B15',
      corSecundaria: '#fc7256'
    },
    {
      nomeDaFase: 'Fase 4',
      corPrimaria: '#E62212',
      corSecundaria: '#e3695e'
    },
    {
      nomeDaFase: 'Séries',
      corPrimaria: '#FF1422',
      corSecundaria: '#fd646e'
    }
  ]

  const [obras, setObras] = useState([]);

  const aNovaObraAdicionada = (obra) => {
    setObras([...obras, obra])
    //Com "...obras" estou espalhando as obras existentes no começo do array e depois adicionando a obra nova ao final do array
  }
  //colocando as obras que forem adicionadas dentro de um array

  return (
    <div className="App">
      <Banner />
      <Formulario fases={fases.map(fase => fase.nomeDaFase)} aCadaObraCadastrada={obra => aNovaObraAdicionada(obra)} />

      {fases.map(fase => <Fases
       key={fase.nomeDaFase} 
       fase={fase.nomeDaFase} 
       corPrimaria={fase.corPrimaria} 
       corSecundaria={fase.corSecundaria}
       O
       obras={obras.filter(obra => obra.fase === fase.nomeDaFase)}
       />)}
       <Footer /> 
      {/*Para cada fase dentro do nosso array de fases cria um componente chamado fase com o nome da fase*/}
             
    </div>
  );
}

export default App