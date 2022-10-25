import styled from 'styled-components';

export const CommentsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const CommentHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  border: 1px solid ${(props) => props.theme.colors['BORDER']};
  border-radius: 1rem;

  padding: 2rem;
`;

export const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 2rem;

  border: 1px solid ${(props) => props.theme.colors['BORDER']};
  border-radius: 1rem;
`;

export const CommentLoader = styled.div`
  width: calc(100% - 8rem);
  height: 2rem;

  border-radius: 0.5rem;

  background-color: ${(props) => props.theme.colors['ICON']};
`;

export const CommentDateLoader = styled(CommentLoader)`
  width: 8rem;
`;
