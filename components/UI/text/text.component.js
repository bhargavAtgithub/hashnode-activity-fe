import React from 'react';
import PropTypes from 'prop-types';
import TextStylesContainer from './text.styles';
import { VARIENTS } from './text.properties';

const Text = (props) => (
  <TextStylesContainer {...props}>{props.children}</TextStylesContainer>
);

Text.defaultProps = {
  family: 'Poppins',
  weight: 'rg',
  size: ['rg'],
  width: 'auto',
  decoration: 'none',
  align: 'left',
  color: 'TEXT',
  cursor: 'auto',
};

Text.propTypes = {
  family: PropTypes.oneOf(Object.keys(VARIENTS.family)),
  weight: PropTypes.oneOf(Object.keys(VARIENTS.weight)),
  size: PropTypes.array,
  lineHeight: PropTypes.oneOf(Object.keys(VARIENTS.height)),
  width: PropTypes.string,
  decoration: PropTypes.oneOf(['_', '-', 'none']),
  align: PropTypes.oneOf([
    'left',
    'right',
    'center',
    'justify',
    'inherit',
    'initial',
  ]),
  letterSpacing: PropTypes.number,
  maxLines: PropTypes.number,
  transform: PropTypes.oneOf(['uppercase', 'lowercase', 'capitalize']),
  cursor: PropTypes.string,
};

export default Text;
