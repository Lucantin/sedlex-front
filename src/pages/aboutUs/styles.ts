import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerInformation = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 5%;
`;

export const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10%;
`;

export const WrapperInformation = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(136, 134, 135, 0.4);
  padding: 30px;
  margin-top: 5%;
`;

export const Image = styled.img`
  width: 100%;
  display: flex;
`;

export const Content = styled.p``;
