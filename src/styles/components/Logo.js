import styled, { css } from 'styled-components';
import logo from '../../assets/images/logo@3x.png';

const sizes = {
  small: css`
    height: 32px;
    width: 32px;
  `,
  default: css`
    height: 72px;
    width: 72px;
  `,
};

const Logo = styled.div`
  margin: 15px auto;
  background-size: contain;
  background-image: url(${logo});
  ${props => sizes[props.sizes || 'default']}
`;

export default Logo;
