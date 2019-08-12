import * as actionTypes from './actionTypes'
import axios from 'axios'
import apidata from '@src/apiData.json'

const knowledgeAction = (data) =>({
    type:actionTypes.KNOW_START_GETDATA,
    data
})

export const knowledgeCreators = () => (dispatch) => {
    axios.get(apidata.data[4].knowledge,{
        params:{
            target:"index",
            limit:6
        }
    }).then((res)=>{
        console.log(res.data)
        let data = res.data;
        dispatch(knowledgeAction(data))
    })
}
