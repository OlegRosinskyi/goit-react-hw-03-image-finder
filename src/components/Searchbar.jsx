import { Component } from "react";
import {AiOutlineSearch} from "react-icons/ai";
import { SearchbarInput } from "./Searchbar.stiled";
import { SearchbarBox } from "./Searchbar.stiled";
import { SearchbarForm } from "./Searchbar.stiled";
import { toast } from "react-toastify";
export class Searchbar extends Component
{
    state = {
        imageName: '',
    }
//componentDidMount() {console.log('componentDidMount Searchbar') };
    componentDidUpdate() { console.log('componentDidUpdate Searchbar') };

    hendleSubmit = (event) => {
        event.preventDefault();
        if (this.state.imageName.trim() === '') {toast.error('Введите название картинки' ); return; }
        this.props.onSubmit(this.state.imageName.trim());
        this.resetSearchImage();
       // event.currentTarget.value = '';
    };
    searchImage = (event) => { this.setState({ imageName: event.currentTarget.value }); };
    resetSearchImage = () => { this.setState({ imageName: '', }); };
    
    render(){
    return (
        
            <SearchbarBox>
            <SearchbarForm onSubmit={this.hendleSubmit}>
                <button type="submit" className="button" >
                    <span className="button-label"><AiOutlineSearch/></span>
                </button>

                <SearchbarInput
                   
                className="input"
                type="text"
                autocomplete="off"
                autofocus
                placeholder="Search images and photos"
                onChange={this.searchImage}
                        
            />
            </SearchbarForm>
        </SearchbarBox>  
        
     )}
}
 //<input
 //                       type="text"
 //                       name="name"
 //                       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
 //                       title="Name may contain only letters, apostrophe, dash and spaces."
 //                       required
 //                       onChange={this.searchImage}
 //                       //value={value}
  //                  />
