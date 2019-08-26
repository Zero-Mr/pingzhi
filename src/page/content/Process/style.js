import styled from 'styled-components'

export const ProcessWrap = styled.div`
padding-top:20px;
padding-bottom:80px;
background-color:#fff;
.process-content{
    max-width:1280px;
    margin:0 auto;
    .process-select{
        padding-top:50px;
        .add-data-box{
            border:1px solid #ccc;
            padding:20px 20px;
            .cj-item{
                margin-bottom:20px;
                button{
                    width:100%;
                }
            }
        }
        .data-item{
            padding-left:20px;
            .item{
                border-bottom:1px solid #ccc;
                margin-bottom:20px;
                padding-top:20px;
                padding-bottom:20px;
                .item-data_box{
                    padding-left:20px;
                    h3{
                        font-size:20px;
                        margin-bottom:25px;
                    }
                    p{
                        font-size:14px;
                        margin-bottom:25px;
                        color:rgba(0,0,0,0.65);
                    }
                    time{
                        color:rgba(0,0,0,0.65);
                    }
                }
            }
        }
    }
    .optionselect{
        a{
            color:rgba(0,0,0,0.65);
            display:block;
            :hover{
                  color:#1890ff;
              }
        }
        cursor: pointer;
        
    }
    .optionselect.active a{
        color:#1890ff;
    }
}

`