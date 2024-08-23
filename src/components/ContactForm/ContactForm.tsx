import {
  EmailWrapper,
  Form,
  H1,
  MessageWrapper,
  P,
  SubjectSelect,
  SubjectWrapper,
  SubmitButtonWrapper,
  Wrapper,
} from "./styles";
import { TextArea } from "../TextArea/TextArea";
import { TextField } from "../TextField/TextField";
import { ButtonFilled } from "../ButtonFilled";



export interface ContactFormProps {
  handleOnSubmit: Function;
  formRef: any;
  emailRef: any;
  subjectRef: any;
  messageRef: any;
  subjectOptions: any[];
}

const ContactForm = (props: ContactFormProps) => {
  return (
    <Wrapper>
      <H1>{`Contact Us`}</H1>
      <P>{`Need to get in touch with Swamp Trades?`}</P>
      <P>{`Please contact us using the submission form below and a member of our team will be in touch with you shortly!`}</P>
      <Form ref={props.formRef} onSubmit={(e) => props.handleOnSubmit(e)}>
        <EmailWrapper>
          <TextField
            ref={props.emailRef}
            required={true}
            type={"email"}
            placeholder="Email"
          />
        </EmailWrapper>
        <SubjectWrapper>
          <SubjectSelect ref={props.subjectRef}>
            {props.subjectOptions.map((so) => (
              <option key={so.value} value={so.value}>
                {so.text}
              </option>
            ))}
          </SubjectSelect>
        </SubjectWrapper>
        <MessageWrapper>
          <TextArea
            ref={props.messageRef}
            required={true}
            placeholder={"Message"}
          />
        </MessageWrapper>
        <SubmitButtonWrapper>
          <ButtonFilled text={"Submit"} />
        </SubmitButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export default ContactForm;
