import styled from 'styled-components';
import VARIENTS from './button.properties';

const styles = {
  background: ({ theme, varient, isIcon }) => {
    if (isIcon) return 'transparent';
    switch (varient) {
      case 1:
        return theme.colors['BUTTON'];
      case 2:
        return 'transparent';
    }
  },
  border: ({ theme, varient, isIcon }) => {
    if (isIcon) return 'transparent';
    switch (varient) {
      case 1:
        return 'transparent';
      case 2:
        return `1px solid ${theme.colors['BUTTON']}`;
    }
  },
  borderRadius: ({ varient, isIcon }) => {
    if (isIcon) return '50%';
    switch (varient) {
      case 1:
        return '10rem';
      case 2:
        return `1rem`;
    }
  },
};

const ButtonStyles = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;

  padding: ${(props) => (props.isIcon ? '0.5rem' : '0.5rem 2rem')};

  border-radius: ${styles.borderRadius};
  border: ${styles.border};

  cursor: pointer;

  overflow: hidden;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  outline: none;

  &:focus {
    outline: none;
  }

  transition: all 0.2s;
  background: ${styles.background};

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
  height: ({ size }) => {
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
