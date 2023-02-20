//З ПОРТАЛОМ
import { PureComponent } from "react";
// створити портал 
import { createPortal } from "react-dom";
//import { Component } from "react";
import { Backdrop } from "./Modal.stiled";
import { ModalWindous } from "./Modal.stiled";
const modulRoot = document.querySelector('#modal-root');
    export class Modal extends PureComponent {
 
        componentDidMount() {console.log('componentDidMount Modal'); window.addEventListener('keydown', this.handleKeydown)};
        componentWillUnmount() {console.log('componentWillUnmount Modal'); window.removeEventListener('keydown', this.handleKeydown)};
 handleKeydown  = event => { if (event.code === 'Escape') { console.log('{Закриття модалки}'); this.props.onClose(); }}     
 handleBackdropClick = event =>  { if (event.target === event.currentTarget) { console.log('{Click in Backdrop}'); this.props.onClose(); }} 
   // console.log(contacts)
   // let filtrContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  //  if (filtrContacts.length === 0) filtrContacts = []; 
    
    render() {
        return createPortal(<>
                <Backdrop onClick={this.handleBackdropClick}>
                    <ModalWindous>{this.props.children}</ModalWindous>
                </Backdrop>
            </>,modulRoot)
           
       
    }
};
 // <div class="overlay">
 // <div class="modal">
 //   <img src="" alt="" />
 // </div>
//</div>