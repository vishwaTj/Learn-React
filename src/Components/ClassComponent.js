import React, { Component } from 'react';

export class ClassComponent extends Component {
 // in class component type you have to define constructor
   // super and then set the state
  constructor(){
      super()
      this.state = {
        number : 0
      }
    }

    Increase(num){
      // this.setState reloads page every time the state is changed
      this.setState({
        number : this.state.number + num
      })
    }

    Decrease(num){
      this.setState((prevState)=>{
        return{// prevState will be an object fo state holding previous value
          number : prevState.number - num
        }
      })
    }

  render() {
    return (
      <div>
        <h5>ClassComponent</h5><br />

       <button onClick={()=>this.Increase(2)}>Inc</button>  
       <button disabled={this.state.number<=0} onClick={()=>this.Decrease(1)}>Dec</button>
        <h5>{this.state.number}</h5>
      </div>
    )
  }
}

export default ClassComponent;