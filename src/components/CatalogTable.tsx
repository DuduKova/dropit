import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {CatalogProduct} from "./CatalogProduct";
import {useStore} from "../stores";
import {observer} from "mobx-react";
import {StyledTableCell} from "./StyledTableCell";

export const CatalogTable = observer(() => {
    const {productStore: {showSearchedProducts, addProduct}} = useStore();
    return (
        <TableContainer style={{borderRadius: 4}} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Image</StyledTableCell>
                        <StyledTableCell align="left">ID</StyledTableCell>
                        <StyledTableCell align="left">Title</StyledTableCell>
                        <StyledTableCell align="left">Price</StyledTableCell>
                        <StyledTableCell align="left">&nbsp;</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {showSearchedProducts().map((product) => (
                        <CatalogProduct product={product}
                                        addProduct={() => addProduct(product)}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
})