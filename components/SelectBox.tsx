import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

type Selectable = {
  key: string;
  label: string;
};

type SelectBoxProps = {
  items: Selectable[];
  onSelect: (key: string) => void;
  initialItem: Selectable;
};

function SelectBox(props: SelectBoxProps) {
  const { items, onSelect, initialItem } = props;

  return (
    <Select
      onSelectionChange={(keys) => {
        const selectedKey = Array.from(keys as Set<React.Key>)[0] as string;
        onSelect(selectedKey);
      }}
      variant="bordered"
      defaultSelectedKeys={[initialItem.key]}
      classNames={{
        trigger: ["border", "min-h-12"],
      }}
      selectionMode="single"
      disallowEmptySelection
    >
      {items.map((item) => (
        <SelectItem key={item.key} showDivider hideSelectedIcon>
          {item.label}
        </SelectItem>
      ))}
    </Select>
  );
}

export default SelectBox;
