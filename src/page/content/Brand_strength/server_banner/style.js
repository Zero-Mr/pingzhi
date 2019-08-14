import styled from 'styled-components'
import serverbannerbg from '@src/statics/index/banner_1.png'
export const ServerbannerWrap=styled.div`
    height: 548px;
    width:100%;
    background-image:url(${serverbannerbg});
    position:relative;
    background-size:100%;
    @media (max-width:767px) {
                height: auto;
            }
    .collect-number{
        max-width:1280px;
        margin:0 auto;
        height: 100%;
        padding-top:30px;
        .collect-numberbox{
            height: 450px;
            width:300px;
            border:3px solid #ccc;
            margin-left:30px;
            background-color:#fff;
            padding:0 15px;
            @media (max-width:767px) {
                height: auto;
                width:80%;
                margin:0 auto;
            }
            h2{
                text-align:center;
                margin-top:20px;
                font-size:16px;
            }
            p{
                text-align:center;
                margin-bottom:35px;
                span{
                    color:#1890ff
                }
            }
            .userinput {
                margin-bottom:30px;
            }
            .userhome{
                margin-top:30px;
                margin-bottom:30px;
            }
            .free-btn{
                /* margin:0 auto; */
                text-align:center;
                width:100%;
            }
            .commitment{
                margin-top:20px;
            }
        }
    }
`