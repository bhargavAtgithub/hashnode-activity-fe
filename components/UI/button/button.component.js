import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyles from './button.styles';

import Text from '../text/text.component';
import { IconContainer } from './button.styles';

const Button = ({ title, onClick, icon }) => {
  return (
    <ButtonStyles onClick={onClick} isIcon={title == '' && icon}>
      {icon ? <IconContainer size={'rg'}>{icon}</IconContainer> : null}
      {title !== '' ? (
        <Text size={['rg']} weight="rg" color="BUTTON_TEXT" cursor={'pointer'}>
          {title}
        </Text>
      ) : null}
    </ButtonStyles>
  );
};

Button.defaultProps = {
  title: '',
  onClick: () => {},
};

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  onClick: PropTypes.func,
};

export default Button;
