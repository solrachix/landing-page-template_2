import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

interface StyledProps{
  className?: string;
  align?: string;
  size?: number;
  color?: string;
  weight?: string | number
}

// interface ComponentProps extends StyledProps {
//   text: string;
// }

const Text = styled.p<StyledProps>`
  width: auto;
  max-width: 100%;
  font-family: Roboto, sans-serif !important;
  text-align: ${({ align }) => align};
  font-size: ${({ size }) => size}em;
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  margin: 0;
  word-break: break-word;

  strong {
    color: ${({ theme: { colors } }) => colors.themeColors.primary.normal};
  }
`

const TextComponent: React.FC<StyledProps> = ({ children, ...props }) => {
  return <Text {...props}>{ children }</Text>
}

TextComponent.propTypes = {
  // text: PropTypes.string.isRequired,
  align: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  weight: PropTypes.oneOf([
    'normal', 'bold',
    100, 200, 300, 400, 500, 600, 700, 800, 900
  ])
}

TextComponent.defaultProps = {
  size: 1,
  color: '#fff',
  weight: 'normal',
  align: 'left'
}

export default TextComponent
