import styled from 'styled-components'
import { space } from 'styled-system'

const greyColor = ['#404040', '#7F7F7F', '#BFBFBF', '#E5E5E5']

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  color: #ffffff;
`

export const Card = styled.div`
  ${space};
  border: ${`0.8px solid ${greyColor[3]}`};
  border-radius: 4px;
  text-align: ${props => (props.centerText ? 'center' : 'inherit')};
`

export const Heading1Text = styled.h1`
  color: ${greyColor[0]};
  font-weight: 900;
  letter-spacing: ${props => (props.spaced ? '3px' : '0.6px')};
  text-align: ${props => (props.centerText ? 'center' : 'inherit')};
`

export const Heading2Text = styled.h2`
  color: ${props => (props.primary ? greyColor[1] : greyColor[2])};
  font-weight: 900;
  letter-spacing: ${props => (props.spaced ? '3px' : '0.6px')};
  text-align: ${props => (props.centerText ? 'center' : 'inherit')};
`

export const Heading3Text = styled.h3`
  ${space};
  color: ${props => (props.primary ? greyColor[1] : greyColor[3])};
  font-weight: 600;
  letter-spacing: 1.5px;
  text-align: ${props => (props.centerText ? 'center' : 'inherit')};
`

export const SocialIcon = styled.a`
  margin-left: 30px;
  margin-right: 30px;
  color: ${greyColor[2]};
  :hover {
    color: ${greyColor[3]};
  }
`

export const CenterVH = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
`
