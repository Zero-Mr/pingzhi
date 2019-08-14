import styled from "styled-components"

export const MterialWrap = styled.div`
padding-top:30px;
 >h1{
    font-size:20px;
    font-weight:bold;
 }
 .Mterial-imgwrap{
     max-width: 1280px;
     margin:0 auto;
     .left-splice_img{
        padding-bottom: 27px;
    background-color: #fff;
    border:1px solid #ccc;
    img{
        @media (max-width:1264px) {
        height: 100%;
            
        }
    }
     }
 }
 .hover-box{
     .data-box{
         background-color:#fff;
         height: 100%;   
         padding-top:30px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        text-align: center;
        transition: all 0.60s ease-in-out 0s;
        @media (max-width:1300px){
            padding-top:0px;
        }
         h3{
             margin-bottom:30px;
         }
     }
     height: 223px;
     @media (max-width:1300px) {
        height: auto;
        h3{
            margin-bottom:0 !important;
        }
     }
     overflow:hidden;
     position: relative;
     :hover img{
        transform: translateY(-100%) rotateX(90deg);
    transform-origin: center bottom 0;
    opacity: 0;
      
     }
     :hover .data-box{
         z-index: 0;
         opacity: 1;
     }
     img{
         height: 100%;
        opacity: 1;
    transform: translateY(0) rotateX(0);
    transition: all 0.6s ease-in-out 0s;
     }
 }
`