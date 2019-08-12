import styled from 'styled-components';

export const SpecialLabelWrpa =styled.div`
width:100%;
margin-top:50px;
.Special_item{
    background-color:#fff;
    text-align:center;
    padding-top:20px;
    padding-bottom:30px;
    margin-right:20px;
    @media (max-width:767px){
        margin-bottom:20px;
    }
    a{
        p{
            color:#000;
        }
        span{
            color:#ccc;
            font-size:12px;
        }
    }
}
.Special_item:hover{
    box-shadow:2px -1px 10px rgba(0,0,0,.3);
}
` 