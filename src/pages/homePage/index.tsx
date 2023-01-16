import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'
import { GiCctvCamera } from 'react-icons/gi'

export const Home = () => {
  return (
    <S.Container>
      <S.Start>
        {/* <S.Camera>
          <GiCctvCamera />
        </S.Camera> */}
        <S.GroupImage>
          <S.ImgStart
            src={require('../../images/fotoMuitoUsavel.png')}
            alt="Logo"
          />
        </S.GroupImage>
        <S.Group>
          <S.TitleStart> Conheça mais sobre nós</S.TitleStart>
          <S.TextStart>
            A Sedlex é uma empresa de manutenção e elétrica, possuindo grande
            conhecimento na área e desenvolvendo soluções em função das muitas
            necessidades apresentadas pelo mercado. Sempre prezando pelo bom
            atendimento com segurança e responsabilidade nos serviços.
          </S.TextStart>
          <S.Button>
            <Link to="/aboutus" style={{ textDecoration: 'none' }}>
              Saiba Mais
            </Link>
          </S.Button>
        </S.Group>
      </S.Start>
      <S.End>
        <S.Group>
          <S.TitleStart> Conheça nossos serviços</S.TitleStart>
          <S.TextStart>
            A Sedlex é uma empresa de manutenção e elétrica, possuindo grande
            conhecimento na área e desenvolvendo soluções em função das muitas
            necessidades apresentadas pelo mercado. Sempre prezando pelo bom
            atendimento com segurança e responsabilidade nos serviços.
          </S.TextStart>
        </S.Group>

        <S.GroupImageE>
          <S.ImgStart
            src={require('../../images/foto100usavel.png')}
            alt="Logo"
          />
        </S.GroupImageE>
      </S.End>

      <S.Partner>
        <S.GroupPartner>
          <S.TitlePartner> Conheça nossos parceiros!</S.TitlePartner>
        </S.GroupPartner>
        <S.GroupCompanion>
          <S.Companion src={require('../../images/loading.png')} alt="Logo" />
          <S.Companion src={require('../../images/loading.png')} alt="Logo" />
          <S.Companion src={require('../../images/loading.png')} alt="Logo" />
          <S.Companion src={require('../../images/loading.png')} alt="Logo" />
          <S.Companion src={require('../../images/loading.png')} alt="Logo" />
          <S.Companion src={require('../../images/loading.png')} alt="Logo" />
        </S.GroupCompanion>
      </S.Partner>
    </S.Container>
  )
}
