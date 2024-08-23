import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 0;

  &:not(:last-child) {
    border-bottom: 1px solid var(--divider-color);
  }

  @media only screen and (min-width: 720px) {
    display: grid;
    grid-template-columns: minmax(0, 720px) minmax(50%, 1fr);
    padding: 16px 0;
  }
`;

export const ImageLink = styled.a`
  display: block;
`;

export const ImageWrapper = styled.picture`
  display: block;
  width: 100%;
  aspect-ratio: 16/9;
  margin-bottom: 8px;

  @media only screen and (min-width: 1024px) {
    margin-bottom: unset;
  }
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  object-fit: contain;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0px;

  @media only screen and (min-width: 720px) {
    padding-left: 16px;
  }
`;

export const Title = styled.h2`
  font-size: 19px;
  font-weight: 500;
  line-height: 1.25em;
  margin-bottom: 8px;

  @media only screen and (min-width: 767px) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media only screen and (min-width: 1240px) {
    margin-top: 0;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 10px;
  }
  @media only screen and (min-width: 1290px) {
    font-size: 25px;
    max-height: unset;
  }
`;

export const TitleLink = styled.a`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  &:link {
    color: var(--article-title-link-color);
  }

  &:visited {
    color: var(--article-title-visited-color);
  }

  &:hover {
    color: var(--article-title-hover-color);
  }

  &:active {
    color: var(--article-title-active-color);
  }
`;

export const Description = styled.div`
  font-size: 0.78rem;
  margin-bottom: 10px;
  line-height: 1.014rem;
  color: #888;
  font-weight: 400;

  @media only screen and (min-width: 1240px) {
    font-style: normal;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    height: 46px;
    overflow: hidden;
    margin-bottom: auto;
    flex-grow: 1;
    font-size: 0.8rem;
    line-height: 1.3;
  }

  @media only screen and (min-width: 1290px) {
    font-size: 1rem;
  }
`;

export const Metadata = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: 400;
  color: #888;

  margin-bottom: 8px;

  @media only screen and (min-width: 1024px) {
    font-size: 14px;
  }
`;

export const AuthorByline = styled.address`
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  color: #888;

  @media only screen and (min-width: 1024px) {
    font-size: 14px;
  }
`;

export const AuthorName = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #888;
  margin-right: 5px;

  @media only screen and (min-width: 1024px) {
    font-size: 14px;
  }
`;

export const PublishedAt = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #888;

  @media only screen and (min-width: 1024px) {
    font-size: 14px;
  }
`;

export const Time = styled.time`
  font-size: 12px;
  font-weight: 400;
  color: #888;

  @media only screen and (min-width: 1024px) {
    font-size: 14px;
  }
`;
export const AdWrapper = styled.div`
  border-bottom: 1px solid var(--divider-color);
`;
