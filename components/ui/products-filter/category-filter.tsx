"use client";
import { FC, useEffect, useState, useTransition } from "react";
import Select from "@/components/ui/select";

const CategoryFilter: FC<{
  categories: string[];
  value: string;
  onChange: (category: string) => void;
}> = ({ categories, value = "all", onChange }) => {
  const [isPending, startTransition] = useTransition();

  const [selectedValue, setSelectedValue] = useState<string>(
    value !== "undefined" ? value : "all"
  );

  useEffect(() => {
    if (value === "undefined") {
      setSelectedValue("all");
    }
  }, [value]);

  const handleOptionSelect = (value: string) => {
    startTransition(() => {
      onChange(value);
      setSelectedValue(value);
    });
  };

  return (
    <div>
      <label
        htmlFor="category"
        className="block text-sm font-medium text-gray-700"
      >
        Category
      </label>
      <Select
        data-testid="category-select"
        options={["all", ...categories]}
        value={selectedValue}
        id="category"
        loading={isPending}
        onOptionSelect={handleOptionSelect}
      />
    </div>
  );
};

export default CategoryFilter;
