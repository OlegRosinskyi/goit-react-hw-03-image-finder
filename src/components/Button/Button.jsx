import { Component } from "react";
import PropTypes from 'prop-types';
import { ButtonStiled } from "./Button.stiled";
export class Button extends Component{
     
    updateNamberPage = () => { 
       
        this.props.onClike(this.props.namberPage + 1);
        
    };
    
      render (){
    return (
        <> 
            <ButtonStiled type="button" onClick={this.updateNamberPage}>Load more</ButtonStiled>             
        </> 
     )}
}
 Button.propTypes = {
    onClike:PropTypes.func,
   
}
