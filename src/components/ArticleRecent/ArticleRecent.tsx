import {
  AuthorByLine,
  AuthorName,
  DetailsWrapper,
  HeroImage,
  Subtitle,
  Title,
  Wrapper,
  Date,
  LinkWrapper,
} from "./styles";

export interface ArticleRecentInterface {
  heroImage: string;
  articleTitle: string;
  articleSubtitle: string;
  articleAuthor: string;
  articleDate: string;
  slug: string;
}

const ArticleRecent = (props: ArticleRecentInterface) => {
  return (
    <LinkWrapper href={`/articles/${props.slug}`}>
      <Wrapper>
        <HeroImage src={props.heroImage} />
        <DetailsWrapper>
          <Title>{props.articleTitle}</Title>
          <Subtitle>{props.articleSubtitle}</Subtitle>
          <AuthorByLine>
            <AuthorName>{`By: ${props.articleAuthor}`}</AuthorName>
            <Date>{`Date: ${props.articleDate} `}</Date>
          </AuthorByLine>
        </DetailsWrapper>
      </Wrapper>
    </LinkWrapper>
  );
};

export default ArticleRecent;
