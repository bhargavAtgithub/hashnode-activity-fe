import styled from 'styled-components';

const Divider = styled.div`
  flex: 1 1 0%;
  display: flex;

  width: 1px;

  border: 1px dashed ${(props) => props.theme.colors['ACTIVITY_BORDER']};
`;

const ShowMoreButton = styled.button`
  width: 100%;

  display: flex;
  align-items: center;

  border: none;
  cursor: pointer;

  padding: 1.5rem 1rem;

  background-color: transparent;

  border-radius: 0.5rem;

  &:hover {
    background-color: ${(props) => props.theme.colors['ICON']};
  }
`;

export { Divider, ShowMoreButton };
