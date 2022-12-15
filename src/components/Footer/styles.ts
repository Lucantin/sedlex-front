import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
  background-color: #1184E0;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

export const Contact = styled.ul`
  display: flex;
  justify-content: center;
color: #FFF;
align-content: space-around;
font-size :25px;
padding: 0 ;
`;


export const A = styled.a`
text-decoration: none ;
color: #FFF;
opacity:0.5 ;
`;

// export const Img = styled.li`
//   display:flex ;
//   align-items: center;
//   font-size :30px;
  
// `;
// usar essa const quando colocar o icon (acho que as coisas de dentro nao influenciam mas olhar mesmo assim)



export const RedeSocial = styled.li`
    font-size :30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    text-decoration: none ;
`;

export const TitleSobre = styled.h1`
/* font-size :20px;
    color: #FFF;
    margin-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    opacity:0.5 ; */
`;

export const SobreMim = styled.h2`
/* font-size :12px;
display: flex; */

`;


export const CopyRight = styled.p`
color: #FFF;
opacity:0.3 ;
`;

export const Sobre = styled.div`
    color: #FFF;
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;