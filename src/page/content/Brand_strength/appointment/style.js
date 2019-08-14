import styled from "styled-components"

export const AppointmentWrap = styled.div`
padding-top:35px;
    .AppointmentWrap_cont{
        max-width:1280px;
        margin:0 auto;
        h1{
            font-size:20px;
            margin-bottom:35px;
        }
        .item{
            margin-right:42px;
            border:1px solid transparent;
            background-color:#fff;
            @media (max-width:1260px) {
                margin-right:32px;
            }
            @media (max-width:960px) {
                margin-right:22px;
            }
            @media (max-width:767px) {
                margin-right:0px;
                text-align:center;
            }
            :hover{
                border:1px solid #ccc
            }
            img{
                margin-bottom:20px;
            }
            h3{
                font-size:18px;
                color:#1890ff;
                text-indent:12px;
            }
            p{
                font-size:12px;
                text-indent:12px;
            }
            
        }

    }
`