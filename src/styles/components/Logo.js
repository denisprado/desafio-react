import styled, { css } from 'styled-components';
import logo from '../../assets/images/logo-white.png';

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
  background-image: url(${logo});
  ${props => sizes[props.sizes || 'default']}
`;

export default Logo;
