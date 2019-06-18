import styled from 'styled-components';
import background from '../../assets/images/background-admin.png';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  background: gray;
  background-image: url(${background});
  background-image: linear-gradient(transparent, black), url(${background});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignForm = styled.form`
  background: transparent;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
