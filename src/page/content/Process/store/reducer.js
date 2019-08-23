import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'


const defaultState = fromJS({
    processdata:{
        before:[
            {
                title:"装修前-准备阶段",
                list:[
                    {text:"收房",status:false,id:1},
                    {text:"设计",status:false,id:2},
                    {text:"预算",status:false,id:3},
                    {text:"合同",status:false,id:4}
                ]
            }
        ],
        in:[
            {
                title:"装修中-施工阶段",
                list:[
                    {text:"拆改",status:false,id:5},
                    {text:"水电",status:false,id:6},
                    {text:"防水",status:false,id:7},
                    {text:"泥瓦",status:false,id:8},
                    {text:"木工",status:false,id:9},
                    {text:"油漆",status:false,id:10},
                    {text:"竣工",status:false,id:11},
                    {text:"更多",status:false,id:12},
                ]
            }
        ],
        after:[
            {
                title:"装修后-入住阶段",
                list:[
                    {text:"软装",status:false,id:12},
                    {text:"硬装",status:false,id:13},
                ]
            }
        ],
        question:[
            {
                title:'装修问答',
                list:[
                    {text:"品智常见问题",status:false,id:14},
                    {text:"装修常见问题",status:false,id:15}
                ]
            }
        ],
        fengshui:[
            {
                title:"装修风水",status:false
            }
        ]
    },
    urlID:"",
    nowAddress:"",
    classification:''
})

export default (state = defaultState , action) => {

    switch(action.type){ 
        case actionTypes.PROESS_SETSTATUS:
            return state.merge({
                urlID:action.id,
                nowAddress:action.nowAddress,
                classification:action.option,
                
            }).setIn(['processdata','before',0,'list'],fromJS(action.JSbefore))
              .setIn(['processdata','in',0,'list'],fromJS(action.JSin))
              .setIn(['processdata','question',0,'list'],fromJS(action.JSquestion))
              .setIn(['processdata','after',0,'list'],fromJS(action.JSafter))
        default:
            return state
    }   


}