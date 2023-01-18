import styled from 'styled-components'

export const Container = styled.div`
  flex-direction: row;
`

export const Start = styled.div`
  display: flex;
  justify-content: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#1184e0, #ffffff);
`

export const Camera = styled.a`
  display: flex;
  text-decoration: none;
  font-size: 2.5rem;
`

export const GroupImage = styled.div`
  display: flex;
  height: 31.25rem;
  width: 35.25rem;
  margin: 0rem auto;
  border: outset #1184e0 0.7rem;
`

export const GroupImageE = styled.div`
  display: flex;
  height: 31.25rem;
  width: 31.25rem;
  margin: 0rem auto;
  border: outset #1184e0 0.7rem;
`

export const ImgStart = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
`

export const Group = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  padding: 1rem;
  width: 55vh;
  align-items: center;
  margin: 0rem auto;
`

export const TitleStart = styled.h1`
  display: flex;
  font-size: 1.5rem;
  padding: 1rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.55);
  margin-top: 4.7rem;
  border-radius: 1rem;

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`

export const TextStart = styled.p`
  display: flex;
  margin-top: 1rem;
  text-align: center;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.55);
  line-height: 1.3em;
  margin: 1.3rem;
  padding: 1.3rem;
  max-width: 100%;
  min-width: 10%;

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`

export const Button = styled.a`
  width: 9rem;
  margin-top: 1em;
  text-align: center;
  height: 1.6rem;
  border-radius: 2rem;
  background-color: #40a9eb;
  align-items: center;
  padding: 0.3rem;
`

export const End = styled.div`
  display: flex;
  justify-content: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Partner = styled.div`
  display: grid;
  justify-content: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 31.25rem;
`

export const GroupPartner = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  align-items: center;
  margin: 0rem auto;
`

export const TitlePartner = styled.h1`
  display: flex;
  font-size: 3rem;
  padding: 1rem;
  text-align: center;
  color: #000000;
  margin-top: 4.7rem;
  border-radius: 1rem;
`

export const GroupCompanion = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  height: 12rem;
  width: 100%;
  margin: 0rem auto;
`

export const Companion = styled.img`
  display: flex;
  padding: 2rem auto;
`
