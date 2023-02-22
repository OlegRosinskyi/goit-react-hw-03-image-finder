import { Component } from "react";
import { ButtonStiled } from "./Button.stiled";
export class Button extends Component{
     
    updateNamberPage = () => { 
        console.log('Button',this.props.namberPage);
      
        this.props.onClike(this.props.namberPage + 1);
        console.log('Button',this.props.namberPage+1);
    };
    componentDidMount() { console.log('componentDidMount Button') };
    componentWillUnmount(){ console.log('WillUnmount Button') };
      render (){
    return (
        <> 
            <ButtonStiled type="button" onClick={this.updateNamberPage}>Load more</ButtonStiled>             
        </> 
     )}
}
 