import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 16px;
  max-width: 800px;
  background-color: var(--background-color-primary);
  @media only screen and (min-width: 1024px) {
    padding: 16px 24px;
  }
`;

export const H1 = styled.h1`
  font-size: var(--h1-font-size-s);
  font-weight: var(--h1-font-weight);
  line-height: var(--h1-line-height);
  color: var(--font-color-primary);

  @media only screen and (min-width: 1024px) {
    font-size: var(--h1-font-size-l);
  }
`;

export const P = styled.p`
  margin-top: 16px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--font-color-secondary);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`;

export const MessageWrapper = styled.div`
  width: 100%;
  height: 150px;
`;

export const EmailWrapper = styled.div`
  width: 100%;
  height: 44px;
`;

export const SubjectWrapper = styled.div`
  width: 100%;
  height: 44px;
`;

export const SubjectSelect = styled.select`
  width: 100%;
  height: 100%;
  padding: var(--text-field-padding);
  font-size: var(--text-field-font-size);
  line-height: var(--text-field-line-height);
  background-color: var(--text-field-background-color);
  color: var(--text-field-color);
  caret-color: var(--text-field-caret-color);
  border: none;
  border-radius: 0;
  border-right: 13px solid transparent;
`;

export const SubmitButtonWrapper = styled.div`
  width: 100%;
  height: 44px;
`;
