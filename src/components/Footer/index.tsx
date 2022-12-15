import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Container>
      <S.Sobre>
        <S.TitleSobre>
          {" "}
          <h1>Sobre a Sedlex</h1>
        </S.TitleSobre>
        <S.SobreMim>
          <h2>Blalalaalalalalalallaal</h2>
        </S.SobreMim>
      </S.Sobre>

      <S.Contact>
        {" "}
        <S.A>Contatos</S.A>
        <S.RedeSocial>
          <S.A href="http://www.facebook.com">
            {" "}
            <FaFacebookF />{" "}
          </S.A>
        </S.RedeSocial>
        <S.RedeSocial>
          <S.A href="https://www.instagram.com/">
            <FaInstagram />
          </S.A>
        </S.RedeSocial>
        <S.RedeSocial>
          <S.A href="https://www.whatsapp.com/?lang=pt_br">
            <FaWhatsapp />
          </S.A>
        </S.RedeSocial>
        <S.RedeSocial>
          <S.A>Telefone</S.A>
        </S.RedeSocial>
        {/* <S.Item> */}
        {/* <S.DirectLink>Sistemas para internet</S.DirectLink> */}
        {/* </S.Item> */}
      </S.Contact>
      <S.CopyRight>Copyright © 2022 Sedlex.</S.CopyRight>

      {/* não sei se oq ta no copy right está certo, tem que pesquisar */}
    </S.Container>
  );
};
