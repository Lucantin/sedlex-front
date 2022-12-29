import React from "react";
import * as S from "./styles";

export const CarouselImage = () => {
  return (
    <S.Container>
      <S.Slides>
        <S.RadioButton type="radio" id="radio1" />
        <S.RadioButton type="radio" id="radio1" />
        <S.RadioButton type="radio" id="radio1" />
        <S.RadioButton type="radio" id="radio1" />
      </S.Slides>

      <S.SlideImage>
        <S.Image src={require("../../images/manutencao.jpeg")} alt="Logo" />
      </S.SlideImage>
      <S.SlideOtherImage>
        <S.Image src={require("../../images/loading.png")} alt="loading" />
      </S.SlideOtherImage>
      <S.SlideOtherImage>
        <S.Image
          src={require("../../images/messi.png.png")}
          alt="maiordahistoria"
        />
      </S.SlideOtherImage>
      <S.SlideOtherImage>
        <S.Image src={require("../../images/obra.jpeg")} alt="obra" />
      </S.SlideOtherImage>

      <S.Navigation>
        <S.AutoBtn1></S.AutoBtn1>
        <S.AutoBtn2></S.AutoBtn2>
        <S.AutoBtn3></S.AutoBtn3>
        <S.AutoBtn4></S.AutoBtn4>
      </S.Navigation>

      <S.ManualNavigation>
        <S.Label htmlFor="radio1"></S.Label>
        <S.Label htmlFor="radio2"></S.Label>
        <S.Label htmlFor="radio3"></S.Label>
        <S.Label htmlFor="radio4"></S.Label>
      </S.ManualNavigation>
    </S.Container>
  );
};
