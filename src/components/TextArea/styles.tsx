import styled from "styled-components";

export const Wrapper = styled.textarea`
    width: 100%;
    height: 100%;
    background-color: var(--text-area-background-color);
    border: none;
    border-radius: 0;
    caret-color: var(--text-area-caret-color);
    color: var(--text-area-color);
    padding: var(--text-area-padding);
    font-size: var(--text-area-font-size);
    line-height: var(--text-area-line-height);
    resize: none;

    &::placeholder {
        font-size: var(--text-area-font-size);
        line-height: var(--text-area-line-height);
        color: var(--text-area-placeholder-color);
    }
`;