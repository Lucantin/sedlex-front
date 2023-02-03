import React from "react";
import * as S from "./styles";
import { ButtonR } from "../../components/button-redirect";

export const Home = () => {
  return (
    <S.Container>
      <S.WrapperTopInfo>
        <S.GroupImage>
          <S.Img src={require("../../images/fotoMuitoUsavel.png")} alt="Logo" />
        </S.GroupImage>
        <S.Group>
          <S.Title> Conheça mais sobre nós</S.Title>
          <S.Text>
            A Sedlex é uma empresa de manutenção e elétrica, possuindo grande
            conhecimento na área e desenvolvendo soluções em função das muitas
            necessidades apresentadas pelo mercado. Sempre prezando pelo bom
            atendimento com segurança e responsabilidade nos serviços.
          </S.Text>
          <ButtonR />
        </S.Group>
      </S.WrapperTopInfo>
      <S.WrapperBottomInfo>
        <S.Group>
          <S.Title> Conheça nossos serviços</S.Title>
          <S.Text>
            A Sedlex é uma empresa de manutenção e elétrica, possuindo grande
            conhecimento na área e desenvolvendo soluções em função das muitas
            necessidades apresentadas pelo mercado. Sempre prezando pelo bom
            atendimento com segurança e responsabilidade nos serviços.
          </S.Text>
        </S.Group>

        <S.GroupImage>
          <S.Img src={require("../../images/foto100usavel.png")} alt="Logo" />
        </S.GroupImage>
      </S.WrapperBottomInfo>
    </S.Container>
  );
};
