import styled from 'styled-components';

export const KnowledgeWrap = styled.div`
margin-top:60px;
margin-bottom:60px;
padding-bottom:60px;
border-bottom:1px solid #ccc;
h1{
    font-size:30px;
}
.KnowledgeWrap-inner{
    max-width:1280px;
    margin:0 auto;
}
.strategy_list{
    li{
        a{
            width:100%;
            color: rgba(0,0,0,0.65);
        }
    }
    li:hover{
        background-color:#fff;
    }
}
`