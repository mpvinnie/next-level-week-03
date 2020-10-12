import styled from 'styled-components'

import colors from '../../styles/colors'
import landing from '../../images/landing.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${colors.background};

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${landing}) no-repeat 80% center;

  main {
    max-width: 350px;

    h1 {
      font-size: 76px;
      font-weight: 800;
      line-height: 70px;
    }

    p {
      margin-top: 40px;
      font-size: 24px;
      line-height: 34px;
    }
  }

  div {
    position: absolute;
    right: 0;
    top: 0;

    font-size: 24px;
    line-height: 34px;

    display: flex;
    flex-direction: column;
    text-align: right;

    strong {
      font-weight: 800;
    }
  }

  a {
    position: absolute;
    right: 0;
    bottom: 0;

    width: 80px;
    height: 80px;
    background: ${colors.yellow};
    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;

    &:hover {
      background: ${colors.yellow_hover};
    }
  }
`