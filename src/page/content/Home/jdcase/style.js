import styled from 'styled-components'

export const JdcaseWrap = styled.div`
max-width:1280px;
margin:0 auto;
padding-top:50px;
.jdtitle{
    text-align:center;
    font-size:30px;
}
.jdinnerWrap{
    width:100%;
    overflow:hidden;
    .jdcaseWrap{
        position: relative;
        overflow:hidden;
        .jdcaseitem{
            overflow:hidden;
            margin:0 10px 10px 10px;
            @media (max-width:767px) {
                margin: 0 5px 10px 5px
            }
            @media (max-width:414px) {
                height: 180px !important;
            }
            a{
                color:#fff;
            }
            position:relative;
            p{
                position:absolute;
                bottom:0;
                left:0;
                background-color:rgba(0,0,0,.5);
                height: 30px;
                line-height:30px;
                width:100%;
                margin-bottom:0;
                padding:0 10px;
            }
            img{
                -webkit-transition: -webkit-transform 0.3s;
                -moz-transition: -moz-transform 0.3s;
                -o-transition: -o-transform 0.3s;
                transition: transform 0.3s;
                display:block;
                width:100%;
                height: 100%;
            }
        }
        .jditem-0,.jditem-2,.jditem-3,.jditem-4{
            height: 250px;
        }
        .jditem-1{
            height: 510px;
            @media (max-width:767px){
                height: 250px;
                float:right;
            }
        }
        .jditem-3{
            position:absolute;
            left: 0;
            bottom:0;
            @media (max-width:767px) {
                position:inherit;
                float:right;
            }
        }
        .jditem-4{
            @media (max-width:767px) {
                
            }
        }
        .jdcaseitem:hover img{
            -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
        transform: scale(1.1);
        -webkit-transition: -webkit-transform 0.3s;
        -moz-transition: -moz-transform 0.3s;
        -o-transition: -o-transform 0.3s;
        transition: transform 0.3s;
        }
    }
}
`