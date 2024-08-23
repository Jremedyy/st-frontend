import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  max-width: 1440px;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--background-color-primary);
  padding: 0 10px;
`;

export const LogoWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100%;
`;

export const NavItemGroup = styled.div`
  display: flex;
  height: 100%;
`;

export const NavItem = styled.a`
  display: flex;
  padding: 0px 10px;
  font-family: var(--font-family);
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  -webkit-box-align: center;
  align-items: center;
  color: var(--font-color-primary) !important;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  border-style: none;
  &:hover {
    color: var(--font-color-secondary) !important;
  }
  &.selected {
    text-decoration: underline;
  }
  @media only screen and (min-width: 767px) {
    &.selected {
      text-decoration: unset;
    }
  }
`;
