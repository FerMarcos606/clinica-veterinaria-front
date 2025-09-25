import React from "react";
import Hero from "../../../components/hero/Hero";
import Button from "../../../components/button/Button";
import Table from "../../../components/table/Table";
import TableI from "../../../components/table/Table";

export const PatientList = () => {
    return (
        <>
        <Hero text="Listado de pacientes"></Hero>
        <span>
            <Button text="+ Crear nuevo"></Button>
            <Button></Button>
        </span>
        <Table></Table>
        <TableI></TableI>
        </>
    )
}

export default PatientList