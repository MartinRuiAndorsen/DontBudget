"use client";

import { useState } from "react";
import { AddBudgetButton } from "./AddBudgetButton";
import { BudgetItem } from "./BudgetItem";

export default function Budget() {
  const [categories, setCategories] = useState(["A", "B", "C"]);
  const submitCategory = (name: string) => {
    console.log(`submit: ${name}`);
    setCategories(categories.concat(name));
  };

  return (
    <>
      <AddBudgetButton submitCategory={submitCategory} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Assigned</th>
            <th>Spent</th>
            <th>Remaining</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat, i) => {
            return <BudgetItem key={i} name={cat} />;
          })}
        </tbody>
      </table>
    </>
  );
}
