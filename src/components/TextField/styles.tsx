import styled from "styled-components";

export const Wrapper = styled.input`
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

    &::placeholder {
        font-size: var(--text-field-font-size);
        line-height: var(--text-field-line-height);
        color: var(--text-field-placeholder-color);
    }
`;