import { Wrapper, Body, Text, Icon } from './styles';

export interface ButtonFilledProps {
    disabled?: boolean;
    text: string;
    iconPath?: string;
    onClick?: () => void;
}

const ButtonFilled = (props: ButtonFilledProps) => {
    return (
        <Wrapper disabled={props.disabled} onClick={() => props.onClick?.()}>
            <Body>
                {props.iconPath && <Icon src={props.iconPath} />}
                <Text>{props.text}</Text>
            </Body>
        </Wrapper>
    );
};

export default ButtonFilled;