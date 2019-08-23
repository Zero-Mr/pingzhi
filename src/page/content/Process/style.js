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
    }
    .optionselect{
        cursor: pointer;
        :hover{
            color:#1890ff;
        }
    }
    .optionselect.active{
        color:#1890ff;
    }
}

`