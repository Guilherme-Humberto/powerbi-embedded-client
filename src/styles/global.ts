import styled, { css, createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }
    body {
        min-height: 100vh;
        background: ${props => props.theme.colors.background};
        overflow-x: hidden;
        letter-spacing: 0.05rem;
    }

    body,
    input,
    button,
    textarea,
    select {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        color: ${props => props.theme.colors.font};
    }
    img {
        display: block;
    }
    ul {
        list-style: none;
    }
    a,
    a:link,
    a:visited {
        color: ${props => props.theme.colors.font};
        text-decoration: none;
    }
    .constraint {
        max-width: 1440px;
        margin: 0 auto;
    }
`
