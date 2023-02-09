import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import * as S from './styles'

const Footer = () => {
  return (
    <S.Container>
      <S.General>
        <S.Title> Sobre a Sedlex</S.Title>
        <S.AboutMe>
          A Sedlex é uma empresa que presta serviço na área de manutenção e
          elétrica na grande São Paulo. Prezando qualidade do serviço e no bom
          atendimento.
        </S.AboutMe>
      </S.General>
      <S.General>
        <S.CopyRight>Copyright © 2022 Sedlex.</S.CopyRight>
      </S.General>

      <S.General>
        <S.Title>Contatos</S.Title>
        <S.SubTitle>
          <S.IconF
            href="https://ne-np.facebook.com/people/sedlex_manutencoes/100063797390672/"
            target="_blank"
          >
            <FaFacebookF />
          </S.IconF>
          <S.IconI
            href="https://www.instagram.com/sedlex_manutencoes/"
            target="_blank"
          >
            <FaInstagram />
          </S.IconI>
          <S.IconW
            href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FTHHX7ITEOM6DI1&e=AT0ca2Bg93G1XzHW8IGFvBf2KmRPe85QGBmttPoqaLAFS3XZR9T2bCZ3a5aNxZmj5p5WWQ8sZWEjZEf8cXUxsDI8C5CTn6X1l43bwvlebWGmrB12&s=1"
            target="_blank"
          >
            <FaWhatsapp />
          </S.IconW>
        </S.SubTitle>
        <S.Telephone>Telefone (11) 95780-42127</S.Telephone>
      </S.General>
    </S.Container>
  )
}

export default Footer
