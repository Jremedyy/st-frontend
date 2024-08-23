import { LogoWrapper, NavItem, NavItemGroup, Wrapper } from "./styles";

const Header = ({
  href,
  currentPage,
}: {
  href: { home: string; politicians: string; trades: string; news: string };
  currentPage: string;
}) => {
  return (
    <Wrapper>
      <a href={process.env.NEXT_PUBLIC_BASE_URL}>
        <img
          src={"https://images.swamptrades.com/Artboard%205.png"}
          style={{ height: "100%", padding: "8px" }}
        />
      </a>
      <NavItemGroup>
        <NavItem
          href={href.politicians}
          className={currentPage === "politicians" ? "selected" : ""}
        >
          {"Politicians"}
        </NavItem>
        <NavItem
          href={href.trades}
          className={currentPage === "trades" ? "selected" : ""}
        >
          {"Trades"}
        </NavItem>
        <NavItem
          href={href.news}
          className={currentPage === "news" ? "selected" : ""}
        >
          {"News"}
        </NavItem>
      </NavItemGroup>
    </Wrapper>
  );
};

export default Header;
