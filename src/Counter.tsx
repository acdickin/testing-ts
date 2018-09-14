import * as React from 'react';

interface IState{
  counter:number
}
class Counter extends React.Component{
  public state:IState={
    counter:0
  }
  public increment =(amount:number)=>{
    this.setState({counter:this.state.counter+amount});
  }
  public inc=()=>this.increment(1);
  public dec=()=>this.increment(-1);

  public render(){
    const {counter} =this.state;
    return(
      <div className="Counter">
        <p>Current value: {counter}</p>
        <button className="increment" onClick={this.inc}>Add</button>
        <button className="decrement" onClick={this.dec}>Minus</button>
      </div>
    )
  }
}

export default Counter;
