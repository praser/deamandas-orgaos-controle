import React from 'react';
import {
  Topbar,
  MainContent,
  TopControls,
  InlineGroup,
  Content1,
  Content2,
} from './Dashboard.styled';
import DashBoardProps from './DashBoardProps';

const Dashboard = ({
  topbar,
  filters,
  buttons,
  highlights,
  content1,
  content2,
  content3,
}: DashBoardProps): JSX.Element => {
  return (
    <>
      <Topbar>{topbar}</Topbar>
      <MainContent>
        <TopControls>
          <InlineGroup>{filters}</InlineGroup>
          <InlineGroup>{buttons}</InlineGroup>
        </TopControls>
        <InlineGroup>{highlights}</InlineGroup>
        <InlineGroup>
          <Content1>{content1}</Content1>
          <Content2>{content2}</Content2>
        </InlineGroup>
        {content3}
      </MainContent>
    </>
  );
};

export default Dashboard;
