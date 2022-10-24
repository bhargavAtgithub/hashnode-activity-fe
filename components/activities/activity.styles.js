import styled from 'styled-components';

const Divider = styled.div`
  display: flex;
  flex: 1 1 0%;

  width: 1px;

  border: 1px dashed ${(props) => props.theme.colors['ACTIVITY_BORDER']};
`;

export { Divider };
