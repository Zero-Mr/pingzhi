import styled from 'styled-components'
import bannerbg_1 from '@src/statics/index/freeserver-0.png'
import bannerbg_2 from '@src/statics/index/freesercer-1.png'
export const FreeServerWrap= styled.div`
    
    .topbox{
        width:100%;
        height: 460px;
        background:url(${bannerbg_1}) 0 0 no-repeat;
        .topbox-cont{
            max-width:1280px;
            margin:0 auto;
            overflow:hidden;
            position: relative;
            .leftbox{
                width: 747px;
                height: 420px;
                background:url(${bannerbg_2}) 0 0 no-repeat;
                @media (max-width:1055px) {
                    width:50%;
                }
                @media (max-width:618px) {
                    width:0;
                }
                
            }
            .rightbox{
                width: 308px;
                background-color:#FFF;
                text-align:center;
                padding:20px;
                @media (max-width:618px) {
                    float:none;
                    margin:0 auto;
                }
                h1{
                    font-size:16px;
                    margin-bottom:30px;
                }
                .freeusername,.freetel,.freeaddress,.freebtn{
                    margin-bottom:20px;
                }
                .freebtn{
                    button{
                        width:100%;
                    }
                }
            }
        }
    }
    .server-select{
        .server-select-cont{
            max-width:1280px;
            margin:0 auto;
            padding-top:30px;
            .selectbox{
                .item{
                    background-color:#FFF;
                    padding:20px;
                    cursor: pointer;
                    i{
                        font-size:30px;
                    }
                }
            }
        }
    }
    .select-block{
        .select-block-item{
            background-color:#FFF;
            margin-top:30px;
            padding:60px 0;
            .center-cont{
                max-width:1280px;
                margin:0 auto;
                button{
                    display:block;
                    margin-top:20px;
                }
                span.spanblock{
                    display:inline-block;
                    padding:15px;
                    text-align:center;
                    background-color:#f1f1f1;
                    margin:20px 5px 20px 0;
                }
                h3{
                    font-size:20px;
                }
                .innertext{
                    font-size:16px;
                }
                .imgbox{
                    @media (max-width:767px) {
                        text-align:center;
                        margin-top:20px;
                    }
                    img{
                        vertical-align:bottom;
                        margin-right:15px;
                        @media (max-width:1054px) {
                            margin-right:5px;
                        }
                        @media (max-width:767px) {
                            text-align:center;
                        }
                    }
                }
                .data-box{
                    padding-left:30px;
                }
                .innerdsc{
                    padding-right: 40px;
                }
                .text-right{
                    text-align:right;
                    @media (max-width:767px) {
                        padding-right:20px;
                    }
                    button{
                        float:right;
                    }
                    .innerdsc{
                        padding-left:40px;
                        padding-right: 0;
                    }
                }
            }
        }
    }
    .alertsubscribe{
        &.isopen{
            width:100%;
            height: 100%;

        }
        width:0;
        height: 0;
        overflow:hidden;
        position:fixed;
        left: 0;
        right: 0;
        top:0;
        bottom:0;
        background-color:rgba(0,0,0,.5);
        z-index: 2;
        transition:width 1s;
        -moz-transition:width 1s; /* Firefox 4 */
        -webkit-transition:width 1s; /* Safari and Chrome */
        -o-transition:width 1s; /* Opera */
        .centerWrap{
            background-color:#FFF;
            border-radius:10px;
            margin:100px auto;
            width:450px;
            height: 450px;
            padding:50px;
            position: relative;
            h1{
                font-size:20px;
            }
            p{
                margin-top:20px;
                span{
                    color:#1890ff
                }
            }
            .margin-t{
                margin-top:20px;
            }
            .closebtn{
                position:absolute;
                right: 10px;
                top:10px;
                cursor: pointer;
            }
        }
    }
`