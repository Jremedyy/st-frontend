import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: var(--background-color-primary);
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const HeroImage = styled.img`
  aspect-ratio: 16/9;
  width: 100%;
  height: 100%;
  border-radius: 3px;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
  color: #fff;
  font-size: var(--title-mobile);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
  @media only screen and (min-width: 768px) {
    -webkit-line-clamp: 2;
    height: 100px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: var(--title-desktop);
  }
`;
