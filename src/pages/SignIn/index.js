import React from 'react';
import Logo from '../../styles/components/Logo';

import { Container, SignForm } from './styles';

const SignIn = () => (
  <Container>
    <SignForm onSubmit={() => {}}>
      <Logo size="default" />
      <input type="email" name="email" placeholder="Seu e-mail" />
      <input type="password" name="password" placeholder="Senha secreta" />
      <button type="submit">Entrar</button>
    </SignForm>
  </Container>
);

export default SignIn;
