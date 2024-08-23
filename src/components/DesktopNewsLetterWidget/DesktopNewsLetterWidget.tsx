import { SyntheticEvent, useRef, useState } from "react";
import {
  LogoTitleWrapper,
  Wrapper,
  Img,
  Description,
  EmailInput,
  SubscribeButton,
  Notice,
  InputButtonWrapper,
  ThreeDots,
} from "./styles";
import { toast } from "react-toastify";

const DesktopNewsLetterWidget = (props: {
  title: string;
  description: string;
  handleSubscribe: () => void;
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const handleSubscribeClick = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!emailInputRef.current?.value) {
      return;
    }

    setIsSaving(true);

    try {
      await props.handleSubscribe();
    } catch (e) {
      return;
    } finally {
      emailInputRef.current!.value = "";
      setIsSaving(false);
    }

    toast.success("Subscribed!");
  };

  const noticeStatement = `By submitting your email, you agree to our Terms of Service and Privacy
  Notice. You can opt out at any time.`;

  return (
    <Wrapper>
      <LogoTitleWrapper>
        <Img src="https://images.ctfassets.net/adm95tf39lbj/5oLK6GZDGTczuSrMANnlXD/f9231273b292bce91a1baa3015b63b52/NintendoSupply.png" />
        <h2>{props.title}</h2>
        <Description>{props.description}</Description>
      </LogoTitleWrapper>
      <InputButtonWrapper
        ref={formRef}
        onSubmit={(e) => handleSubscribeClick(e)}
      >
        <EmailInput
          ref={emailInputRef}
          type="email"
          placeholder="Your Email Address"
        />
        <SubscribeButton type="submit">
          {!isSaving && `SUBSCRIBE`}
          {isSaving && <ThreeDots />}
        </SubscribeButton>
      </InputButtonWrapper>
      <Notice>{noticeStatement}</Notice>
    </Wrapper>
  );
};

export default DesktopNewsLetterWidget;
