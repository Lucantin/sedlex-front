import { useState } from "react";
import emailjs from "@emailjs/browser";
import * as S from "./styles";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: { preventDefault: () => void }) {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_d56jjho",
        "template_tqptyuo",
        templateParams,
        "4wHZi7KaoGvAyI-HY"
      )
      .then(
        (res) => {
          console.log("Email enviado", res.status, res.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("Erro: ", err);
        }
      );
  }

  return (
    <S.Container>
      <S.WrapperMail>
        <S.Title>Contato</S.Title>
        <S.SendMail onSubmit={sendEmail}>
          <S.InputMail
            placeholder="Digite seu nome..."
            onChange={(e) => setName(e.target.value)}
            required
            value={name}
          />
          <S.InputMail
            placeholder="Digite seu e-mail..."
            onChange={(e) => setEmail(e.target.value)}
            required
            value={email}
          />
          <S.InputMailText
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            required
            value={message}
          />
          <S.SubmitButton>Enviar</S.SubmitButton>
        </S.SendMail>
      </S.WrapperMail>
    </S.Container>
  );
};
