import React from "react";

const Table = ({ data }) => {
    // Asegúrate de que data es un array de objetos
    if (!data || data.length === 0) {
      return <p>No hay datos para mostrar</p>;
    }

    // Obtener las cabeceras de la primera fila de datos
    const cabeceras = Object.keys(data[0]);

    return (
        <table className="mi-tabla"> {/* Puedes añadir una clase CSS para estilizar */}
          <thead>
            <tr>
              {cabeceras.map((cabecera, index) => (
                <th key={index}>{cabecera}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((fila, rowIndex) => (
              <tr key={rowIndex}>
                {cabeceras.map((cabecera, colIndex) => (
                  <td key={colIndex}>{fila[cabecera]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    };
    
    export default Table;
