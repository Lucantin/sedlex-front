import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

export const Navbar = () => {
  return (
    <S.Container>
      <S.WrapperImage>
        <S.Imagem src={require("../../images/LogoBranco.png")} alt="Logo" />
      </S.WrapperImage>
      <S.WrapperInfo>
        <S.List>
          <S.Item>
            <Link to="/" style={{ textDecoration: "none" }}>
              <S.DirectLink>Home</S.DirectLink>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <S.DirectLink>Sobre Nós</S.DirectLink>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <S.DirectLink>Contato</S.DirectLink>
            </Link>
          </S.Item>
        </S.List>
      </S.WrapperInfo>
    </S.Container>
  );
};
