import * as S from "./styles";

export const Contact = () => {
  return (
    <S.Container>
      <S.WrapperMail>
        <S.Title>Contato</S.Title>
        <S.SendMail>
          <S.InputMail placeholder="Digite seu nome..." />
        </S.SendMail>
        <S.SendMail>
          <S.InputMail placeholder="Digite seu e-mail..." />
        </S.SendMail>
        <S.SendMail>
          <S.InputMail placeholder="Assunto..." />
        </S.SendMail>
        <S.SendMail>
          <S.InputMailText placeholder="Digite sua mensagem..." />
        </S.SendMail>
        <S.SubmitButton>Enviar</S.SubmitButton>
      </S.WrapperMail>
    </S.Container>
  );
};
