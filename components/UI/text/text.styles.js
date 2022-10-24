import styled from 'styled-components';
import { VARIENTS } from './text.properties';

export const styles = {
  decoration: ({ decoration }) => {
    if (decoration) {
      if (decoration === '_') {
        return 'underline';
      } else if (decoration === '-') {
        return 'line-through';
      }
    }
    return 'none';
  },
  maxHeight: ({ size, maxLines }) => {
    if (maxLines) {
      const lineHeight = VARIENTS.height[size];
      const maxHeight = parseFloat(lineHeight) * maxLines;
      return maxHeight + 'rem';
    }
    return 'initial';
  },
  overflow: ({ maxLines }) => {
    if (maxLines) {
      return 'hidden';
    }
    return 'initial';
  },
  textTransform: ({ transform }) => {
    if (transform) {
      return transform;
    } else {
      return 'none';
    }
  },
  textOverflow: ({ maxLines }) => {
    if (maxLines) {
      return 'ellipsis';
    }
    return 'initial';
  },
  ellipsis: ({ maxLines }) => {
    if (maxLines) {
      return '...';
    }
    return '';
  },
  weight: ({ weight }) => {
    if (weight) {
      return VARIENTS.weight[weight];
    }
    return VARIENTS.weight['rg'];
  },
  size: ({ size }) => {
    return VARIENTS.size[size[0]];
  },
  lgSize: ({ size }) => {
    return VARIENTS.size[size.length > 1 ? size[1] : size[0]];
  },
  height: ({ size }) => {
    return VARIENTS.height[size];
  },
  lgHeight: ({ size }) => {
    return VARIENTS.height[size.length > 1 ? size[1] : size[0]];
  },
  color: ({ theme, color }) => {
    return theme.colors[color];
  },
};

const TextStylesContainer = styled.div`
  display: inline-block;
  width: ${(props) => props.width};

  font-family: ${(props) => props.family};
  font-weight: ${styles.weight};

  font-size: ${styles.size}rem;
  line-height: ${styles.height}rem;

  align-items: baseline;

  color: ${styles.color};
  text-decoration: ${styles.decoration};
  text-transform: ${styles.textTransform};
  text-align: ${(props) => props.align};
  overflow: ${styles.overflow};
  text-overflow: ${styles.textOverflow};
  max-height: ${styles.maxHeight};
  position: relative;
  word-break: break-word;

  cursor: ${(props) => props.cursor};

  transition: all 300ms linear;

  &::after {
    content: '${styles.ellipsis}';
    position: absolute;
    bottom: 0rem;
    right: 0.2rem;
  }

  ${(props) => props.theme.mediaQueries['lg']} {
    font-size: ${styles.lgSize}rem;
    line-height: ${styles.lgHeight}rem;
  }
`;

export default TextStylesContainer;
