/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }

    html {
      scroll-behavior: smooth;
    }
    
    :focus{
      outline: 0;
      box-shadow: 0 0 0 1px ${({ theme }) => theme['green-01']};
    }
    
    body{
      background-color: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme['white']};
      --webkit-font-smoothing: antialiased;


      @media (max-width: 1920px) {
        padding:  0 1.5rem;
      }
    }
    
    body, input, textarea, button{
      font: 400 1rem 'Raleway', sans-serif;
    }

  *::-webkit-scrollbar {
    width: 0.4rem;
  }

  *::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  }

  *::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme['gradient-green']};
  /* outline: 1px solid ${({ theme }) => theme}; */
  }

    @media (max-width: 768px) {
      html {
        font-size: 87.5%;
      }
    }
`;
