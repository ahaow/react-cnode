import styled from 'styled-components';

export const UnreadMsgBox = styled.div `
    width: 100%;
`;

export const UnreadMsgContainer = styled.div `
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 400px;
    zoom: 1;
    &::after {
        content: '';
        clear: both;
        visibility: hidden;
        display: block;
        height: 0;
    }
`;

export const UnreadMsgLeft = styled.div `
    float: left;
    width: 75%;
`;

export const UnreadMsgRight = styled.div `
    float: right;
    width: 22%;
`;

export const UnreadMsgPanel = styled.div `
    margin-bottom: 20px;
    background-color: #e1e1e1;
    .header {
        padding: 10px;
        background-color: #f6f6f6;
        border-radius: 3px 3px 0 0;
        .PastInfo {
            color: #000;
        }
        span {
            margin: 0 3px;
            color: #999;
        }
    }
    .content {
        padding: 10px;
        background: #fff;
    }
    .pastinfo-content {
        background: #fff;
        li {
            padding: 10px;
            border-bottom: 1px solid #f0f0f0;
            span:nth-child(1) {
                color: #08c;
            }
            span {
                margin: 0 5px;
                vertical-align: middle;
            }
            .at {
                margin-left: 10px;
            }
            a {
                display: inline-block;
                max-width: 460px;
                margin-left: 5px;
                vertical-align: middle;
                color: #08c;
                &:hover {
                    text-decoration: underline;
                    color: #005580;
                }
            }
        }
    }
`;

export const UnreadMessagePanel = styled.div`
    width: 100%;
    .title {
        padding: 10px;
        background-color: #f6f6f6;
        border-radius: 3px 3px 0 0;
    }
    .content {
        padding: 10px;
        background: #fff;
        img {
            width: 40px;
            height: 40px;
            border-radius: 5px;
        }
        span {
            margin-left: 13px;
            font-size: 17px;
            a {
                font-size: 14px;    
                color: #778087;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
        p {
            margin-top: 10px;
            margin-bottom: 0;
            font-size: 14px;
            font-weight: 500;
        }
    }
    .release-topice {
        padding: 10px;
        background: #fff;
        margin-top: 20px;
        a {
            display: inline-block;
            background: pink;
            padding: 7px 10px;
            border-radius: 3px;
            letter-spacing: 1px;
            color: #fff;
            background: #80bd01;
            transition: all .8s ease;
            &:hover {
                background: #6ba44e;
            }
        }
    }
`;