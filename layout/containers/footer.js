import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3rem 2rem;

  background-color: ${(props) => props.theme.colors.BASE};
  border-top: 1px solid ${(props) => props.theme.colors.BORDER};
`;

export default Footer;
