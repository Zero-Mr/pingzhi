import styled from 'styled-components'
import bannerbg from '@src/statics/index/ea77b11b3e6f15ed009be4f4236eb3f0.jpg'
export const QuestionWrap= styled.div`
  background-color:#fff;
  width:100%;
  .Question-banner{
    background:url(${bannerbg}) no-repeat 0 0;
    height: 460px;
  }
  .fromwrap{
      max-width:1280px;
      margin:0 auto;
      .adddata{
          width:308px;
          background-color:#fff;
          padding: 40px 20px;
          @media (max-width:767px) {
            float:none;
            margin:0 auto;
          }
          h3{
              margin-bottom:20px;
          }
          .fromitem{
              margin-bottom:20px;
              button{
                  width:100%;
              }
          }
      }
  }
  .process{
      max-width:1280px;
      margin:0 auto;
      padding-top:30px;
      padding-bottom:30px;
      h1.title{
          font-size:30px;
      }
      .gutter-row{
          .ant-card-hoverable{
             .ant-card-body{
                 padding-top:30px;
                 ul{
                    display:flex;
                     width:100%;
                     li{
                        flex:1;
                        text-align:center;
                        height: 100%;
                        a{
                            color:#000;
                            display:block;
                            width:100%;
                            height: 100%;
                            i{
                                font-size:18px;
                            }
                            :hover{
                                color: #1890ff;
                            }
                        }
                     }
                 }
             }
          }
      }
  }
  .feng-shui{
      margin-top:30px;
      .feng-shui-wrap{
          max-width:1280px;
          margin:0 auto;
          h3{
              font-size:30px;
              span{
                  font-size:14px;
              }
          }
          .feng-shui-item{
              position: relative;
              p{
                  width:100%;
                  padding:10px;
                  background-color:rgba(0,0,0,.4);
                  position:absolute;
                  left:0;
                  bottom:0;
                  margin-bottom:0;
                  color:#fff;
              }
          }
      }
  }
`