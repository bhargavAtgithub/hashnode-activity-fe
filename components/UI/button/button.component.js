import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyles from './button.styles';

import Text from '../text/text.component';
import { IconContainer } from './button.styles';
import Loader from '../loader';

const Button = ({
  title,
  onClick,
  icon,
  varient,
  isLoading = false,
  ...props
}) => {
  return (
    <ButtonStyles
      onClick={onClick}
      isIcon={title == '' && icon}
      varient={varient}
      {...props}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {icon ? <IconContainer size={'rg'}>{icon}</IconContainer> : null}
          {title !== '' ? (
            <Text
              size={['rg']}
              weight="rg"
              color={varient === 1 ? 'BUTTON_TEXT' : 'BUTTON'}
              cursor={'pointer'}
            >
              {title}
            </Text>
          ) : null}
        </>
      )}
    </ButtonStyles>
  );
};

Button.defaultProps = {
  title: '',
  onClick: () => {},
  varient: 1,
  isLoading: false,
};

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  onClick: PropTypes.func,
  varient: PropTypes.number,
  isLoading: PropTypes.bool,
};

export default Button;
