import React, { Component } from 'react';
import './App.css';
import CardForm from './CardForm';
import CardList from './CardList';

class App extends Component {

  constructor(props){
    super(props);
    this.state = 
    {list:[],
      id:1};
  }

  addToList = (contact) => {
    contact.id = this.state.id;
    let tempId = this.state.id + 1;
    let tempList = [];
    for(let i = 0; i < this.state.list.length; i++) {
      tempList.push(this.state.list[i]);
    }
    tempList.push(contact);
    this.setState({
      list:tempList,
      id:tempId
    })
    console.log(tempList);
  }

  render() {
    return (
      <div className="App">
        <CardForm addToList={this.addToList}/>
        <CardList list={this.state.list}/>
      </div>
    );
  }
}

export default App;
