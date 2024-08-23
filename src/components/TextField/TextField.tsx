import { forwardRef } from "react";
import { Wrapper } from "./styles";

type TextFieldType = "email" | "text";

export interface TextFieldProps {
    placeholder: string;
    required?: boolean;
    type: TextFieldType;
    value?: string;
    onChange?: () => void;
};

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
    return (
        <Wrapper ref={ref} type={props.type} required={props.required} placeholder={props.placeholder} value={props.value} onChange={() => props.onChange?.()} />
    );
});

TextField.displayName = "TextField";

export { TextField };