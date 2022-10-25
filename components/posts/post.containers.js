import styled from 'styled-components';

const PostContainer = styled.article`
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1;

  background-color: ${(props) => props.theme.colors['BASE']};
`;

const PostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  max-width: 80rem;
`;

export { PostContainer, PostContentContainer };
