import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useStore} from "../stores";
import {observer} from "mobx-react";
import {useMediaQuery} from "@mui/material";
import {CartProduct} from "./CartProduct";
import {StyledTableCell} from "./StyledTableCell";

export const CartList = observer(() => {
    const {
        productStore: {
            selectedProductsByType,
            removeProduct,
            calcQuantity,
            decrementProductQuantity,
            incrementProductQuantity,
            calcTotalForProduct
        }
    } = useStore();
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <TableContainer style={{borderRadius: 4, flex: 4}}
                        component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow
                        style={{display: isMobile ? 'none' : 'table-row'}}>
                        <StyledTableCell
                            align="left">Item</StyledTableCell>
                        <StyledTableCell
                            align="left">Title</StyledTableCell>
                        <StyledTableCell
                            align="left">Price</StyledTableCell>
                        <StyledTableCell
                            align="left">Quantity</StyledTableCell>
                        <StyledTableCell
                            align="left">Total</StyledTableCell>
                        <StyledTableCell
                            align="left">&nbsp;</StyledTableCell>
                        <StyledTableCell
                            align="left">&nbsp;</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {selectedProductsByType().map((product) => (
                        <CartProduct product={product}
                                     removeProduct={() => removeProduct(product)}
                                     calcQuantity={calcQuantity(product.id)}
                                     decrementProductQuantity={() => decrementProductQuantity(product.id)}
                                     incrementProductQuantity={() => incrementProductQuantity(product.id)}
                                     calcTotal={calcTotalForProduct(product.id)}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
})