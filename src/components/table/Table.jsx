import "./Table.css";

export default function Table({ columnas, data }) {
    return (
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              {columnas.map((col) => (
                <th key={col.accessor}>{col.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((fila, idx) => (
              <tr key={idx}>
              {columnas.map((col) => (
                <td key={col.header}>
                  {col.render ? col.render(fila) : fila[col.accessor]}
                </td>
              ))}
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
