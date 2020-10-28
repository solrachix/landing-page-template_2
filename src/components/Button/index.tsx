import React from 'react'

import { Button } from './styles'

// interface ComponentProps {
//   onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
// }

const ButtonComponent: React.FC = ({ children, ...props }) => {
  return <Button className="button" {...props}>{ children }</Button>
}

export default ButtonComponent
