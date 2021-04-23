import styled from 'styled-components';

const CardHeader = styled.div`
  /* Layout */
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 52px;
  justify-content: space-between;
  margin-bottom: 0px;
  padding-bottom: 16px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 16px;

  /* Appearance */
  color: rgb(133, 135, 150);
  background-color: rgb(248, 249, 252);
  border-bottom-color: rgb(227, 230, 240);
  border-bottom-style: solid;
  border-bottom-width: 1px;

  /* Other */
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 4.6px;
  border-top-right-radius: 4.6px;
`;

export default CardHeader;
