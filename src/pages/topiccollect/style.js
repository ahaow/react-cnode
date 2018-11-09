import styled from 'styled-components';
export const TopicCollectBox = styled.div`
    width: 100%;
`;

export const TopicCollectContainer = styled.div`
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

export const TopicCollectLeft = styled.div`
    float: left;
    width: 75%;
    background: #fff;
    .header {
        padding: 10px;
        background-color: #f6f6f6;
        border-radius: 3px 3px 0 0;
        a {
            color: #80bd01;
        }
    }
    .topic_collec_list {
        margin-bottom: 5px;
        li {
            padding: 10px;
            border-bottom: 1px solid #f0f0f0;
            &:hover {
                background: #f5f5f5;
            }
            img {
                width: 30px;
                height: 30px;
                border-radius: 4px;
            }
            .count {
                display: inline-block;
                width: 70px;
                text-align: center;
                vertical-align: middle;
                .reply_count {
                    color: #9e78c0;
                }
                .count_seperator {
                    font-size: 10px;
                    margin: 0 1px;
                }
                .visit_count {
                    font-size: 10px;
                    color: #b4b4b4;
                }

            }
            .put_good {
                display: inline-block;
                background: #80bd01;
                padding: 2px 4px;
                font-size: 12px;
                color: #fff;
                border-radius: 3px;
                vertical-align: middle;
                margin-right: 15px;
            }
            .title {
                display: inline-block;
                width: 70%;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                vertical-align: middle;
                cursor: pointer;
                &:hover {
                    text-decoration: underline;
                }
            }
            .last_active_time {
                float: right; 
                margin-right: 10px;
                margin-top: 6px;
                font-size: 12px;
                color: #778087;
                letter-spacing: 1px;
            }
        }
    }
`;


export const TopicCollectRight = styled.div`
    float: right;
    width: 22%;
`;

export const TopicCollectPanel = styled.div`
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
