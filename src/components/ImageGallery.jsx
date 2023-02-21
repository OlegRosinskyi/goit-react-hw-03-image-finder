import { Component } from "react";
import ImageGalleryItems from "./ImageGalleryItem";
import axiosImages from "./axiosImages";
import { ImageGalleryStiled } from "./ImageGallery.stiled";
import { Button } from "./Button";
const namberPerPage = 12;

export class ImageGallery extends Component{
    state = {
        articls: [],
        namberPage: 1,
        pageTotal: 0,
        activID: '',
        showModal: false,  
    }
    
    componentDidUpdate(prevProps,prevState) {
        console.log('componentDidUpdate ImageGallery')
        if (prevProps.imageName !== this.props.imageName) {
            console.log('Новий запит'); 
            this.setState({ pageTotal: 0, namberPage: 1,articls: [], activID:'',showModal: false }); 
            this.searchImage(this.props.imageName, this.state.namberPage, namberPerPage);
        }
        if (prevState.namberPage !== this.state.namberPage) {
            console.log('Зміна сторінки'); 
            this.searchImage(this.props.imageName, this.state.namberPage, namberPerPage);
        }
        if (prevState.activID !== this.state.activID) {
            console.log('Зміна активного id'); 
            //console.log(this.state.articls.Number(this.state.activID)); 
           // console.log(Number(this.state.activID));
           this.props.onClikeImage(this.state.showModal,this.state.articls.find(articl=> articl.id === Number(this.state.activID))); 
        }
// this.searchImage(this.props.imageName, this.state.namberPage, namberPerPage);
        };
    searchImage = async (imageName, namberPage, namberPer_page) => {
        let res = await axiosImages(imageName, namberPage, namberPer_page);
        console.log(axiosImages(res));
        const articls = res.data.hits;
        console.log(articls);
        // Отримані данні з сервера збірігаємо в state
        this.setState({ articls });
        if (namberPage === 1) {
          
            const dataTotal = res.data.total;
            console.log(dataTotal);
            const datatotalHits = res.data.totalHits;
            console.log(datatotalHits);
            if (dataTotal > datatotalHits) {
                this.setState({ pageTotal: Math.ceil(datatotalHits / namberPerPage) });
            } else {
                this.setState({ pageTotal: Math.ceil(dataTotal / namberPerPage) });
            }
        }
        }; 
    updateNamberPage = namberPage => {
    //Збереження в state пошукового слова запиту на пошук картинки.
       this.setState({namberPage});
    }
    lookImage = event => {
        if (event.target.id !== '') {
            this.setState({ activID: event.target.id,showModal: true,});
        
        
        };
    };
    resetSearchImage = () => { this.setState({ imageName: '', }); };
    render() {
       // console.log(this.state.articls.length === 0);
    return (
        <div> 
            <ImageGalleryStiled onClick={this.lookImage}>
                <ImageGalleryItems datas={this.state.articls}></ImageGalleryItems>
            </ImageGalleryStiled>
            {(this.state.namberPage !== this.state.pageTotal && this.state.articls.length !== 0)&& <Button   imageName={this.props.imageName}  onClike={this.updateNamberPage}/>}
        </div>
     )}
}
