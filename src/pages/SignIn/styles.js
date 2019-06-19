import styled from 'styled-components';
import background from '../../assets/images/fundo.jpg';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  background: gray;
  background-image: url(${background});
  background-image: linear-gradient(transparent, black), url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignForm = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  input {
    font-size: 15px;
    background-color: #fff !important;
    border-radius: 9px;
    padding: 15px 18px;
    margin: 5px;
  }

  button {
    border-radius: 9px;
    padding: 15px 18px;
    margin: 15px 3px;
    background-color: #e5293e;
    color: white;
    font-size: 15px;
    font-weight: bold;
  }
`;
