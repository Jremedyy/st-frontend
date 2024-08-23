import { useEffect, useRef, useState } from "react";
import {
  DropDownItem,
  DropDownItemWrapper,
  DropDownSelector,
  DropDownWrapper,
  SvgWrapper,
  Wrapper,
} from "./styles";
import { DownArrowSvg, UpArrowSvg } from "../../common/icons";
import { CustomScroll } from "../../styled-components/global-styles";

export interface ComboBoxProps {
  label: string;
  options: string[];
  onSelectionChange: (selectedOptions: Set<string>) => void;
  allowMultiple: boolean;
  initialOption?: Set<string>;
  selectedOptions: Set<string>;
}

const ComboBox = (props: ComboBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const comboDropdownRef = useRef<HTMLDivElement>(null);
  const comboBoxRef = useRef<HTMLInputElement>(null);

  const handleCheckboxClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    const target = event.target as HTMLInputElement;
    if (target && target.type === "checkbox") {
      const selectedOptionsArray = Array.from(props.selectedOptions);
      if (props.allowMultiple) {
        if (target.checked) {
          props.onSelectionChange(
            new Set([...selectedOptionsArray, target.id])
          );
        } else {
          const updatedOptions = selectedOptionsArray.filter(
            (option) => option !== target.id
          );
          props.onSelectionChange(new Set(updatedOptions));
        }
      } else {
        const newSet = new Set([target.id]);
        props.onSelectionChange(newSet);
      }
    }
  };

  //===========================
  //   Click Outside Listener
  //===========================

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if event.target is a Node
      if (!(event.target instanceof Node)) {
        return;
      }

      if (
        comboDropdownRef.current &&
        !comboDropdownRef.current.contains(event.target) &&
        comboBoxRef.current &&
        !comboBoxRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //for adding border bottom to last selected item.

  const sortedOptions = props.options.slice().sort((a, b) => {
    const aSelected = props.selectedOptions.has(a);
    const bSelected = props.selectedOptions.has(b);
    return aSelected === bSelected ? 0 : aSelected ? -1 : 1;
  });

  const lastSelectedItem = props.allowMultiple
    ? sortedOptions.filter((option) => props.selectedOptions.has(option)).pop()
    : undefined;

  return (
    <Wrapper>
      <CustomScroll>
        <DropDownSelector onClick={() => setIsOpen(!isOpen)} ref={comboBoxRef}>
          {props.label}
          <SvgWrapper>{isOpen ? <UpArrowSvg /> : <DownArrowSvg />}</SvgWrapper>
        </DropDownSelector>
        <DropDownWrapper
          $isopen={isOpen.toString()}
          ref={comboDropdownRef}
          onClick={(event) => handleCheckboxClick(event)}
        >
          {sortedOptions.map((option, index) => (
            <DropDownItemWrapper
              key={index}
              $islastselecteditem={
                option === lastSelectedItem ? "true" : "false"
              }
            >
              <DropDownItem
                type="checkbox"
                id={option}
                checked={props.selectedOptions.has(option)}
                onChange={() => {}}
              />
              {option}
            </DropDownItemWrapper>
          ))}
        </DropDownWrapper>
      </CustomScroll>
    </Wrapper>
  );
};

export default ComboBox;
