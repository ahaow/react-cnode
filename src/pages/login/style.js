import styled from 'styled-components';

export const LoginBox = styled.div`
    width: 100%;
`;

export const LoginContainer = styled.div`
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    min-height: 400px;
    margin: 15px auto;
    zoom: 1;
    &::after {
        content: '';
        clear: both;
        height: 0;
        display: block;
        visibility: hidden;
    }
`;

export const LoginLeft = styled.div`
    float: left;
    width: 75%;
    background: #fff;
    .header {
        background-color: #F6F6F6;
        padding: 10px;
        a {
            color: #80bd01;
        }
    }
    .content {
        .from {
            width: 500px;
            margin: 100px auto;
            input[name='token'] {
                border: none;
                width: 220px;
                box-shadow: 0 0 2px rgba(60,60,60,.5);
                padding: 5px 10px;
                margin-left: 10px;
                border-radius: 5px;
            }
            button {
                display: block;
                margin-left: 100px;
                margin-top: 30px;
                padding: 8px 15px;
                background: #008BC9;
                color: #fff;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
        }
     }
`;

export const LoginRight = styled.div`
    float: right;
    width: 22%;
    background: #fff;
    .title {
        padding: 10px;
        background-color: #f6f6f6;
    }
    p {
        padding: 10px;
        margin: 0 0 5px;
    }
    ul {
        margin-left: 40px;
        li {
            font-size: 13px;
            margin: 5px 0;
            list-style: disc;
        }
    }
`;