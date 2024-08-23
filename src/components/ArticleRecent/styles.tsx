import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    border-radius: 3px 0px 0px 3px;
  }
  @media only screen and (min-width: 1024px) {
    padding: unset;
  }
`;

export const HeroImage = styled.img`
  aspect-ratio: 16/9;
  border-radius: 3px 3px 0px 0px;
  @media only screen and (min-width: 768px) {
    border-radius: 3px 0px 0px 3px;
    max-height: 253px;
  }
  @media only screen and (min-width: 1440px) {
    border-radius: unset;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  background-color: #212122;
  border-radius: 0px 0px 3px 3px;
  @media only screen and (min-width: 768px) {
    border-radius: 0 3px 3px 0;
  }
  @media only screen and (min-width: 1440px) {
    border-radius: 0px 3px 3px 0px;
  }
`;

export const Title = styled.div`
  color: #fff;
  font-size: var(--primary-text-mobile);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media only screen and (min-width: 768px) {
    font-size: var(--primary-text-desktop);
  }
`;

export const Subtitle = styled.div`
  color: rgb(136, 136, 136);
  font-size: var(--secondary-text-mobile);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2rem;
  @media only screen and (min-width: 768px) {
    font-size: var(--secondary-text-desktop);
  }
`;

export const AuthorByLine = styled.div`
  color: rgb(136, 136, 136);
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: auto;
`;

export const AuthorName = styled.div`
  display: flex;
`;

export const Date = styled.div`
  display: flex;
`;

export const LinkWrapper = styled.a``;
