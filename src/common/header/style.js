import styled from 'styled-components'

export const HeaderWrapdom = styled.div`
max-width:1280px;
margin: 0 auto;
`

export const  ConstHeaderNav = styled.nav`
width:100%;
border-top: solid 1px #d9d9d9;
border-bottom: solid 1px #d9d9d9;
`
export const  NavWrap = styled.div`
max-width:1280px;
margin:0 auto;
.ant-menu-submenu-title{
    padding: 0 34px !important;
    .ant-menu-submenu-arrow{
        transform:rotate(90deg)
    }
}
.ant-menu-submenu-active{
    .ant-menu-submenu-arrow{
        transform:rotate(-90deg)
    }
}
.ant-menu{
    border-right:none;
}
`