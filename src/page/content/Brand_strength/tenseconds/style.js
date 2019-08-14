import styled from "styled-components"

export const TensWrap = styled.div`
padding-top:50px;
background-color:#fff;
padding-bottom:50px;
    >div{
        max-width:1280px;
        margin:0 auto;
        @media (max-width:767px) {
            padding:0 20px;
        }
        h1{
            font-size:20px;
            margin-bottom:20px;
        }
        button{
            width:100%;
        }
        .gutter-row{
            @media (max-width:767px) {
                margin-bottom:30px;
            }
        }
    }

`