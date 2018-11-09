import styled from 'styled-components';

export const DetailBox = styled.div`
    width: 100%;
`;

export const DetailContainer = styled.div`
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
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

export const Panel = styled.div`
    float: left;
    width: 78%;
    background: #e0e0e0;

`;


export const TopicHeader = styled.div`
    padding: 10px;
    background: #fff;
    .topic_full_title {
        font-size: 22px;
        font-weight: 700;
        .put_top {
            padding: 2px 4px;
            margin-right: 10px;
            font-size: 12px;
            background-color: #80bd01;
            color: #fff;
            border-radius: 3px;
            vertical-align: middle;
            &.none {
                display: none;
            }
        }
    }
    .changes {
        margin-top: 10px;
        margin-bottom: 10px;
        span {
            font-size: 12px;
            color: #838383;
            margin-right: 10px;
            &::before {
                content: "•";
                margin-right: 3px;
            }
        }
        button {
            float: right;
            border: none;
            padding: 8px 15px;
            border-radius: 3px;
            font-size: 14px;
            cursor: pointer;
            color: #fff;
            background-color: #80bd01;
            &.collected {
                background: #e5e5e5;
                color: #333;
                border-radius: 5px;
                transition: all .4s ease;
                &:hover {
                    background: #333;
                    color: #fff;
                }
                .show {
                    display: block;
                }
                .hide {
                    display: block;
                }
            }
            &.collect {
                transition: all .4s ease;
                &:hover {
                    background: #65A254;
                }
                .show {
                    display: block;
                }
                .hide {
                    display: block;
                }
            }
        }
    }
    .operation {
        text-decoration: none;
        margin-right: .5em;
        i {
            font-size: 1.33333333em;
            line-height: .75em;
            vertical-align: middle;
            cursor: pointer;
            margin: 0 5px;
            &:hover {
                color: #000;
            }
        }
    }
`;

export const TopicInnner = styled.div`
    padding: 20px;
    border-top: 1px solid #e5e5e5;
    color: #333;
    background: #fff;
    p {
        font-size: 15px;
        line-height: 1.7em;
        img {
            height: auto;
            max-width: 100%;
            vertical-align: middle;
        }
    }
    blockquote {
        padding: 0 0 0 15px;
        margin: 0 0 20px;
        border-left: 5px solid #eee;
    }
`;

export const TopicReply = styled.div`
    margin-top: 10px;
    .header {
        padding: 10px;
        border-radius: 3px 3px 0 0;
        background: #f6f6f6
    }
`;
export const ReplyItem = styled.div`
    position: relative;
    padding: 10px;
    font-size: 14px;
    background: #fff;
    .author_content {
        zoom: 1;
        &::after {
            content: '';
            clear: both;
            height: 0;
            display: block;
            visibility: hidden;
        }
        img {
            float: left;
            width: 30px;
            height: 30px;
        }
        .user_info {
            float: left;
            margin-left: 10px;
            span {
                color: #666;
                text-decoration: none;
                &.reply_time {
                    font-size: 11px;
                    color: #08c;
                    text-decoration: none;
                    margin-left: 5px;
                }
            }
        }
        .user_action {
            float: right;
            i {
                font-size: 20px;
                cursor: pointer;
            }
            span {
                margin: 0 10px;
            }
        }
    }
    .reply_content {
        padding-left: 50px;
        p {
            margin-bottom: 10px;
        }
        img {
            height: auto;
            max-width: 100%;
            vertical-align: middle;
            border: 0;
        }
    }
`;

export const ReplyWindow = styled.div`
    position: relative;
    margin-top: 10px;
    background: #fff;
    .header {
        padding: 10px;
        border-radius: 3px 3px 0 0;
        background: #f6f6f6
    }
    .editor {
        .editorClassName  {
            padding: 0 10px;
            min-height: 300px;
        }
        .rdw-dropdown-selectedtext {
            color: #000;
        }
    }
    .editor_buttons {
        position: absolute;
        bottom: 10px;
        left: 10px;
        border: none;
        color: #fff;
        border-radius: 3px;
        padding: 3px 10px;
        background-color: #08c;
    }
`;

export const Sidebar = styled.div`
    float: right;
    width: 20%;
    background: #e0e0e0;
`;

export const SidebarPanel = styled.div`
    margin-bottom: 30px;
    background: #fff;
    .title {
        padding: 10px;
        background-color: #f6f6f6;
        color: #51585c;
        border-radius: 3px 3px 0 0;
    }
    .author {
        padding: 10px;
        img {
            width: 48px;
            height: 48px;
        }
        span {
            margin-left: 20px;
        }
    }
    .integral {
        padding: 0 10px;
    }
    .autograph {
        padding: 0 10px;
        padding-bottom: 20px;
        font-size: 12px;
        font-style: italic;
    }
    .otherTopic {
        padding: 10px;
    }
    .AdvertisingMap {
        display: block;
        width: 270px;
        height: 85px;
        padding: 10px;
        padding-bottom: 0px;
        &:last-child {
            padding-bottom: 10px;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }

`;
