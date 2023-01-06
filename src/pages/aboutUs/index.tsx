import React from "react";
import Carousel from "nuka-carousel/lib/carousel";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import * as S from "./styles";

export const AboutUs = () => {
  return (
    <S.Container>
      <S.WrapperImage>
        <S.ContainerImage>
          <Carousel
            wrapAround={true}
            autoplay={true}
            pauseOnHover={true}
            renderCenterLeftControls={({ previousSlide }) => (
              <S.ButtonTest onClick={previousSlide}>
                <BsArrowLeft />
              </S.ButtonTest>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <S.ButtonTest onClick={nextSlide}>
                <BsArrowRight />
              </S.ButtonTest>
            )}
          >
            <S.Img src={require("../../images/frankUsavel.png")} />
            <S.Img src={require("../../images/usaveltalvz.png")} />
            <S.Img src={require("../../images/caixaDeForca2.png")} />
            <S.Img src={require("../../images/bombas.png")} />
          </Carousel>
        </S.ContainerImage>
      </S.WrapperImage>
      <S.ContainerInformation>
        <S.WrapperInformation>
          <S.Title>Sobre nós</S.Title>
          <S.Content>
            Eu tô passando na quebrada em cima da Ducati A loira na garupa muito
            linda, muito gata Já acostumada a meter fuga na polícia Memo de
            robozão, passo no canto da lombada A NASA tá sabendo quem é esses
            cara Que pilota muito, de cabelo verde E já tá querendo assinar
            contrato É os vilão descontrolado que pilota os foguete Lá na
            marginal tipo Need for Speed Quem é esses maluco passando igual uma
            bala? Passou pela CD, passou pela viatura Nem o radar móvel decifrou
            a nossa placa
          </S.Content>
        </S.WrapperInformation>
        <S.WrapperInformation>
          <S.Title>História</S.Title>
          <S.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            lacinia tincidunt ligula at tincidunt. Ut tincidunt ipsum leo, at
            vestibulum quam porta non. Donec vitae justo imperdiet, posuere
            massa at, dignissim eros. In egestas vulputate tempus. Vestibulum in
            mi non justo tristique ultricies. Sed eget egestas justo. Nullam
            malesuada ipsum metus, ut sodales purus rhoncus vel. Aliquam sit
            amet justo sit amet ipsum tincidunt iaculis. Donec eget justo
            vulputate, faucibus dui at, consectetur libero. Sed consequat
            feugiat mi, at luctus felis elementum sed. Sed mattis iaculis
            hendrerit. Pellentesque ut felis vestibulum tortor luctus dictum at
            ut lectus. Quisque et enim lacinia, dictum ligula vitae, ultrices
            nibh. Maecenas suscipit odio sapien, non semper metus semper eu. Sed
            facilisis imperdiet tempus. Phasellus faucibus enim at viverra
            luctus. Aenean non felis eu lectus elementum accumsan. Integer
            cursus mollis nunc, vel sagittis justo placerat vitae. Pellentesque
            eu mauris ullamcorper, vestibulum nibh eget, pulvinar leo. Nullam
            turpis arcu, blandit sit amet egestas sed, pulvinar non risus.
          </S.Content>
        </S.WrapperInformation>
      </S.ContainerInformation>
    </S.Container>
  );
};
