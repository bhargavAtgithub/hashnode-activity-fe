import styled from 'styled-components';

const Main = styled.main`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.BACKGROUND};

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export default Main;
