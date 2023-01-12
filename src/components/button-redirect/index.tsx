import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'

export const ButtonR = () => {
  return (
    <S.Button>
      <Link to="/aboutus" style={{ textDecoration: 'none' }}></Link>
      <S.DirectLink>Saber mais</S.DirectLink>
    </S.Button>
  )
}
