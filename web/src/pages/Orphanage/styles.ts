import styled, { css } from 'styled-components'
import colors from '../../styles/colors'

interface IButtonImageProps {
  active?: boolean
}

interface IOpenOnWeekendsProps {
  open_on_weekends: boolean
}

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`

export const Content = styled.main`
  flex: 1;
`

export const DetailsContainer = styled.div`
  width: 700px;
  margin: 64px auto;

  background: ${colors.primary};
  border: 1px solid ${colors.border};
  border-radius: 20px;

  overflow: hidden;

  > img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 16px;

  margin: 16px 40px 0;
`

export const ButtonImage = styled.button<IButtonImageProps>`
  height: 88px;
  background: none;
  border-radius: 20px;
  overflow: hidden;
  outline: none;

  opacity: 0.6;

  ${props => props.active && css`
    opacity: 1;
  `}

  > img {
    width: 100%;
    height: 88px;
    object-fit: cover;
  }
`

export const OrphanageDetails = styled.div`
  padding: 80px;

  h1 {
    color: ${colors.title};
    font-family: Quicksand;
    font-size: 54px;
    line-height: 54px;
    margin-bottom: 8px;
  }

  p {
    color: ${colors.subtitle};
    line-height: 28px;
    margin-top: 24px;
  }

  hr {
    width: 100%;
    height: 1px;
    border: 0;
    background: ${colors.border};
    margin: 64px 0;
  }

  > h2 {
    font-family: Quicksand;
    font-size: 36px;
    line-height: 46px;
    color: ${colors.title};
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

    &:hover {
      background: ${colors.green_hover};
    }

    svg {
      margin-right: 16px;
    }
  }
`

export const MapContainer = styled.div`
  margin-top: 64px;
  background: ${colors.bg_map};
  border: 1px solid ${colors.border_map};
  border-radius: 20px;

  footer {
    padding: 20px 0;
    text-align: center;

    a {
      line-height: 24px;
      color: ${colors.link};
      text-decoration: none;
    }
  }
`

export const OpenDetails = styled.div`
  margin-top: 24px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
`

export const OpeningHoursContainer = styled.div`
  padding: 32px 24px;
  border-radius: 20px;
  line-height: 28px;

  background: ${colors.bg_hours};
  border: 1px solid ${colors.border_map};
  color: ${colors.subtitle};

  > svg {
    display: block;
    margin-bottom: 20px;
  }
`

export const OpenOnWeekendContainer = styled.div<IOpenOnWeekendsProps>`
  padding: 32px 24px;
  border-radius: 20px;
  line-height: 28px;
  background: ${colors.bg_noweekends};
  border: 1px solid ${colors.border_red};
  color: ${colors.red};

  svg {
    display: block;
    margin-bottom: 20px;
    color: ${colors.red};
  }

  ${props => props.open_on_weekends && css`
    background: ${colors.bg_weekends};
    border: 1px solid ${colors.border_green};
    color: ${colors.title_green};

    svg {
      color: ${colors.green};
    }
  `}
`