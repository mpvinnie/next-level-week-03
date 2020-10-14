import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.aside`
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: ${colors.bg_sidebar};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 48px;
  }

  footer {
    a, button {
      width: 48px;
      height: 48px;

      background: ${colors.button};
      border-radius: 16px;

      transition: background-color 0.2s;

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background: ${colors.blue_hover};
      }
    }
  }
`