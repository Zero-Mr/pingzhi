import styled from 'styled-components'

export const TickerWrap = styled.div`
width:100%;
margin-top:60px;
background-color:#fff;
padding-top:50px;
overflow:hidden;
padding-bottom:30px;
.tickercontiarn{
    max-width:1280px;
    margin:0 auto;
    .tockeritem{
        width:50%;
        @media (max-width: 767px) {
          width:100%;
        }

        .item{
            margin-bottom:30px;
            .label-mar{
                margin-right:16px;
            }
            @media (max-width: 767px) {
                   text-align:center;
                } 
        }
    }
    h1{
        text-align:center;
        font-size:30px;
        font-weight:bold;
    }
    p{
        text-align:center;
        span{
            color:#1890ff;
        }
    }
    .error-text{
        color:red;
        margin-left: 10px;
    }
    .error-border{
        border:1px solid red;
    }
    label{
        display:inline-block;
        margin-left:20px;
        margin-right:5px;
    }
    .telinput{
        max-width:263px;
    }
    .floatRight{
        h3{
            font-size:25px;
            text-align:center;
        }
        .resultbox{
            width:300px;
            margin:0 auto;
            text-align:center;
            border:1px solid #333;
            padding-top:15px;
            margin-top:20px;
            p{
                font-size:22px;
            }
        }
    }
    .addticker{
        width:100%;
        text-align:center;
        @media (max-width:767px) {
            margin-top:20px;
        }
    }
}
`