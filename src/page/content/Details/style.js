import styled from 'styled-components'

export const DetailsWrap= styled.div`
    background-color:#fff;
    .bannercont{
        max-width:1280px;
        margin:0 auto;
        padding-top:20px;
        padding-bottom:30px;
        .databox{
            border:1px solid #ccc;
            padding:10px;
            margin-top:20px;
            h1.title{
                font-size:20px;
                margin-bottom:30px;
            }
            .imgbox{
                margin-top:30px;
                .imgwrapbox{
                    margin-bottom:20px;
                    position: relative;
                    p{
                        padding:10px;
                        background-color:rgba(0,0,0,.4);
                        color:#fff;
                        font-size:16px;
                        position:absolute;
                        bottom:10px;
                        left:10px;
                    }
                }
            }
        }
        .add-address{
            margin-top:20px;
            padding:0 30px;
            >div{
            padding-top:10px;
            border:1px solid #ccc;
            .formitem{
                margin-bottom:20px;
                padding:0 15px;
                button{
                    width:100%;
                }
            }
            }
        }
    }
`