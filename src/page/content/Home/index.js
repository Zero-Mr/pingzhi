import React,{PureComponent} from 'react';
import CarouselWrap from './Carousel'
import SpecialLabel from './Special_label'
import Ticker from './ticker'
import Jdcase from './jdcase'

class Home extends PureComponent {
    render(){
        return(
           <div>
               <CarouselWrap />
               <SpecialLabel />
               <Ticker />
               <Jdcase />
           </div>
        )
    }
}

export default Home