import "./style.css";

interface Iprops {
  columns: string[];
  data: Record<string, string | number>[];
  striped?: boolean;
}

const Table = ({ columns, data, striped = false }: Iprops) => {
  return (
    <div className="table-responsive">
      <table className={`data-table ${striped ? "table-striped" : ""}`}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="table-empty">
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td key={column}>{row[column]}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
