import styled from "styled-components";

export const HomeContainer = styled.div`
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

export const ContentLeft = styled.div`
    float: left;
    width: 78%;
    background: #fff;
`;



export const ContentHeader = styled.div`
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    span {
        margin: 0 10px;
        padding: 3px 4px;
        border-radius: 3px;
        font-size: 14px;
        cursor: pointer;
        a {
            padding: 2px 7px;
            text-decoration: none;
            color: #80bd01;
            &:hover {
                color: #08c;
            }
            &.active {
                background-color: #80bd01;
                color: #fff;
            }
        }
        
    }
`;

export const ContentInner = styled.div`
    border-radius: 0 0 3px 3px;
`;
export const TopicList = styled.div`
    margin: 0;
`;
export const TopicListCell = styled.div`
    position: relative;
    padding: 10px 0 10px 10px;
    font-size: 14px;
    border-top: 1px solid #f0f0f0;
    zoom: 1;
    &::after {
        content: "";
        clear:both;
        display:block;
        visibilty: hidden;
        height: 0;
    }
    .user_avtar {
        float: left;
        width: 30px;
        height: 30px;
        background: pink;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .reply_count {
        float: left;
        line-height: 30px;
        margin-left: 20px;
        .count_of_replies {
            font-size: 15px;
            color: #9e78c0;
        }
        .count_seperator {
            font-size: 12px;
            margin-left: 3px;
            color: #e0e0e0;
        }
        .count_of_visits {
            display: inline-block;
            font-size: 10px;
            color: #b4b4b4;
            margin-left: 3px;
        }
    }
    .topic_title_wrapper {
        position: absolute;
        left: 140px;
        float: left;
        line-height: 30px;
        span {
            vertical-align: middle;
            margin-right: 15px;
            padding: 2px 4px;
            border-radius: 3px;
            font-size: 12px;
            &.put_top {
                background: #80bd01;
                color: #fff;
            }
            &.put_other {
                background: #e5e5e5
                color: #999;
            }
           
        }
        .topic_title {
            display: inline-block;
            width: 750px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            font-size: 16px;
            color: #888;
            cursor: pointer;
            vertical-align: middle;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    .last_time {
        float:right;
        line-height: 30px;
        margin-right: 15px;
        img {
            width: 18px;
            height: 18px;
            vertical-align: middle;
        }
        span {
            vertical-align: middle;
            margin-left: 10px;
            font-size: 12px;
            color: #778087;
        }
    }
`;

export const PageContainer = styled.div`
    margin: 10px 0;
    padding-bottom: 10px;
    .pagination {
        margin-left: 50%;
        transform: translateX(-25%);
    }
`;

export const ContentRight = styled.div`
    float: right;
    width: 20%;
`;
export const UserInfo = styled.div`
    width: 100%;
    background: #fff;
    .userinfo-title {
        padding: 10px 0 10px 10px;
        font-size: 13px;
        background: #f6f6f6;
        border-radius: 3px 3px 0 0;
    }
    .userinfo-content {
        font-size: 14px;
        padding: 10px 0 10px 10px;
        .author {
            .avatar_url {
                width: 48px;
                height: 48px;
                border-radius: 3px;
            }
            .loginname {
                margin-left: 10px;
                a {
                    color: #778087;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
        .integral {
            margin-top: 10px;
            font-weight: 500;
        }
        .signature {
            margin-top: 10px;
            font-style: italic;
        }
    }
`;

export const LoginBox = styled.div`
    padding: 10px;
    background: #fff;
    .login {
        display: block;
        margin: 10px 0;
        padding: 10px;
        text-align: center;
        background: #5bc0de;
        color: #fff;
        border-radius: 5px;
        transition: all .8s ease;
        &:hover {
            background: #08c;
        }
    }

`;



export const Issue = styled.div`
    margin-top: 15px;
    background: #fff;
    padding: 10px;
    a { 
        display: inline-block;
        padding: 5px 15px;
        background: #80bd01;
        color: #fff;
        border-radius: 3px;
        transition: all .7s ease;
        &:hover {
            color: #fff;
            background: #6ba44e;
        }
    }
`;

export const NoReplyTopic = styled.div`
    margin-top: 15px;
    .title {
        padding: 10px;
        background: #f6f6f6;
        border-radius: 3px 3px 0 0;
        font-size: 13px;
        letter-spacing: 1px;
    }
    .topic-list {
        padding: 5px 10px;
        background: #fff;
        li {
            margin: 10px 0;
            font-size: 13px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            a {
                img {
                    width: 150px;
                    height: 50px;
                }
            }
        }
    }
    .inner {
        background: #fff;
        padding: 10px;
        img {
            width: 200px;
            height: 200px;
            margin-left: 50%;
            transform: translateX(-100px);
        }
    }
`;


