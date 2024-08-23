import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background: var(--background-color-secondary);
`;
export const Title = styled.div`
  color: #fff;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 134.523%;
  letter-spacing: 0.39px;
  margin-bottom: 21px;
`;
export const Description = styled.div`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
export const EmailInput = styled.input`
  display: flex;
  width: 100%;
  height: 32px;
  padding: 10px 15px;
  align-items: center;
  border: 1px solid #969696;
  background: #171b21;
  color: white;
`;

export const SubscribeButton = styled.button`
  display: flex;
  width: 200px;
  height: 32px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  background: #46b558;
  border: none;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.84px;
  color: white;
  cursor: pointer;
`;

export const Notice = styled.p`
  color: #ababab;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.523%;
  margin-top: 30px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 32px 28px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const Img = styled.img`
  max-width: 200px;
  padding: 15px 0;
`;

export const InputButtonWrapper = styled.form`
  display: flex;
  margin-top: 30px;
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
`;
