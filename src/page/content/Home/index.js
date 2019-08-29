import React,{PureComponent} from 'react';
import CarouselWrap from './Carousel'
import SpecialLabel from './Special_label'
import Ticker from './ticker'
import Jdcase from './jdcase'
import DecorationProcess from './Decoration_process';
import Knowledge from './Decorate_a_knowledge';

class Home extends PureComponent {
    render(){
        return(
           <div>
               <CarouselWrap />
               <SpecialLabel />
               <Ticker />
               <Jdcase />
               <DecorationProcess />
               <Knowledge />
           </div>
        )
    }
    componentDidMount(){
        document.title = '品智装饰'
    }
}

export default Home