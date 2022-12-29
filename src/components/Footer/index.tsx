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
          A Sedlex Manutenções é uma empresa de engenharia que atua na prestação
          de serviços de manutenções e construções em geral. Oferece alta
          qualidade técnica e confiabilidade.
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
