import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'; // Ejemplo con Material UI

function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(''); // Ruta a tu endpoint de Spring Boot
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          {/* Mapea los nombres de tus columnas aquí */}
          <TableCell>Id</TableCell>
          <TableCell>Familia</TableCell>
          <TableCell>Nombre</TableCell>
          <TableCell>Raza</TableCell>
          <TableCell>Dueño</TableCell>
          <TableCell>Contacto</TableCell>
          <TableCell>Detalles</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.id}</TableCell> 
            <TableCell>{item.familia}</TableCell> 
            <TableCell>{item.nombre}</TableCell> 
            <TableCell>{item.raza}</TableCell>
            <TableCell>{item.dueño}</TableCell> 
            <TableCell>{item.contacto}</TableCell> 
            <TableCell>{item.detalles}</TableCell> 
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DataTable;