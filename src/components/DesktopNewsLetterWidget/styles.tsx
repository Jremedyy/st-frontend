import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--background-color-secondary);
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 3px;

  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding: 24px;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    gap: 24px;
  }
`;

export const LogoTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-weight: 700;
  font-size: 19px;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media only screen and (min-width: 1024px) {
    text-align: center;
  }
`;

export const Img = styled.img`
  height: 36px;
`;

export const Description = styled.p`
  color: #ccc;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const EmailInput = styled.input`
  display: flex;
  width: 100%;
  height: 36px;
  padding: 10px 15px;
  align-items: center;
  border: 1px solid #969696;
  background: #171b21;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  border-radius: 0px;

  @media only screen and (min-width: 1024px) {
    border-radius: 3px;
  }
`;

export const SubscribeButton = styled.button`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  background: var(--positive);
  border: none;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.84px;
  color: white;
  cursor: pointer;
  width: 100px;
  flex-shrink: 0;

  @media only screen and (min-width: 1024px) {
    width: 100%;
    border-radius: 3px;
  }
`;

export const Notice = styled.p`
  color: #f1f1f1;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 144.523%;
`;

export const InputButtonWrapper = styled.form`
  display: flex;
  flex-direction: row;
  margin: 10px auto;
  @media only screen and (min-width: 1024px) {
    display: flex;
    width: 100%;
    gap: 24px;
    flex-direction: column;
  }
`;

export const ThreeDots = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #ffffff;
  color: #ffffff;
  animation: dot-flashing 1s infinite linear alternate;
  animation-delay: 0.5s;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
  }

  &::before {
    left: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    animation: dot-flashing 1s infinite alternate;
    animation-delay: 0s;
  }

  &::after {
    left: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    animation: dot-flashing 1s infinite alternate;
    animation-delay: 1s;
  }

  @keyframes dot-flashing {
    0% {
      background-color: #ffffff;
    }
    50%,
    100% {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`;
