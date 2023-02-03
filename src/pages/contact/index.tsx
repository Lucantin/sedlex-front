import { useState } from "react";
import emailjs from "@emailjs/browser";
import * as S from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          toast.success("E-mail enviado");
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          toast.error("Algo deu errado!");
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
          <ToastContainer />
        </S.SendMail>
      </S.WrapperMail>
      <S.WrapperMap>
        <S.Title>Sedlex Manutenções</S.Title>
        <S.InfoMap>Rua casa da manutenção 2500</S.InfoMap>
        <S.Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.2447577704224!2d-46.76606658442418!3d-23.52369766608889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceffa0e6c7b5a9%3A0xfb54dbcb83f84929!2sHavan%20Marginal%20Tiet%C3%AA%20(Osasco)!5e0!3m2!1spt-BR!2sbr!4v1673719682902!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
        />
      </S.WrapperMap>
    </S.Container>
  );
};
