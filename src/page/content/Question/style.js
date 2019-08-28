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
                  a{
                      color:#999
                  }
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
          .fengshui-three-item{
              a{
            
                  img{
                      width:120px;
                      height: 94px;
                      @media (max-width:767px) {
                          max-width:100%;
                          width:100%;
                          display:block;
                          height: 104px;
                      }
                  }
                  span{
                      vertical-align:top;
                      color:#999;
                      font-size:15px;
                      @media (max-width:767px){
                          text-align:center;
                          display:block;
                      }
                  }
              }
          }
      }
  }
  .questions-and-answers{
      margin-top:80px;
      padding-bottom:80px;
      .questions-and-answers-content{
          max-width:1280px;
          margin:0 auto;
          .Doubt-item{
              padding-right:20px;
              @media (max-width:767px) {
                padding-right:0px;
              }
          }
          .title{
              font-size:30px;
          }
          a{
              color:#999;
          }
          .Doubt0{
              position: relative;
              img{
                  width:100%;
                  max-height:234px;
              }
              p{
                  padding:10px;
                  color:#fff;
                  width:100%;
                  position:absolute;
                  left: 0;
                  bottom:0;
                  background-color:rgba(0,0,0,.4);
                  margin-bottom:0px
              }
          }
          .Doubt-list{
              width:100%;
              display:block;
              @media (max-width:767px) {
                  text-align:center;
              }
              .imgclass{
                  display:inline-block;
                  width:100px;
                  height: 100px;
                  @media (max-width:767px) {
                      display:block;
                      width:60%;
                      margin:0 auto;
                      height: auto;
                  }
              }
              a{
                  vertical-align:top
              }
              .dis-inline{
                  display:inline-block;
                  width:100px;
                  text-align:center;
                  vertical-align:top;
                  height: 100px;
                  overflow:hidden;
                  @media (max-width:767px) {
                        width:200px;
                        height: 200px;  
                  }
                  img{
                      width:100px;
                      height: 100px;;
                      @media (max-width:767px) {
                          width:200px;
                          height:200px;
                      }
                  }
                  p{
                      vertical-align:top;
                      margin-bottom:0;
                      width:100%;
                      height: 20px;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                  }
              }
              .dis-inline:nth-of-type(2){
                @media (max-width:767px) {
                        width:auto;
                        height: auto;  
                        display:block;
                        margin-bottom:15px;
                  }
              }
          }
          .margin-b{
              margin-bottom:15px;
              padding-left:10px;
              @media (max-width:767px) {
                padding-left:0;
                  }
          }
      }
  }
`