import React, { Component } from 'react';
import Logo from '../../styles/components/Logo';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '../../store/ducks/auth';

import { Container, SignForm } from './styles';

// import { Container } from './styles';

class SignIn extends Component {
  static proTypes = {
    signInRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { signInRequest } = this.props;

    signInRequest(email, password);
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <SignForm onSubmit={this.handleSubmit}>
          <Logo size="default" />
          <input
            type="email"
            name="email"
            onChange={this.handleInputChange}
            value={email}
            placeholder="Seu e-mail"
          />
          <input
            type="password"
            name="password"
            onChange={this.handleInputChange}
            value={password}
            placeholder="Senha secreta"
          />
          <button type="submit">Entrar</button>
        </SignForm>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);
export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
