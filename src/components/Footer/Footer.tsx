import {
  CompanyStatement,
  Detail,
  DetailGroup,
  DetailGroupWrapper,
  Head,
  Wrapper,
} from "./styles";

const Footer = () => {
  return (
    <Wrapper>
      <CompanyStatement>
        2023 Swamp Trades LLC. All rights reserved.
      </CompanyStatement>
      <DetailGroupWrapper>
        <DetailGroup>
          <Head style={{ fontWeight: "700", color: "white", cursor: "unset" }}>
            {"Company"}
          </Head>
          <Detail href="/contact-us">{"Contact Us"}</Detail>
          <Detail href="/about-us">{"About Us"}</Detail>
        </DetailGroup>
        <DetailGroup>
          <Head style={{ fontWeight: "700", color: "white", cursor: "unset" }}>
            {"Legal"}
          </Head>
          <Detail href="/cookie-policy">{"Cookie Policy"}</Detail>
          <Detail href="/privacy-policy">{"Privacy Policy"}</Detail>
          <Detail href="/advertising-policy">{"Advertising Policy"}</Detail>
        </DetailGroup>
      </DetailGroupWrapper>
    </Wrapper>
  );
};

export default Footer;
