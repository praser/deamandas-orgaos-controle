import styled from 'styled-components';

interface Props {
  src: string;
  alt: string;
}

const AvatarImage = styled.img<Props>`
  width: 100%;
  max-width: 300px;
  height: auto;
`;

export default AvatarImage;
