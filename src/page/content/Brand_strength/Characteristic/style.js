import styled from 'styled-components'

export const CandesignersWrap = styled.div`
    width:100%;
    margin-top:60px;
    background-color:#fff;
    .slideWrap{
        max-width:1280px;
        margin:0 auto;
        padding-top:35px;
        >h1{
            font-size:20px;
            margin-bottom:35px;
        }
        >P{
            margin-bottom:25px;
        }
        .ant-carousel .slick-dots li{
            background-color:red;
        }
        .ant-carousel .slick-dots li.slick-active button{
            background-color:green;
        }
        .silde-data{
            padding-top:80px;
            @media (max-width:767px) {
            padding-top:0;
                
            }
        }
    }
` 