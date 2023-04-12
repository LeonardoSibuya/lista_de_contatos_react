import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Circulo = styled(Link)`
  border-radius: 50%;
  background-color: #00e50b;
  color: #fff;
  border: none;
  height: 64px;
  width: 64px;
  font-size: 40px;
  cursor: pointer;
  transition: 0.5s ease;
  font-weight: bold;
  box-shadow: 1px 1px 4px 0px #353044;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  :hover {
    transform: scale(1.1);
  }
`
