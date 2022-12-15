import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2em;
  background-color: #1184e0;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
`;

export const WrapperImage = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Imagem = styled.img`
  width: 150px;
`;

export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 0rem auto;
`;

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  align-items: center;
  display: flex;
  gap: 30px;
`;

export const DirectLink = styled.p`
  color: white;
  font-size: 20px;
  width: 120px;
  text-align: center;
  font-weight: bold;

  &::after {
    content: "";
    display: block;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    height: 2px;
    width: 0px;
    background-color: white;
  }

  &:hover::after {
    width: 100%;
    transition: all 0.4s;
  }
`;
