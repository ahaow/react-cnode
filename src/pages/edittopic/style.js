import styled from 'styled-components';

export const NewTopicBox = styled.div`
    width: 100%;
`;

export const NewTopicContainer = styled.div`
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

export const NewTopicLeft = styled.div`
    float: left;
    width: 75%;
    .header {
        padding: 10px;
        background-color: #f6f6f6;
        border-radius: 3px 3px 0 0;
        border-bottom: 1px solid #e5e5e5;
        span {
            font-size: 14px;
            color: #999;
            &.home {
                color: #80bd01;
            }
        }
    }
    .inner {
        padding: 10px;
        background: #fff;
        .table-selection {
            .title {
                margin-right: 20px;
            }
            select {
                margin: -2px;
                width: 220px;
                height: 30px;
                line-height: 30px;
                border: 1px solid #ccc;
                border-radius: 5px;
            }
            .topic_create_warn {
                font-weight: 700;
                margin-left: 20px;
            }
        }
        .topic-title {
            margin-top: 15px;
            border: none;
            padding:5px;
            width: 98%;
            border-radius: 5px;
            box-shadow: 0 0 2px rgba(60,60,60,.5);
        }
        .textarea {
            margin-top: 10px;
            width: 98%;
            padding: 10px;
            border: none;
            border-radius: 5px;
            min-height: 300px;
            box-shadow: 0 0 2px rgba(60,60,60,.5);
        }
        .submission {
            margin-top: 10px;
            padding: 8px 12px;
            border: none;
            color: #fff;
            background-color: #08c;
            border-radius: 5px;
            cursor: pointer;
            transition: all .8s ease;
            &:hover {
                background: #05c;
            }
        }
    }


`;

export const NewTopicRight = styled.div`
    float: right;
    width: 22%;
`;

export const Panel = styled.div`
    .title {
        padding: 10px;
        background-color: #f6f6f6;
    }
    .list {
        padding: 10px;
        background-color: #fff;
        li {
            margin: 10px 0;
            font-size: 12px;
            a {
                color: #778087;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

`;