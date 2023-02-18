import { Component } from "react";
import { Modal } from "./Modal";
import Button from "./Button";
import Searchbar from "./Searchbar";

export class App extends Component {
  state = {
       showModal: false,  
  }
  toogleModal = () => { 
      this.setState((prevStat) => ({ showModal: !prevStat.showModal, }))
     }; 
  componentDidMount() {console.log('componentDidMount App') };
  componentDidUpdate() { console.log('componentDidUpdate App') };
  render() {
    //viev = 
    return (
      <div>
        <Button />
        <Searchbar><Button /></Searchbar>
        
        {this.state.showModal && <Modal onClose={this.toogleModal}> <h2>Всім привіт</h2> <p>dddddddddddddddddddddddddd</p> </Modal>}
        
       
      </div>
    );
  }
};
// <button type="button" onClick={this.toogleModal}> Oupen modal windous</button>