import * as React from 'react';
import Counter from './Counter'

interface IState{
  numCounters:number
}
class CounterList extends React.Component{
  public state:IState={
    numCounters:2
  }
  public createRange = (num:number):number[] =>{
    return Array.from(Array(num).keys())
  }
  public addCounter =()=>{
    this.setState({numCounters:this.state.numCounters+1});
  }
  public renderCounter(index:number){
    return(
      <div key={index}>
        <Counter/>
      </div>
    )
  }

  public render(){
    const countersArray =this.createRange(this.state.numCounters);
    return(
      <div className="Counters">
        <button className="numCounters" onClick={this.addCounter}>Add Counter</button>
        {countersArray.map(num=>this.renderCounter(num))}
      </div>
    )
  }
}

export default CounterList;
