import Button from '@material-ui/core/Button';
import React from 'react';

const changeText=(event)=>{
  if (event.target.innerText.length <= 6)
    event.target.innerText = event.target.innerText + "被點了";
  else
  event.target.innerText = event.target.innerText.substring(0, event.target.innerText.length - 3)
 }
/**
 const MultiButton=(num)=>{
  var output=[];
  for(let i=1;i<num+1;++i)
    output.push( <button onClick = {changeText} >第{i}個按鍵</button>)
  return output;
 } 
 */
 console.log("xxxxxx");

 const MultiButton=(num)=>{
    var output=[];
    for(let i=1;i<num+1;++i) {
    output.push(<CounterButton variant="contained" color="primary"
    onClick={changeText}>第{i}個按鍵</CounterButton>)
   }
  return output;
 }


export default MultiButton; 


class CounterButton extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(event){
    this.setState({ counter: this.state.counter + 1});
    console.log(this.state);
  }
  render() {
    var text = this.state.counter;
    return(
      <Button onClick={this.handleClick} variant="contained" color="primary">
        你點了 {text}次
      </Button>
    );
  }
}