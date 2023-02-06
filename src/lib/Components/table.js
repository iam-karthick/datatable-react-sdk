import React from "react";
import TableRow from "./table-row";
import TableHeadItem from "./table-row";

const Table = ({ theadData, tbodyData }) => {
    return (
        <table >
            <thead>
                <tr>
                    {theadData.map((h) => {
                        return <TableHeadItem key={h} item={h} />;
                    })}
                </tr>
            </thead>
            <tbody>
                {tbodyData.map((item) => {
                    return <TableRow key={item.id} data={item.items} />;
                })}
            </tbody>
        </table>
    );
};

export default Table;