import styled from 'styled-components';

const ActivitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  min-height: 20rem;
  width: 100%;
  max-width: 80rem;
  margin: 2rem;
  padding: 2rem 3rem;

  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.colors.BORDER};
  background-color: ${(props) => props.theme.colors['BASE']};
`;

const ActivityContainer = styled.div`
  width: 100%;
  display: flex;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 6rem;
  padding: 1rem 0rem;
`;

const AllActivitiesContainer = styled.div`\
    display: flex;
    flex-direction: column;
    
    flex: 1 1 0%;
`;

const ActivityDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  border-bottom: 1px solid ${(props) => props.theme.colors['BORDER']};

  flex: 1 1 0%;

  padding: 1rem;
`;

const ActivityIconContainer = styled.div`
  position: relative;
  width: 1.2rem;
  height: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  path {
    fill: ${(props) => props.theme.colors['ACTIVITY']};
    stroke: ${(props) => props.theme.colors['ACTIVITY']};
  }
`;

const ActivityTypeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ShowMoreContainer = styled.div`
  width: 100%;
  padding: 0.5rem 0rem;

  display: flex;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.colors['BORDER']};
`;

const ShowMoreIconContainer = styled(ActivityIconContainer)`
  width: 1.8rem;
  height: 1.8rem;
  path {
    fill: ${(props) => props.theme.colors['BUTTON']};
    stroke: ${(props) => props.theme.colors['BUTTON']};
  }
`;

const ActivityLoaderHeader = styled.div`
  width: 6rem;
  height: 2rem;

  border-radius: 0.5rem;

  background-color: ${(props) => props.theme.colors['ICON']};
`;

const ActivityLoaderLine1 = styled(ActivityLoaderHeader)`
  width: 100%;
`;

const ActivityLoaderLine2 = styled(ActivityLoaderHeader)`
  width: calc(100% - 6rem);
`;

export {
  ActivitiesContainer,
  ActivityContainer,
  DateContainer,
  AllActivitiesContainer,
  ActivityDetailsContainer,
  ActivityIconContainer,
  ActivityTypeContainer,
  ShowMoreContainer,
  ShowMoreIconContainer,
  ActivityLoaderHeader,
  ActivityLoaderLine1,
  ActivityLoaderLine2,
};
