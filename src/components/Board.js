import React, {Component } from 'react';
import Square from './Square';
import './Board.css';

class Board extends Component {



  rendersquare(i){
    return <Square
    value={this.props.squares[i]}
    onClick={ () => this.props.onClick(i)}   />

  }

  render(){



    return (
<div>

      {/*It should display 9 squares*/}
<div className ="board-rows">
{this.rendersquare(0)}{
}
{this.rendersquare(1)}
{this.rendersquare(2)}
</div>
<div className ="board-rows">
{this.rendersquare(3)}
{this.rendersquare(4)}
{this.rendersquare(5)}
</div>
<div className ="board-rows">
{this.rendersquare(6)}
{this.rendersquare(7)}
{this.rendersquare(8)}
</div>
</div>


    );
  }
}


export default Board;
