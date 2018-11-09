import styled from 'styled-components';

export const InformationBox = styled.div`
    width: 100%;
    background: #e0e0e0;
`

export const InnerAds = styled.div`
    background: #fff;
    margin-top: 20px;
    .title {
        padding: 10px;
        background-color: #f6f6f6;
    }
    .ewm {
        padding: 10px;
        border-radius: 0 0 3px 3px;
        img {
            width: 200px;
            height: 200px;
            margin-left: 50%;
            transform: translateX(-50%);
        }
    }
    ul {
        padding: 10px;
        margin-bottom: 0;
        li {
            margin: 10px 0;
            &:first-Child {
                margin-top: 0;
            }
            &:last-Child {
                margin-bottom: 0;
            }
            img {
                width: 100%;
                height: 65px;
            }
            .community-img {
                width: 150px;
                height: 49.5px;
            }
        }
    }
`