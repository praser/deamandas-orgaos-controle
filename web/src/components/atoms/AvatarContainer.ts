import styled from 'styled-components';

const AvatarContainer = styled.div`
  /* layout */
  box-sizing: border-box;
  display: block;
  height: 32px;
  width: 32px;

  /* appearence */
  border-style: none;
  color: rgb(209, 211, 226);
  cursor: pointer;
  overflow: hidden;

  /* other */
  border-radius: 50%;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  -webkit-box-direction: normal;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export default AvatarContainer;
