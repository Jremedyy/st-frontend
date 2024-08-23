import styled from "styled-components";

export const Wrapper = styled.button`
    display: block;
    width: 100%;
    background-color: var(--button-filled-link-color);
    height: 100%;
    cursor: pointer;
    border: none;

    &:disabled {
        background-color: #333333;
        cursor: unset;

        & div {
            color: #888888;
        }
    }
`;

export const Body = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled.img`
    display: block;
    width: 24px;
    height: 24px;
    margin-right: 8px;
`;

export const Text = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #FFFFFF;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
`;