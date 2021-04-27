import styled from 'styled-components';

const CardContainer = styled.div`
  /* Layout */
  display: flex;
  flex-direction: column;
  min-height: 100px;
  margin-bottom: 24px;
  width: 100%;
  position: relative;

  /* Text */
  font-family: Nunito, -apple-system, system-ui, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  text-size-adjust: 100%;

  /* Appearance */
  color: rgb(133, 135, 150);
  background-clip: border-box;
  background-color: rgb(255, 255, 255);
  border-color: rgb(227, 230, 240);
  border-style: solid;
  border-width: 1px;
  box-shadow: rgba(58, 59, 69, 0.15) 0px 2.4px 28px 0px;

  /* Other */
  border-radius: 5.6px;
`;

export default CardContainer;
