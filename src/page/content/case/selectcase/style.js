import styled from 'styled-components'

export const CaseSelectWrap = styled.div`
    .casebg{
        width:100%;
        .domselect{
            max-width:1280px;
            margin:0 auto;
            position: relative;
            .jdcase{
                width:100%;
                background-color:#fff;
                position:absolute;
                top:-60px;
                line-height:60px;
                height: 60px;
                text-align:center;
                border-top-left-radius:8px;
                border-top-right-radius:8px;
                font-size:20px;
                .jdcaseicon{
                    margin-right:5px;
                font-size:20px;
                    display:inline-block;
                }
            }
        }
    }
    .case-select{
        width:100%;
        background-color:#fff;
        .case-select-item{
            max-width:1280px;
            margin:0 auto;
            padding:20px 10px;
            ul{
                span{
                    padding:8px 10px;
                }
                li{
                    padding:8px 10px;
                    margin-right:20px;
                    cursor: pointer;
                    :hover{
                        color:#108ee9
                    }
                }
                li.active{
                    color:#108ee9;
                    pointer-events: none;
                }
            }
        }
    }
  
`