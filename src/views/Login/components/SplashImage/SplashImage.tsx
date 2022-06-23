import styled from 'styled-components';
import { FC } from 'react';

export interface SplashImageProps {
  maxDisplayWidth: number;
}

const Root = styled.div`
  display: flex;
  flex: 1;
`;

const Image = styled.div<SplashImageProps>`
  background-image: url(https://source.unsplash.com/random);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex: 1;

  @media (max-width: ${({ maxDisplayWidth }) => maxDisplayWidth}px) {
    display: none;
  }
`;

const SplashImage: FC<SplashImageProps> = ({ maxDisplayWidth }) => {
  return (
    <Root>
      <Image maxDisplayWidth={maxDisplayWidth} />
    </Root>
  );
};

export default SplashImage;
