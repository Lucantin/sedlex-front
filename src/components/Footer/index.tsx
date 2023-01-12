import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import * as S from './styles'

export const Footer = () => {
  return (
    <S.Container>
      <S.General>
        <S.Title> Sobre a Sedlex</S.Title>
        <S.AboutMe>
          A Sedlex é uma empresa que presta serviço na area de manutenção e
          eletrica na grande São Paulo. Prezando qualidade no serviço e no bom
          atendimento.
        </S.AboutMe>
      </S.General>
      <S.General>
        <S.CopyRight>Copyright © 2022 Sedlex.</S.CopyRight>
      </S.General>

      <S.General>
        <S.Title>Contatos</S.Title>
        <S.SubTitle>
          <S.IconF href="http://www.facebook.com" target="_blank">
            <FaFacebookF />
          </S.IconF>
          <S.IconI href="https://www.instagram.com/" target="_blank">
            <FaInstagram />
          </S.IconI>
          <S.IconW href="https://www.whatsapp.com/?lang=pt_br" target="_blank">
            <FaWhatsapp />
          </S.IconW>
        </S.SubTitle>
        <S.Telephone>Telefone (11)987878788</S.Telephone>
      </S.General>
    </S.Container>
  )
}
