import React from 'react'
import * as S from './styles'
import { GiCctvCamera } from 'react-icons/gi'

export const Home = () => {
  return (
    <S.Container>
      <S.Start>
        {/* <S.Camera>
          <GiCctvCamera />
        </S.Camera> */}
        <S.GroupImage>
          <S.ImgStart src={require('../../images/loading.png')} alt="Logo" />
        </S.GroupImage>

        <S.Group>
          <S.TitleStart> Conheça mais sobre nós</S.TitleStart>
          <S.TextStart>
            Eu tô passando na quebrada em cima da Ducati A loira na garupa muito
            linda, muito gata Já acostumada a meter fuga na polícia Memo de
            robozão, passo no canto da lombada A NASA tá sabendo quem é esses
            cara Que pilota muito, de cabelo verde E já tá querendo assinar
            contrato É os vilão descontrolado que pilota os foguete Lá na
            marginal tipo Need for Speed Quem é esses maluco passando igual uma
            bala? Passou pela CD, passou pela viatura Nem o radar móvel decifrou
            a nossa placa
          </S.TextStart>
          <S.Button href="http://www.facebook.com" target="blank">
            Saiba Mais
          </S.Button>
        </S.Group>
      </S.Start>
      <S.End>
        <S.Group>
          <S.TitleStart> Conheça nossos serviços</S.TitleStart>
          <S.TextStart>
            "Eu tô passando na quebrada em cima da Ducati A loira na garupa
            muito linda, muito gata Já acostumada a meter fuga na polícia Memo
            de robozão, passo no canto da lombada A NASA tá sabendo quem é esses
            cara Que pilota muito, de cabelo verde E já tá querendo assinar
            contrato É os vilão descontrolado que pilota os foguete Lá na
            marginal tipo Need for Speed Quem é esses maluco passando igual uma
            bala? Passou pela CD, passou pela viatura Nem o radar móvel decifrou
            a nossa placa"
          </S.TextStart>
        </S.Group>

        <S.GroupImage>
          <S.ImgStart src={require('../../images/loading.png')} alt="Logo" />
        </S.GroupImage>
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
