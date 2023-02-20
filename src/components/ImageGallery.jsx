import { Component } from "react";
import ImageGalleryItems from "./ImageGalleryItem";
import axiosImages from "./axiosImages";
import { ImageGalleryStiled } from "./ImageGallery.stiled";


export class ImageGallery extends Component{
    state = {
        articls:[ ]
    }
    
    componentDidUpdate(prevProps,) {
        console.log('ImageGallery')
        if (prevProps.imageName !== this.props.imageName) {
            console.log('Новий запит'); //console.log(prevProps.imageName); console.log(this.props.imageName);
            this.searchImage(this.props.imageName,1,12);
        }
    };
    searchImage = async (imageName, namberPage, namberPer_page) => {
            let res = await axiosImages(imageName, namberPage, namberPer_page);
            console.log(axiosImages(res));
        const articls = res.data.hits;
        console.log(articls);
        // Отримагі данні з сервера збірігаємо в state
        this.setState({ articls});
       // const sortArticle = articls.map(articl => { articl: { id, largeImageURL, webformatURL } }); //, articl.largeImageURL, articl.webformatURL,
       // console.log(sortArticle);
    }
    //{ id: `id-${data.name}`, name: `${data.name}`, number: `${data.number}` };
  // `{id:${articl.id}, webformatURL:"${articl.webformatURL}", largeImageURL: "${articl.largeImageURL}", }`
 render()  {
    return (
        <> 
             <ImageGalleryStiled>
                 <ImageGalleryItems datas={this.state.articls}></ImageGalleryItems>
            </ImageGalleryStiled>
        </>
     )}
}
