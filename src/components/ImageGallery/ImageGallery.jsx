import { Component } from "react";
import ImageGalleryItems from "../ImageGalleryItem/ImageGalleryItem";
import axiosImages from "../axiosImages";
import { ImageGalleryStiled } from "./ImageGallery.stiled";
import { Button } from "../Button";
import Loader from "../Loader/Loader";
import { BoxButton } from "./ImageGallery.stiled";
const namberPerPage = 12;

export class ImageGallery extends Component{
    state = {
        articls: [],
        namberPage: 1,
        pageTotal: 0,
        activID: '',
        showModal: false,  
        erros: null,
        status: 'idle', //початковий стан простою
    }
    componentDidMount() {
        this.setState({ status: 'idle', });
    };
    componentWillUnmount() {
        this.setState({ status: 'idle', });
    };
    componentDidUpdate(prevProps,prevState) { 
       // console.log('componentDidUpdate ImageGallery')
        
        if (prevProps.imageName !== this.props.imageName) {
           // console.log('Новий запит'); 
            this.setState({ pageTotal: 0,articls: [], activID:'',showModal: false,status: 'idle', erros: null,}); //стан loading //namberPage: 1,
            this.searchImage(this.props.imageName, this.state.namberPage, namberPerPage);
        }
        if (prevState.namberPage !== this.state.namberPage) {
           // console.log('Зміна сторінки'); 
            this.setState({ activID:'',status: 'idle'}); 
            this.searchImage(this.props.imageName, this.state.namberPage, namberPerPage);
        }
        if (prevState.activID !== this.state.activID) {
           // console.log('Зміна активного id'); 
            this.props.onClikeImage(this.state.showModal, this.state.articls.find(articl => articl.id === Number(this.state.activID))); 
            this.setState({ showModal: false,});
        }
// this.searchImage(this.props.imageName, this.state.namberPage, namberPerPage);
        };
    searchImage = async (imageName, namberPage, namberPer_page) => {
       
       try { 
             this.setState({status:'pending',}); 
            let res = await axiosImages(imageName, namberPage, namberPer_page);
            // console.log(res.statusText);
            //console.log(axiosImages(res));
            const articls = res.data.hits;
           // console.log(articls);
        // Отримані данні з сервера зберігаємо в state
           
           if (namberPage !== 1) this.setState((prevState) => ({ articls: prevState.articls.concat(articls) }));
           else this.setState({articls, status:'resolved' });
           this.setState({ status: 'resolved' });//стан отримані дані з бекендку
            if (namberPage === 1) {
            const dataTotal = res.data.total;
            const datatotalHits = res.data.totalHits;
            if (dataTotal > datatotalHits) {
                this.setState({ pageTotal: Math.ceil(datatotalHits / namberPerPage) });
            } else {
                this.setState({ pageTotal: Math.ceil(dataTotal / namberPerPage) });
            }
        }   
      } catch (error) {
           console.log(error.message);  this.setState({status:'rejected', });//дані з бекендку не отримано, помилка
       }
    }; 
    
    updateNamberPage = namberPage => {
    //Збереження в state пошукового слова запиту на пошук картинки.
       this.setState({namberPage});
    }
    //Отримання данних про вибрану картинку
    lookImage = event => {
        if (event.target.id !== '') {
           // console.log('картка вибрана');
            this.setState({ activID: event.target.id,showModal: true,});
        };
    };
    //Скидання назви картинки пошуку
    resetSearchImage = () => { this.setState({ imageName: '', }); };

    render() {
        if (this.state.status === 'idle'){return <BoxButton><h2>Для пошуку картинки введить в поле пошуку назву картинки</h2></BoxButton> };   
       
        
        if (this.state.status === 'resolved'){
            return (
            Number(this.state.articls.length) === 0?<BoxButton> <h2>Пошук картинки по слову  {this.props.imageName} не два результату</h2></BoxButton>:
            <div> 
            <ImageGalleryStiled onClick={this.lookImage}>
                <ImageGalleryItems datas={this.state.articls}></ImageGalleryItems>
            </ImageGalleryStiled>
            {(this.state.namberPage !== this.state.pageTotal && this.state.articls.length !== 0)&&<BoxButton><Button namberPage={this.state.namberPage}  imageName={this.props.imageName}  onClike={this.updateNamberPage}/></BoxButton> }
            </div>
        )
        };

        if (this.state.status === 'rejected') { return <div> <h2>Помилка {this.props.error} при пошуку картинки по назві - {this.props.imageName} </h2></div> };
        if (this.state.status === 'pending') { return <BoxButton><Loader></Loader></BoxButton> };
       
    };
     
};
 