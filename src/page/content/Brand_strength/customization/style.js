import styled from 'styled-components';

export const CustomizationWrap = styled.div`
width:100%;
background-color:#fff;
h1{
    font-size:20px;
    padding-top:35px;
    padding-bottom:15px;
}
.itemwrap{
    max-width:1280px;
    margin:0 auto !important;
    .gutter-row{
        border:1px solid transparent;
        padding:0 !important;
        padding-bottom:20px !important;
        img{
            width:100%;
            margin-bottom:35px;
        }
        :hover{
            border:1px solid #ccc;
        }
    }
}
`