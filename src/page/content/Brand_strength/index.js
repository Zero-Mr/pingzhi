import React,{PureComponent} from 'react';
import ServerBanner from './server_banner'
import Statisticbox from "./statistic"
import Mterial from "./material"
import Tenseconds from './tenseconds'
import Customization from './customization'
import Cando from "./candesigners"
import Characteristic from './Characteristic'
import Appointment from './appointment'
import Process from './process'
import Considerate from './Considerate'

class Brand_strength extends PureComponent {
    render(){
        return(
           <div>
               <ServerBanner />
               <Statisticbox />
               <Mterial />
               <Tenseconds />
               <Customization />
               <Cando />
               <Characteristic />
               <Appointment />
               <Process />
               <Tenseconds />
               <Considerate />
               <Tenseconds />
           </div>
        )
    }
    componentDidMount(){
        document.title = '品牌实力'
    }
}

export default Brand_strength