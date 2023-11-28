import styled from "styled-components"

export const Container = styled.main`
    width: 626px;
    height: 486px;
    margin: 32px auto 64px;

`

export const Image = styled.div`
    width: 350px;
    height: 238px;
    margin: 0 auto 32px;
    img {
        margin-bottom: 32px;
    }

`
export const Title = styled.h1`
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    line-height: 56px;
    font-weight: normal;
    margin-bottom: 16px;
    span {
        /* span dentro do h1*/
        color: #EE24FF;
        font-weight: bold;
    }
`
export const Span = styled.span`
    a {
        color: #FF9900;
    }
`

export const Paragraph = styled.p`
    color: #7D7987;
    font-size: 15px;
    line-height: 28px;
`
