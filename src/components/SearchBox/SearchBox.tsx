import { useEffect, useRef, useState } from "react";
import Fuse from "fuse.js";
import {
  DropDownItem,
  DropDownItemWrapper,
  DropDownWrapper,
  SearchIconWrapper,
  SearchInput,
  SearchInputWrapper,
  Wrapper,
} from "./styles";
import { SearchSvg } from "../../common/icons";
import { CustomScroll } from "@/styled-components/global-styles";

export type Option = {
  firstName: string;
  lastName: string;
  displayName: string;
  id: string;
};
export interface SearchBoxProps {
  options: Map<string, Option>;
  displayResults: boolean;
  onSelectionChange: (selectedOptions: Map<string, Option>) => void;
  placeholder: string;
  selectedOptions: Map<string, Option>;
}

const SearchBox = (props: SearchBoxProps) => {
  const [placeholderText, setPlaceholderText] = useState<string>(
    props.placeholder
  );
  const [searchInput, setSearchInput] = useState<string>("");
  const [displayedOptions, setDisplayedOptions] = useState<Map<string, Option>>(
    props.options
  );
  const [selectedOptions, setSelectedOptions] = useState<Map<string, Option>>(
    props.selectedOptions
  );

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    option: string
  ) => {
    if (event.target.checked) {
      addItemToSet(option);
    } else {
      removeItemFromSet(option);
    }
  };

  //=======================
  //   Search Input Logic
  //=======================

  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchInput(newValue);
    const fuseOptions = {
      keys: ["firstName", "lastName", "id"],
    };
    const arrayOfValues: Option[] = Array.from(props.options.values());
    //need to turn map into array for search
    const fuse = new Fuse(arrayOfValues, fuseOptions);
    if (newValue) {
      // Fetch new options only when there is input
      const newOptionsArray = fuse.search(newValue);

      const newSet = new Map(selectedOptions);
      newOptionsArray.forEach((option) => {
        const id = option.item.id;
        newSet.set(id, option.item);
      });

      setDisplayedOptions(newSet);
      if (dropdownRef.current) {
        dropdownRef.current.scrollTop = 0;
      }
    }
  };

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  //=======================
  //  Checkbox Logic
  //=======================

  const handleCheckboxClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    const target = event.target as HTMLInputElement;

    // Check if the clicked element is a checkbox
    if (target && target.type === "checkbox") {
      if (target.checked) {
        addItemToSet(target.id);
      } else {
        removeItemFromSet(target.id);
      }
    }
  };

  const addItemToSet = (id: string) => {
    const itemToAdd = props.options.get(id)!;
    const newSet = new Map(selectedOptions);
    newSet.set(id, itemToAdd);

    setSelectedOptions(newSet);
    props.onSelectionChange(newSet);
  };

  const removeItemFromSet = (id: string) => {
    const newSet = new Map(selectedOptions);
    newSet.delete(id);
    setSelectedOptions(newSet);
    props.onSelectionChange(newSet);
  };

  const sortedOptions = () => {
    const selected: Option[] = [];
    const notSelected: Option[] = [];

    displayedOptions.forEach((option) => {
      const id = option.id.toString();
      if (selectedOptions.has(id)) {
        selected.push(option);
      } else {
        notSelected.push(option);
      }
    });

    return [...selected, ...notSelected];
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
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (searchInput === "") {
      const combinedOptions = new Map(selectedOptions);
      const optionsArray = Array.from(props.options);
      optionsArray.forEach((option) => {
        combinedOptions.set(option[0], option[1]);
      });
      setDisplayedOptions(combinedOptions);
    }
  }, [searchInput, selectedOptions, props.options]);

  useEffect(() => {
    const count = selectedOptions.size;
    const newPlaceholder =
      count > 0 ? `${count} issuers selected` : props.placeholder;
    setPlaceholderText(newPlaceholder);
  }, [selectedOptions, props.placeholder]);
  const lastSelectedItemIndex = selectedOptions.size - 1;
  return (
    <Wrapper>
      <CustomScroll>
        <SearchInputWrapper>
          <SearchInput
            ref={inputRef}
            onChange={(event) => handleInputChange(event)}
            placeholder={placeholderText}
            onFocus={handleInputFocus}
          />
          <SearchIconWrapper>
            <SearchSvg />
          </SearchIconWrapper>
        </SearchInputWrapper>
        {props.displayResults && (
          <DropDownWrapper
            ref={dropdownRef}
            onClick={(event) => handleCheckboxClick(event)}
            $isopen={isOpen.toString()}
          >
            {sortedOptions().map((option: Option, index: number) => (
              <DropDownItemWrapper
                key={index}
                $islastselecteditem={
                  selectedOptions.has(option.id) &&
                  index === lastSelectedItemIndex
                    ? "true"
                    : "false"
                }
              >
                <DropDownItem
                  type="checkbox"
                  id={option.id}
                  checked={selectedOptions.has(option.id)}
                  onChange={(event) => handleCheckboxChange(event, option.id)}
                />
                {option.displayName}
              </DropDownItemWrapper>
            ))}
          </DropDownWrapper>
        )}
      </CustomScroll>
    </Wrapper>
  );
};

export default SearchBox;
