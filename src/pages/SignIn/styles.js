import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1030px;
  min-height: 500px;
  height: 550px;
  padding: 15px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 1208px) {
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  }

`;

//@media(max-width: 800px) { }
export const ContainerTexto = styled.div`
  width: 49%;
  height: 90%;
  display: flex;
  padding: 5px 25px;
  justify-content: center;
  flex-direction: column;

  @media(max-width: 1208px) {
    height: 350px;
    width: 75%;
  }

  @media(max-width: 692px) {
    height: 300px;
    width: 90%;
  }

  @media(max-width: 520px) {
    width: 95%;
    height: 280px;
  }

  p {
    color: #1878F2;
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  span {
    color: #333;
    font-size: 27px;
    margin-top: 5px;
    font-weight: 500;
  }

  @media(max-width: 428px) {
    width: 95%;
    height: 280px;

    p {
      font-size: 38px;
    }

    span {
      font-size: 22px;
    }
  }
`;

export const ContainerForm = styled.div`
  width: 45%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 25px 15px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 15px -5px #555;

  @media(max-width: 1208px) {
    height: 450px;
    margin-top: 15px;
    width: 65%;
  }

  @media(max-width: 692px) {
    width: 80%;
  }

  @media(max-width: 520px) {
    width: 90%;
  }

  @media(max-width: 428px) {
    width: 95%;
    height: 400px;
  }
`;

export const BoxInput = styled.div`
  width: 100%;
  height: 40%;
`;

export const BoxButtons = styled.div`
  width: 100%;
  height: 58%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  button {
    width: 100%;
    height: 25%;
    background: #1878F2;
    
    border-color: transparent;
    border-radius: 10px;
    transition: all 0.5s ease-in-out;

    a {
      text-decoration: none;
      color: #fff;
      font-weight: bold;
      font-size: 22px;
    }

    &:hover {
      background:#166FE5;
    }
  }

  p {
      color: #1878F2;
      font-weight: 600;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }

  hr {
    width: 100%;
  }

  div {
    width: 55%;
    height: 27%;
    border-radius: 8px;
    background: #42B72A;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease-in;

    @media(max-width: 428px) {
      width: 75%;
    }

    &:hover {
     background : #36A420;
     cursor: pointer;
    }
  }

  span {
    color: #fff;
    font-weight: 600;
    font-size: 18px;
  }

`;
