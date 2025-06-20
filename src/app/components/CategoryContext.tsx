"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type CategoryType = "bracelet" | "necklace";

interface CategoryContextProps {
  category: CategoryType;
  setCategory: (category: CategoryType) => void;
}

const CategoryContext = createContext<CategoryContextProps | undefined>(
  undefined
);

export function useCategory() {
  const ctx = useContext(CategoryContext);
  if (!ctx)
    throw new Error("useCategory must be used within a CategoryProvider");
  return ctx;
}

export function CategoryProvider({ children }: { children: ReactNode }) {
  const [category, setCategory] = useState<CategoryType>("bracelet");
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}
