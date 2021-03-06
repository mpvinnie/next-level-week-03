import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  > a {
    position: absolute;
    right: 40px;
    bottom: 40px;

    z-index: 10;

    width: 64px;
    height: 64px;
    background: ${colors.blue};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;

    &:hover {
      background: ${colors.blue_hover};
    }
  }
`

export const SideBar = styled.aside`
  width: 440px;
  background: ${colors.background};
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    h2 {
      font-size: 40px;
      font-weight: 800;
      line-height: 42px;
      margin-top: 64px;
    }

    p {
      line-height: 28px;
      margin-top: 24px;
    }
  }

  footer {
    display: flex;
    flex-direction: column;

    line-height: 24px;

    strong {
      font-weight: 800;
    }
  }
`