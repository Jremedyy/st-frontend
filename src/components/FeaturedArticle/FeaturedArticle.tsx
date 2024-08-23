import { HeroImage, Title, Wrapper } from "./styles";

export interface FeaturedArticleInterface {
  image: string;
  title: string;
  href: string;
}

export const FeaturedArticle = (props: FeaturedArticleInterface) => {
  return (
    <Wrapper>
      <HeroImage src={props.image} />
      <Title>{props.title}</Title>
    </Wrapper>
  );
};
