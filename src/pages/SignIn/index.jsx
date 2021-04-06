import React from 'react';
import { Wrapper, ContainerTexto, ContainerForm, BoxButtons, BoxInput } from './styles';
import Input from '../../components/Input';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <Wrapper>
      <ContainerTexto>
        <p>facebook</p>
        <span>O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</span>
      </ContainerTexto>

      <ContainerForm>
        <BoxInput>
          <Input 
            name="user"
            placeholder="Email ou telefone"
          />
          <Input 
            name="password"
            placeholder="Senha"
          />
        </BoxInput>
        <BoxButtons>
          <button>
            <Link to="/welcome">Entrar</Link>
          </button>
          <p>Esqueceu a senha ?</p>
          <hr color="#ccc"/>
          <div>
            <span>Criar nova conta</span>
          </div>
        </BoxButtons>
      </ContainerForm>
    </Wrapper>
  )
}

export default SignIn;