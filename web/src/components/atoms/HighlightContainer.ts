import styled from 'styled-components';

const HighlightContainer = styled.div`
  /* Layout */
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 102px;
  padding: 20px 28px;
  position: relative;
  width: 100%;

  /* Appearance */
  color: rgb(133, 135, 150);
  background-clip: border-box;
  background-color: rgb(255, 255, 255);
  border-color: rgb(227, 230, 240);
  border-style: solid;
  border-width: 1px;
  border-left-color: ${({ color }) => color || 'rgb(78, 115, 223)'};
  border-left-style: solid;
  border-left-width: 4px;
  box-shadow: rgba(58, 59, 69, 0.15) 0px 2.4px 28px 0px;

  /* Other */
  border-radius: 5.6px;
  overflow-wrap: break-word;
`;

export default HighlightContainer;
