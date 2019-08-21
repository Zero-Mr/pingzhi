import styled from 'styled-components'

export const CaseItemWrap = styled.div`
    width:100%;
    background-color:#fff;
    .itemwrap{
        max-width:1280px;
        margin:0 auto;
        padding:10px 0;
        .item{
            margin-bottom:20px;
            >div{
                border:1px solid #ccc;
                img{
                    margin-bottom:20px;
                    height: 200px;
                    width:100%;
                }
                p{
                    margin-bottom:40px;
                    padding:0 20px;
                }
                h3{
                    padding:0 20px;
                }
                :hover{
                    -webkit-box-shadow: 0 15px 30px rgba(0,0,0,.1);
    box-shadow: 0 15px 30px rgba(0,0,0,.1);
    -webkit-transform: translate3d(0,-2px,0);
    transform: translate3d(0,-2px,0);
    border-radius: 2px;
                }
            }

        }
    }
`