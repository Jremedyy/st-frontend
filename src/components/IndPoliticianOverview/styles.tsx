import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: var(--background-color-secondary);
  @media only screen and (min-width: 1024px) {
    border-radius: 3px;
  }
`;
export const PoliticianWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AvatarWrapper = styled.div`
  padding: 8px;
`;
export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  object-fit: cover;
`;

export const PoliticianDetailGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--font-color-primary);
  text-align: center;
  font-family: var(--font-family);
  font-style: normal;
  line-height: normal;
  gap: 8px;
`;
export const PoliticianName = styled.div`
  font-size: var(--primary-text-mobile);

  @media only screen and (min-width: 1024px) {
    font-size: var(--primary-text-desktop);
  }
`;
export const PoliticianDetail = styled.div`
  font-size: var(--secondary-text-mobile);
  text-align: center;
  font-family: var(--font-family);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--font-color-secondary);
  @media only screen and (min-width: 1024px) {
    font-size: var(--secondary-text-desktop);
  }
`;

export const TradeDetailGroup = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
`;

export const TradeDetail = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Value = styled.div`
  color: var(--font-color-primary);
  text-align: center;
  font-family: var(--font-family);
  font-size: var(--primary-text-mobile);
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media only screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;
export const Title = styled.div`
  color: var(--font-color-secondary);

  text-align: center;
  font-family: var(--font-family);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: var(--secondary-text-mobile);
  @media only screen and (min-width: 1024px) {
    font-size: var(--secondary-text-desktop);
  }
`;
export const SocialAccountGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 8px;
  border-top: 1px solid var(--border-color);
`;
export const SocialAccount = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: var(--on-primary);
  padding: 2px;
  cursor: pointer;
`;
