import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 800px;
  height: 400px;
  overflow: hidden;
`;

export const Slides = styled.div`
  width: 400%;
  height: 400px;
  display: flex;
`;

export const RadioButton = styled.input`
  display: none;
`;

export const SlideImage = styled.div`
  width: 25%;
  position: relative;
`;

export const SlideOtherImage = styled.div`
  width: 25%;
  position: relative;
`;

export const Image = styled.img`
  width: 800px;
`;

export const Navigation = styled.div`
  border: 2px solid #20a6ff;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s;
  position: absolute;
  width: 800px;
  margin-top: 360px;
  display: flex;
  justify-content: center;
`;

export const AutoBtn1 = styled.div``;

export const AutoBtn2 = styled.div``;

export const AutoBtn3 = styled.div``;

export const AutoBtn4 = styled.div``;

export const ManualNavigation = styled.div`
  position: absolute;
  width: 800px;
  margin-top: -40px;
  display: flex;
  justify-content: center;
`;

export const Label = styled.label`
  border: 2px solid #fff;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s;

  &:not(:last-child) {
    margin-right: 40px;
  }
`;
