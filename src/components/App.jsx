import { Component } from "react";
import { Modal } from "./Modal";

import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Container } from "./App.stiled";

export class App extends Component {
  state = {
    imageName:'',
    showModal: false,  
    //activId: '',
    articls:{},
   // webformatURL: '',
   // largeImageURL:'',
  }
  
  componentDidMount() {console.log('componentDidMount App') };
  componentDidUpdate(prevProps) {
    console.log('componentDidUpdate App')
    if (prevProps.imageName !== this.props.imageName) {
            console.log('componentDidUpdate App Новий запит'); 
            this.setState({ activId: '',articls: [], }); 
    }
  };
  
  toogleModal = () => { 
   this.setState((prevStat) => ({ showModal: !prevStat.showModal, }))
    //this.setState({ articls: {}, })
  }; 
  updateId = (showModal,articls) => {
    //Збереження в state пошукового слова запиту на пошук картинки.
       this.setState({ showModal,articls,});
      }
  updateImage = imageName => {
    //Збереження в state пошукового слова запиту на пошук картинки.
       this.setState({ imageName});
  }
  
  render() {
    console.log(this.state.articls);
    return (
      <Container>
        <Searchbar onSubmit={this.updateImage}></Searchbar>      
        <ImageGallery imageName={this.state.imageName} onClikeImage={this.updateId}></ImageGallery>
        {this.state.showModal && <Modal onClose={this.toogleModal}> <img src={this.state.articls.largeImageURL} alt="" /> </Modal>}
       
        <ToastContainer/>
      </Container>
    );
  }
};
// <button type="button" onClick={this.toogleModal}> Oupen modal windous</button>