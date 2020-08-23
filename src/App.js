import React from 'react';
import './App.css';
import Item from './componentes/Item';

class App extends React.Component {
  
  state = {
    titulo: "",
    descricao: "",
    itens: [],
  }
  
  adicionaItem = () => {
    let novosItens = this.state.itens
    novosItens.push({titulo: this.state.titulo, descricao: this.state.descricao})
    this.setState({itens: novosItens, titulo: "", descricao: ""})
  }

  render() {
    return (
      <div className="App">
        <div>
          <input
            placeholder="Título" //Texto informativo
            value={this.state.titulo} //valor do campo
            onChange={(e) => this.setState({ titulo: e.target.value})} //definindo valor do campo
          />

          <input 
            placeholder="Descrição"
            value={this.state.descricao}
            onChange={(e) => this.setState({descricao: e.target.value})}
          />

          <input
            type="button"
            value="Adicionar"
            onClick={this.adicionaItem} //funçao que sera chamada ao clicar o botao
          />  

        </div>

        {/* funçao map circula todos itens do array, e retorna um componente Item para cada volta */}
        {this.state.itens.map(i => 
          <Item 
            titulo= {i.titulo}
            descricao={i.descricao}
            concluido={false}
          />
        )}  

        
      </div>
    );
  }
}

export default App;
