import styled from 'styled-components'

export const ContactUsWrap= styled.div`
background-color:#fff;
padding-top:80px;
padding-bottom:80px;
.contactus-box{
    max-width:1280px;
    margin:0 auto;
    .hascity{
        border-bottom:1px solid #ccc;
        padding-bottom:20px;
        li{
            margin-right:30px;
            font-size:16px;
            cursor: pointer;
        }
        li.active{
            color:#1890ff
        }
    }
}
`