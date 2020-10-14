import styled, { css } from 'styled-components'

import colors from '../../styles/colors'

interface ISelectButtonProps {
  active?: boolean
}

export const Container = styled.div`
  display: flex;
`

export const Content = styled.main`
  flex: 1;
`

export const Form = styled.form`
  width: 700px;
  margin: 64px auto;

  background: ${colors.primary};
  border: 1px solid ${colors.border};
  border-radius: 20px;
  overflow: hidden;
  padding: 64px 80px;

  fieldset {
    border: 0;

    & + fieldset {
      margin-top: 80px;
    }

    legend {
      width: 100%;

      font-family: Quicksand;
      font-size: 32px;
      line-height: 34px;
      color: ${colors.subtitle};
      font-weight: bold;

      border-bottom: 1px solid ${colors.border};
      margin-bottom: 40px;
      padding-bottom: 24px;
    }
  }

  > button {
    margin-top: 64px;
    width: 100%;
    height: 64px;
    background: ${colors.bg_green};
    border-radius: 20px;
    color: ${colors.primary};
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      background: ${colors.green_hover};
    }
  }
`

export const InputContainer = styled.div`
  & + div {
    margin-top: 24px;
  }

  label {
    display: flex;
    color: ${colors.label};
    margin-bottom: 8px;
    line-height: 24px;

    span {
      font-size: 14px;
      margin-left: 24px;
      line-height: 24px;
    }
  }

  input, textarea {
    width: 100%;
    background: ${colors.input};
    border: 1px solid ${colors.border};
    border-radius: 20px;
    outline: none;
    color: ${colors.subtitle};
  }

  input {
    height: 64px;
    padding: 0 16px;
  }

  textarea {
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;
  }
  
  > button {
    width: 100%;
    height: 64px;
    background: ${colors.input};
    border: 1px dashed ${colors.border_dashed};
    border-radius: 20px;
  }
`

export const OpenOnWeekendContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const SelectButton = styled.button<ISelectButtonProps>`
  height: 64px;
  background: ${colors.input};
  border: 1px solid ${colors.border};
  color: ${colors.subtitle};

  ${props => props.active && css`
    background: ${colors.bg_activy};
  `}

  &:first-child {
    border-radius: 20px 0px 0px 20px;
  }

  &:last-child {
    border-radius: 0 20px 20px 0;
  }
`