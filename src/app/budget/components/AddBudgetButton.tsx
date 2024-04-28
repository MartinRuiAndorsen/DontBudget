"use client";

import { FormEvent, InputHTMLAttributes, useRef, useState } from "react";
import styles from "./addBudgetButton.module.css";

interface Props {
  submitCategory: (name: string) => void;
}

export function AddBudgetButton({ submitCategory }: Props) {
  const [displayAddCategory, setDisplayAddCategory] = useState(false);
  const categoryForm = useRef<HTMLInputElement>(null);

  const handleSubmitCategory = () => {
    if (!categoryForm.current || categoryForm.current.value == "") {
      return;
    }
    const categoryName = categoryForm.current.value;
    submitCategory(categoryName);
    categoryForm.current.value = "";
    setDisplayAddCategory(!displayAddCategory);
  };

  return (
    <main className={styles.addCategory}>
      <button onClick={() => setDisplayAddCategory(!displayAddCategory)}>
        Add Budget Category
      </button>
      <form
        action={handleSubmitCategory}
        className={`${styles.dropdown} ${
          displayAddCategory == true ? styles.visible : ""
        }`}
      >
        <input
          id="categorySubmit"
          ref={categoryForm}
          name="categoryName"
          placeholder="Budget Category Name"
        ></input>
        <button type="submit">OK</button>
      </form>
    </main>
  );
}
