import React, { PureComponent } from 'react';
import { Carousel } from 'antd';
import axios from 'axios'
import {Link} from 'react-router-dom'
import apidata from '../../../../apiData.json'

class CarouselWrap extends PureComponent {
    constructor(props){
        super(props)
        this.state ={
            Carousellist:[]
        }
    }
    render() {
        return (
            <Carousel autoplay>
                {
                    this.state.Carousellist.map((item) =>{
                        return(
                            <div key={item.id}>
                                <Link to={item.url}>
                                    <img className="imgres" src={item.image} alt={item.alt}/>
                                </Link>
                            </div>
                        )
                    })
                }
            </Carousel>
        )
    }

    componentDidMount(){
        this.getCarouselList()
    }

    getCarouselList(){
        axios.get(`${apidata.data[2].carousel}`).then((res)=>{
            let data =res.data;
            this.setState({
                Carousellist:data
            })
        }).catch((error)=>{
            console.log(error)
        })
    }
}

export default CarouselWrap