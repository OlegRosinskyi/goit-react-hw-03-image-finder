import { Component } from "react";
import { Modal } from "./Modal";
import Button from "./Button";
import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    imageName:'',
    showModal: false,  
   // id: '',
   // webformatURL: '',
   // largeImageURL:'',
  }
  toogleModal = () => { 
      this.setState((prevStat) => ({ showModal: !prevStat.showModal, }))
  }; 
  
  updateImage = imageName => {
    
    // console.log(imageName);
    //let nowArr = this.state.contacts;
    //let arrLength = nowArr.length;
    //let Contact = { searchWord: `${data.searchWord}`, };
    this.setState({ imageName});
    // console.log(Contact);
   // let statusIncludeName = nowArr.find(contact => contact.name === Contact.name);
   // console.log(statusIncludeName); console.log(Contact);
   // arrLength > 1 ? (!statusIncludeName ? nowArr.splice(arrLength, 0, Contact,) : alert(`${data.name}  is already in contacts`)) :
   //   (nowArr[0].name === '' ? nowArr.splice(arrLength - 1, 1, Contact,) : (!statusIncludeName ? nowArr.splice(arrLength, 0, Contact,) : alert(`${data.name}  is already in contacts`)))
   // this.setState({ contacts: nowArr });
  }
  componentDidMount() {console.log('componentDidMount App') };
  componentDidUpdate() { console.log('componentDidUpdate App') };
  render() {
    //viev = 
    return (
      <div>
       
        <Searchbar onSubmit={this.updateImage}></Searchbar>
             
        <ImageGallery imageName={this.state.imageName} ></ImageGallery>
         {this.state.showModal && <Modal onClose={this.toogleModal}> <h2>Всім привіт</h2> <p>dddddddddddddddddddddddddd</p> </Modal>}
        <Button />
        <ToastContainer/>
      </div>
    );
  }
};
// <button type="button" onClick={this.toogleModal}> Oupen modal windous</button>