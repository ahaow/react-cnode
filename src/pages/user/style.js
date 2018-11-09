import styled from 'styled-components';
export const UserBox = styled.div`
    width: 100%;
`;

export const UserContainer = styled.div`
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 400px;
    zoom: 1;
    &::after {
        content: '';
        clear: both;
        visibilty: hidden;
        display: block;
        height: 0;
    }
`;

export const UserLeft = styled.div`
    float: left;
    width: 75%;
    .header {
        padding: 10px;
        background-color: #f6f6f6;
        border-radius: 3px 3px 0 0;
        a {
            color: #80bd01;
        }
    }
    .UserContent {
        padding: 10px;
        background: #fff;
        .user-info {
            img {
                width: 40px;
                height: 40px;
                border-radius: 5px;
            }
            span {
                margin-left: 10px;
            }
        }
        p {
            margin: 10px 0;
            font-size: 14px;    
        }
        .integral {
            font-weight: 500;
        }
        .topic-collection {
            color: #778087;
        }
        .github {
            a {
                margin-left: 5px;
                color: #778087;
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
        .register-date {
            color: #ababab;
        }
    }
`;

export const Establish = styled.div`
    width: 100%;
    margin-top: 20px;
    .title {
        padding: 10px;  
        border-radius: 5px 5px 0 0;
        background: #f6f6f6;
    }
    .Establish-list {
        background: #fff;
        li {
            padding: 10px;
            border-bottom: 1px solid #e0e0e0;
            img {
                width: 30px;
                height: 30px;
                border-radius: 5px;
            }
            .comments {
                display: inline-block;
                margin-left: 20px;
                font-size: 12px;
            }
            .topic_title {
                display: inline-block;
                width: 70%;
                margin-left: 20px;
                font-size: 15px;
                color: #08c;
                cursor: pointer;
                vertical-align: middle;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                &:hover {
                    color: #005580;
                    text-decoration: underline;
                }
            }
            .create_at {
                float: right;
                margin-right: 10px;
                font-size: 12px;
                margin-top: 5px;
                img {
                    width: 18px;
                    height: 18px;
                    margin-right: 15px;
                }
                span {
                    vertical-align: middle;

                }
            }
        }
    }
`;

export const UserRight = styled.div`
    float: right;
    width: 22%;
    .Information {
        margin-top: 20px;
        background: #fff;
    }
`;

export const UserPanel = styled.div`
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