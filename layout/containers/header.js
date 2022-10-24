import styled from 'styled-components';

const Header = styled.header`
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 2rem;

  background-color: ${(props) => props.theme.colors.BASE};
  border: 1px solid ${(props) => props.theme.colors.BORDER};
`;

export default Header;
