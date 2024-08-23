import styled from "styled-components";
import { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  background-color: var(--background-color-primary);
`;

const paginationItemStyle = css`
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  color: var(--font-color-primary);
  font-weight: 500;
  font-size: 16px;
  padding: 8px 12px;
`;

const paginationLinkItemStyle = css`
  &:link {
    color: var(--font-color-primary);
  }

  &:visited {
    color: var(--font-color-primary);
  }

  &:hover {
    color: var(--font-color-primary);

    background-color: var(--divider-color);
    cursor: pointer;
  }

  &:active {
    color: var(--font-color-primary);
  }
`;

export const PaginationNumberLink = styled.a<{ $currentPage: boolean }>`
  ${paginationItemStyle}
  ${paginationLinkItemStyle}
  border-radius: 8px;
  background-color: ${(props) => props.$currentPage && "#383839"};
  pointer-events: ${(props) => props.$currentPage && "none"};
  text-decoration: none;
`;

export const PaginationPlaceholder = styled.div`
  ${paginationItemStyle}
`;

export const PaginationEndLink = styled.a`
  ${paginationItemStyle}
  ${paginationLinkItemStyle}
  text-decoration: none;
`;
