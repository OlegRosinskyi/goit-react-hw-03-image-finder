import { Component } from "react";
import { ButtonStiled } from "./Button.stiled";
export class Button extends Component{
    state = {
        namberPage: 1,
        }     
    updateNamberPage = () => {  
            this.setState((prevStat) => ({ namberPage: prevStat.namberPage + 1, }));
           // this.props.onClike(this.state.namberPage);
    };
    componentDidUpdate(prevProps,prevState) {
        if (prevProps.imageName !== this.props.imageName) {
            console.log('Новий запит componentDidUpdate Button'); this.setState({ namberPage: 1 });
        }
        console.log('componentDidUpdate Button')
        if (prevState.namberPage !== this.state.namberPage) { this.props.onClike(this.state.namberPage);}
    };
    render (){
    return (
        <> 
            <ButtonStiled type="button" onClick={this.updateNamberPage}>Load more</ButtonStiled>             
        </>
     )}
}

 