// import { Article } from "@/domain/article/Article";
import {
  Image,
  ImageLink,
  ImageWrapper,
  Title,
  TitleLink,
  Wrapper,
} from "./styles";

export interface ArticleFeaturedProps {
  type: ArticleFeaturedType;
  article: { slug: string; primaryImageUrl: string; title: string };
}

export type ArticleFeaturedType = "primary" | "secondary";

const ArticleFeatured = (props: ArticleFeaturedProps) => {
  const articleUrl = `/articles/${props.article.slug}`;

  const primarySources = [
    <source
      key={0}
      media="(min-width: 1024px)"
      srcSet={`${props.article.primaryImageUrl}&w=1280&q=90`}
    />,
    <source
      key={1}
      media="(min-width: 720px)"
      srcSet={`${props.article.primaryImageUrl}&w=1280&q=70`}
    />,
  ];

  const secondarySources = [
    <source
      key={0}
      media="(min-width: 1024px)"
      srcSet={`${props.article.primaryImageUrl}&w=512&q=90`}
    />,
    <source
      key={1}
      media="(min-width: 512px)"
      srcSet={`${props.article.primaryImageUrl}&w=720&q=70`}
    />,
    <source
      key={2}
      media="(min-width: 0px)"
      srcSet={`${props.article.primaryImageUrl}&w=320&q=70`}
    />,
  ];

  return (
    <Wrapper>
      <ImageLink href={articleUrl}>
        <ImageWrapper>
          {props.type === "primary" && primarySources}
          {props.type === "secondary" && secondarySources}
          <Image
            src={`${props.article.primaryImageUrl}&w=720&q=100`}
            alt={props.article.title}
          />
        </ImageWrapper>
      </ImageLink>
      <Title type={props.type}>
        <TitleLink href={articleUrl}>{props.article.title}</TitleLink>
      </Title>
    </Wrapper>
  );
};

export default ArticleFeatured;
