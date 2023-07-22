import { MdEdit, MdDelete } from "react-icons/md";
export type TableRowsData = Array<{ id: string; cells: Cell[] }>;
interface Cell {
  type: "img" | "string";
  data: string;
  size: number;
}
interface TableRowProps {
  onEdit: () => {};
  onDelete: () => {};
  rows: TableRowsData;
}
export const TableRows: React.FC<TableRowProps> = ({ rows }) => {
  return rows.map((row) => (
    <tr key={row.id}>
      {row.cells.map((cell, index) => (
        <td key={`${row.id}-${index}`} className={`p-3 w-${cell.size}/12 `}>
          {cell.type === "string" && cell.data}
          {cell.type === "img" && (
            <img src={cell.data} className="w-full max-w-[220px]" />
          )}
        </td>
      ))}
      <td className="w-1/12 p-3">
        <button className="text-2xl text-orange-400">
          <MdEdit />
        </button>
        <button className="text-2xl text-red-500">
          <MdDelete />
        </button>
      </td>
    </tr>
  ));
};
