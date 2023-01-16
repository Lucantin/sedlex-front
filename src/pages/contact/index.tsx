import * as S from './styles'

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
      <S.Lado>
        <S.Title>Sedlex Manutenções</S.Title>
        <S.InfoMap>Rua casa da manutenção 2500</S.InfoMap>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.2447577704224!2d-46.76606658442418!3d-23.52369766608889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceffa0e6c7b5a9%3A0xfb54dbcb83f84929!2sHavan%20Marginal%20Tiet%C3%AA%20(Osasco)!5e0!3m2!1spt-BR!2sbr!4v1673719682902!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
        ></iframe>
      </S.Lado>
    </S.Container>
  )
}
