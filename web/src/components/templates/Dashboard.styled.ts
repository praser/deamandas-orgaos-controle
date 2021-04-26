import styled from 'styled-components';

export const Topbar = styled.div`
  width: 100%;
  height: 4.375rem;
  margin-bottom: 1.5rem;
`;

export const MainContent = styled.div`
  padding: 0 24px;
`;

export const TopControls = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

export const InlineGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  & > * {
    margin-right: 15px;
  }

  & > *:last-child {
    margin-right: 0;
  }
`;

export const Content1 = styled.div`
  width: calc(30% - 15px);
  height: 100%;
`;

export const Content2 = styled.div`
  width: calc(70% - 15px);
`;
