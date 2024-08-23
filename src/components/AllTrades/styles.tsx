import styled from "styled-components";

export const Wrapper = styled.tr`
  display: grid;
  grid-template-columns:
    [politician] 220px [issuer] 220px
    [txType] minmax(80px, 0.4fr) [published] minmax(70px, 0.4fr) [buyDate] minmax(
      90px,
      0.6fr
    )
    [filed] minmax(85px, 0.4fr) [txSize] minmax(100px, 0.4fr);

  width: 100%;
  background-color: var(--background-color-primary);
  padding: 0 10px;
  border-bottom: 1px solid var(--border-color);
  @media only screen and (min-width: 1024px) {
    grid-template-columns:
      [politician] minmax(160px, 220px) [issuer] minmax(160px, 220px)
      [txType] minmax(60px, 0.4fr) [published] minmax(60px, 0.4fr) [buyDate] minmax(
        60px,
        0.4fr
      )
      [filed] minmax(65px, 0.4fr) [owner] minmax(60px, 0.4fr) [txSize] minmax(
        60px,
        0.4fr
      )
      [price] minmax(50px, 0.2fr);
  }
`;

export const PoliticianGroup = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
`;
export const PoliticianAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: var(--background-color-secondary);
  flex-shrink: 0;
  object-fit: cover;
`;
export const PoliticianDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

interface PoliticianNameProps {
  $politicalparty: string;
}

export const PoliticianName = styled.div<PoliticianNameProps>`
  color: ${(props) =>
    props.$politicalparty === "democrat" ? "#00AEF3" : "#E81B23"};
`;
export const PoliticianDetail = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: var(--font-color-secondary);
`;
export const IssuerGroup = styled(PoliticianGroup)``;
export const IssuerAvatar = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: var(--background-color-secondary);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;
export const IssuerDetailWrapper = styled(PoliticianDetailWrapper)``;
export const IssuerName = styled(PoliticianName)`
  color: var(--font-color-primary);
`;
export const IssuerDetail = styled(PoliticianDetail)``;

export const TypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  vertical-align: middle;
`;
interface TypeInterface {
  $transactiontype: string;
}
export const Type = styled.div<TypeInterface>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.$transactiontype === "buy"
      ? "var(--positive)"
      : props.$transactiontype === "sell"
      ? "var(--lemon)"
      : props.$transactiontype === "exchange" && "var(--negative)"};
`;

export const PublishedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const Title = styled.div`
  color: var(--font-color-primary);
`;
export const Subtitle = styled.div`
  color: var(--font-color-secondary);
`;
export const TradedWrapper = styled(PublishedWrapper)``;
export const FiledWrapper = styled(PublishedWrapper)``;
export const OwnerWrapper = styled(PublishedWrapper)``;
export const SizeWrapper = styled(PublishedWrapper)``;
export const PriceWrapper = styled(PublishedWrapper)``;

export const PoliticianTd = styled.td`
  min-height: 55px;
`;
export const IssuerTd = styled(PoliticianTd)``;

export const TypeTd = styled.td``;

export const PublishedTd = styled(TypeTd)``;

export const TradedTd = styled(TypeTd)``;

export const FiledTd = styled(TypeTd)``;

export const OwnerTd = styled(TypeTd)`
  display: none;
  @media only screen and (min-width: 1024px) {
    display: unset;
  }
`;

export const SizeTd = styled(TypeTd)``;

export const PriceTd = styled(TypeTd)`
  display: none;
  @media only screen and (min-width: 1024px) {
    display: unset;
  }
`;
