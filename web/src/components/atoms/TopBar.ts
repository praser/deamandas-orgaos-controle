import styled from 'styled-components';

const TopBar = styled.div`
  /* Layout */
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 70px;
  justify-content: flex-start;
  margin-bottom: 24px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  position: relative;
  width: 100%;

  /* Appearance */
  color: rgb(133, 135, 150);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(58, 59, 69, 0.15) 0px 2.4px 28px 0px;
`;

export default TopBar;
