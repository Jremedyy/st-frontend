import styled from "styled-components";
import ArticleRecent, { ArticleRecentInterface } from "./ArticleRecent";

export interface ArticleRecentGroupProps {
  viewAllLink: string;
  latestArticles: ArticleRecentInterface[];
}

const ArticleRecentGroup = (props: ArticleRecentGroupProps) => {
  return (
    <Wrapper>
      <Header>
        <Title>{"Latest"}</Title>
        <ViewAll href={props.viewAllLink}>{"View All"}</ViewAll>
      </Header>
      <ArticleGroupWrapper>
        {props.latestArticles.map(
          (article: ArticleRecentInterface, index: number) => (
            <ArticleRecent
              heroImage={article.heroImage}
              articleTitle={article.articleTitle}
              articleSubtitle={article.articleSubtitle}
              articleAuthor={article.articleAuthor}
              articleDate={article.articleDate}
              key={index}
              slug={article.slug}
            />
          )
        )}
      </ArticleGroupWrapper>
    </Wrapper>
  );
};
export default ArticleRecentGroup;

const Wrapper = styled.div``;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  flex-direction: row;
  gap: 8px;
  @media only screen and (min-width: 768px) {
    padding: 0px 0px 10px 0px;
  }
`;

const Title = styled.h2`
  color: var(--font-color-primary);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  flex-direction: column;
  justify-content: center;
  margin: 0;
`;

const ViewAll = styled.a`
  color: var(--link-color);
  text-align: right;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
  line-height: normal;
`;

const ArticleGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
