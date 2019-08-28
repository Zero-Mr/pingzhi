import styled from 'styled-components'
export const QueKonwWrap= styled.div`
 background-color:#fff;
 .conten{
     max-width:1280px;
     margin:0 auto;
     padding-top:30px;
     padding-bottom:50px;
     .add-data-box{
         padding:30px 20px;
         border:1px solid #ccc;
         .cj-item{
             margin-top:20px;
             button{
                 width:100%;
                 margin-bottom:30px;
             }
         }
     }
     .text-wrap-box{
         padding-right:20px;
         @media (max-width:767px) {
             padding-right:0
         }
         .text-box{
         border:1px solid #ccc;
         .text-header{
             border-bottom:1px solid #ccc;
             padding-top:30px;
             h3{
                 font-size:20px;
             }
             time{
                 display:block;
                 margin-bottom:20px;
             }
         }
         .text-body{
             border-bottom:1px solid #ccc;
             padding:10px 20px;
             img{
                 max-width:100%;
             }
         }
         .text-footer{
             display:flex;
             padding:10px 0;
             span{
                 flex:1;
                 text-align:right;
                 padding-right:10px;
             }
             span:nth-of-type(1){
                 text-align:left;
                 padding-left:10px;
             }
         }
        }
     }
     
 }
`