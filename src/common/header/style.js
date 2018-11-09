import styled from "styled-components";

export const HeaderNav = styled.div`
    width: 100%;
    background-color: #444;
    color: #fff;
`;

export const HeaderContainer = styled.div`
    width: 90%;
    box-sizing: border-box;
    padding: 5px;
    line-height: 40px;
    margin: 0 auto;
    zoom: 1;
    &::after {
        content: "";
        clear:both;
        display:block;
        visibilty: hidden;
        height: 0;
    }
`;

export const HeaderLeft = styled.div`
    float: left;
    height: 40px;
    overflow: hidden;
    .logo {
        float: left;
        width: 120px;
        height: 35px;
        margin-top: 1px;
        img {
            vertical-align: top;
            width: 100%;
            height: 100%;
        }
    }
    form {
        float: left;
        margin-left: 20px;
        margin-top: 2px;
        input {
            width: 180px;
            height: 24px;
            padding: 2px 10px 2px 30px;
            border: none;
            border-radius: 10px;
            background: url('http://static2.cnodejs.org/public/images/search.e53b380a.hashed.png') 4px 2px no-repeat #888
        }
    }
`;

export const HeaderRight = styled.div`
    float: right;
`;

export const NavList = styled.ul`
    li {
        float: left;
        margin: 0 10px;
        font-size: 13px;
        color: #ccc;
        cursor: pointer;
        a {
            color: #ccc;
            text-decoration: none;
        }
    }
`;

