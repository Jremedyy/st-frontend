// import { Article } from "@/domain/article/Article";
import {
  Image,
  ImageLink,
  ImageWrapper,
  Title,
  TitleLink,
  Wrapper,
  Description,
  Metadata,
  Time,
  AuthorByline,
  AuthorName,
  PublishedAt,
  Content,
} from "./styles";

import { ReactElement } from "react";

export interface CategoryPageArticleProps {
  article: any;
  ad?: ReactElement;
}

const NewsPageArticle = (props: CategoryPageArticleProps) => {
  const articleUrl = `/articles/${props.article.slug}`;

  return (
    <>
      {/* {props.ad && <AdWrapper>{props.ad}</AdWrapper>} */}
      <Wrapper>
        <ImageLink href={articleUrl}>
          <ImageWrapper>
            <source
              media="(min-width: 1024px)"
              srcSet={`${props.article.primaryImageUrl}&w=1024&q=90`}
            />
            <source
              media="(min-width: 720px)"
              srcSet={`${props.article.primaryImageUrl}&w=1024&q=80`}
            />
            <Image
              src={`${props.article.primaryImageUrl}&w=720&q=90`}
              alt={props.article.title}
            />
          </ImageWrapper>
        </ImageLink>
        <Content>
          <Title>
            <TitleLink href={articleUrl}>{props.article.title}</TitleLink>
          </Title>
          <Description>{props.article.seoData?.description}</Description>
          <Metadata>
            <AuthorByline>
              By{" "}
              <AuthorName>{`${props.article.author?.firstName} ${props.article.author?.lastName}`}</AuthorName>
            </AuthorByline>
            <PublishedAt>
              <Time> on {props.article.createdAt}</Time>
            </PublishedAt>
          </Metadata>
        </Content>
      </Wrapper>
    </>
  );
};

export default NewsPageArticle;
