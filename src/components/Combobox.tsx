"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const components = [
  {
    value: "component-1",
    label: "component-1",
  },
  {
    value: "component-2",
    label: "component-2",
  },
  {
    value: "component-3",
    label: "component-3",
  },
  {
    value: "component-4",
    label: "component-4",
  },
  {
    value: "component-5",
    label: "component-5",
  },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? components.find((component) => component.value === value)?.label
            : "Select component..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search component..." />
          <CommandEmpty>No component found.</CommandEmpty>
          <CommandGroup>
            {components.map((component) => (
              <CommandItem
                key={component.value}
                value={component.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === component.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {component.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
