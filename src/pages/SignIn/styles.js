import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerTexto = styled.div`
  width: 49%;
  height: 90%;
  display: flex;
  padding: 5px 25px;
  justify-content: center;
  flex-direction: column;

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
    width: 45%;
    height: 27%;
    border-radius: 8px;
    background: #42B72A;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease-in;

    &:hover {
     background : #36A420;
     cursor: pointer;
    }
  }

  span {
    color: #fff;
    font-weight: 600;
    font-size: 20px;

    &:hover {
      
    }
  }

`;
