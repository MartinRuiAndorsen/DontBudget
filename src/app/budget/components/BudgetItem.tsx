import { table } from "console";
import styles from "./budgetItem.module.css";

interface Props {
  name: string;
}
export function BudgetItem({ name }: Props) {
  return (
    <tr>
      <th>{name}</th>
      <th>0</th>
      <th>0</th>
      <th>0</th>
    </tr>
  );
}
