import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
}`;

const Loader = styled.div`
  border: 2px solid ${(props) => props.theme.colors['ACTIVITY_BORDER']};
  border-radius: 50%;
  border-top-color: ${(props) => props.theme.colors['BUTTON_TEXT']};
  opacity: 1;
  position: relative;
  margin: auto;
  width: 2rem;
  height: 2rem;
  transition: opacity 200ms;
  animation: ${rotate} 500ms linear;
  animation-iteration-count: infinite;
  margin: 0.5rem;
`;

export default Loader;
