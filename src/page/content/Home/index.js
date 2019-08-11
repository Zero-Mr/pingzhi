import React,{PureComponent} from 'react';
import CarouselWrap from './Carousel'
import SpecialLabel from './Special_label'
import Ticker from './ticker'
import Jdcase from './jdcase'
import DecorationProcess from './Decoration_process';

class Home extends PureComponent {
    render(){
        return(
           <div>
               <CarouselWrap />
               <SpecialLabel />
               <Ticker />
               <Jdcase />
               <DecorationProcess />
           </div>
        )
    }
}

export default Home