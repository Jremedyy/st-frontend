import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 153px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 16px;
  border-top: 1px solid var(--border-color);
  background-color: var(--background-color-primary);
  justify-content: first baseline;
  margin-top: auto;
`;
export const DetailGroupWrapper = styled.div`
  display: flex;
  width: 100%;
`;
export const DetailGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
  align-self: stretch;
  width: 100%;
`;

export const Detail = styled.a`
  color: var(--font-color-secondary) !important;
  text-decoration: none;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  cursor: pointer;
`;

export const Head = styled.div`
  color: white;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 100%;
  cursor: pointer;
`;

export const CompanyStatement = styled.div`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  text-align: center;
`;
