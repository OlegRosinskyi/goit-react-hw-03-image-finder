import { ImageGalleryItemStiled } from "./ImageGalleryItem.stiled";
const ImageGalleryItems = ({ datas }) =>
{
    //console.log(buttonActiv);
    return (
        <> 
          {datas.map(data => <ImageGalleryItemStiled  key={data.id}> <img className="gallery__image" id={data.id} src={data.webformatURL} alt={data.tags} width="360" height="294"loading="lazy" /> </ImageGalleryItemStiled>)}    
        </>
     )
}
export default ImageGalleryItems;