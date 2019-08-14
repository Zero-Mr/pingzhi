import styled from "styled-components"

export const ConsiderateWrap = styled.div`
margin-top:80px;
.ConsiderateWrap-cont{
    max-width:1280px;
    margin:0 auto;
    h1{
        font-size:20px;
    }
    .item{
        background-color:#fff;
        height: 250px;
        padding:20px;
        .iconclass{
            margin-top:40px;
            font-size:40px;
        }
        :hover{
            background-color:#ccc;
            color:#fff;
            h3{
                color:#fff;
            }
        }
    }
}
`