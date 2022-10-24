import styled from 'styled-components';
import VARIENTS from './button.properties';

const ButtonStyles = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;

  padding: ${(props) => (props.isIcon ? '0.5rem' : '0.5rem 2rem')};
  border-radius: ${(props) => (props.isIcon ? '50%' : '10rem')};
  border: none;

  cursor: pointer;

  overflow: hidden;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  outline: none;

  &:focus {
    outline: none;
  }

  transition: all 0.2s;
  background: ${(props) =>
    props.isIcon ? 'transparent' : props.theme.colors['BUTTON']};

  &:active {
    box-shadow: 0px 0.2rem 0.5rem rgb(0 0 0 / 2%);
  }

  &:hover {
    ${(props) =>
      props.isIcon
        ? `background : ${props.theme.colors['ICON']};`
        : 'box-shadow: 0px 0.2rem 0.5rem rgb(0 0 0 / 15%);'}
  }
`;

const IconStyles = {
  height: ({ theme, size }) => {
    const lineHeight = VARIENTS.height[size];
    return lineHeight + 'rem';
  },
};

export const IconContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: ${IconStyles.height};
  width: ${IconStyles.height};

  cursor: pointer;

  padding: 0.2rem;

  path {
    fill: ${(props) => props.theme.colors['TEXT']};
    stroke: ${(props) => props.theme.colors['TEXT']};
  }
`;

export default ButtonStyles;
