import { Component } from "react";
import { Modal } from "./Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Container } from "./App.stiled";

export class App extends Component {
  state = {
    imageName:'',
    showModal: false,  
    articls: [{}],
   // activId: '',
  }
//  componentDidMount() { console.log('componentDidMount App') };
//  componentWillUnmount(){ console.log('componentWillUnmount App') };
  componentDidUpdate(prevProps) {
   // console.log('componentDidUpdate App')
    if (prevProps.imageName !== this.props.imageName) {
           // console.log('componentDidUpdate App Новий запит'); 
            this.setState({ articls: [{}] }); 
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
   // console.log(this.state.articls);
    return (
      <Container>
        <Searchbar onSubmit={this.updateImage}></Searchbar> 
            <ImageGallery imageName={this.state.imageName} onClikeImage={this.updateId}></ImageGallery>
        {this.state.showModal && <Modal onClose={this.toogleModal}> <img src={this.state.articls.largeImageURL} alt={this.state.articls.tags} /> </Modal>}
       
        <ToastContainer/>
      </Container>
    );
  }
};
// <button type="button" onClick={this.toogleModal}> Oupen modal windous</button>