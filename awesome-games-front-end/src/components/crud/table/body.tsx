import { TableRows, TableRowsData } from "./row";

interface TableBodyProps {
  onEdit: () => {};
  onDelete: () => {};
  rows: TableRowsData;
}
export const TableBody: React.FC<TableBodyProps> = ({
  rows,
  onDelete,
  onEdit,
}) => {
  return (
    <tbody>
      <TableRows rows={rows} onDelete={onDelete} onEdit={onEdit} />
    </tbody>
  );
};
