import styled from 'styled-components';

const PostContainer = styled.article`
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors['BASE']};
`;

export { PostContainer };
