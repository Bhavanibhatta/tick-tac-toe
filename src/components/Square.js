import React, {Component} from 'react';





class Square extends Component{


  render(){
    return (

      <div className="Square">
      <button onClick= {()=> this.props.onClick()}>{this.props.value}</button>
      </div>
    );
  }
}


export default Square;
