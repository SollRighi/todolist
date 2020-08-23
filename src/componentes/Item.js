import React from "react"
import "./Item.css"

class Item extends React.Component {
  render() {
    return(
      <div className="item">
        <h3>
          {this.props.titulo}
        </h3>

        <div className="check">
          <input
            type="checkbox" 
            checked={this.props.concluido}
          />


          <h5 className="descricao">
            {this.props.descricao}
          </h5>
          
        </div>

      </div>
    )
  }
}
export default Item 