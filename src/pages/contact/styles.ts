import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapperMail = styled.div`
  width: 100%;
`;

export const Title = styled.p`
  font-size: 25px;
  margin: 15px;
`;

export const SendMail = styled.form``;

export const InputMail = styled.input`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.55);
  margin: 15px;
  padding: 1rem;
  border-radius: 5px;
  width: 30%;

  ::placeholder,
  ::-webkit-input-placeholder {
    opacity: 0.5;
  }

  :focus {
    border: 1px solid #1184e0;
    transition: 0.9s;

    ::placeholder,
    ::-webkit-input-placeholder {
      opacity: 0;
    }
  }
`;

export const InputMailText = styled.textarea`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.55);
  margin: 15px;
  padding: 1rem;
  border-radius: 5px;
  width: 30%;
  height: 20vh;

  ::placeholder,
  ::-webkit-input-placeholder {
    opacity: 0.5;
  }

  :focus {
    border: 1px solid #1184e0;
    transition: 0.9s;

    ::placeholder,
    ::-webkit-input-placeholder {
      opacity: 0;
    }
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 15px;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover,
  &:focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: rgba(17, 132, 224, 0.3);
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }
`;
