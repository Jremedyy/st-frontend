import { forwardRef } from "react";
import { Wrapper } from "./styles";

export interface TextAreaProps {
    placeholder?: string;
    required?: boolean;
    onChange?: () => void;
};

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
    return <Wrapper ref={ref} required={props.required} placeholder={props.placeholder} onChange={() => props.onChange?.()} />;
});

TextArea.displayName = "TextArea";

export { TextArea };