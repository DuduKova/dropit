import React from 'react';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {ReactComponent as AddToCart} from '../svg/addToCart.svg';
import {IProduct} from "../types";
import Avatar from "@mui/material/Avatar";
import {observer} from "mobx-react";
import {ButtonBase, tableCellClasses, useMediaQuery} from '@mui/material';
import {styled} from "@mui/system";
import {COLORS} from "../constants";
import {priceFormat} from "../format";

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: COLORS.grey3,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        letterSpacing: 0.5,
        color: COLORS.grey1,
    },
}));

export const CatalogProduct = observer(({product, addProduct}: {
    product: IProduct,
    addProduct: (product: IProduct) => void
}) => {
    const matches = useMediaQuery('(max-width:600px)');
    const {id, image, title, price} = product;
    return (
        <StyledTableRow key={image}>
            <StyledTableCell component="th" scope="row">
                <Avatar src={image} variant="square"
                        style={{borderRadius: 2}}/>
            </StyledTableCell>
            <StyledTableCell align="left">{id}</StyledTableCell>
            <StyledTableCell align="left">{title}</StyledTableCell>
            <StyledTableCell
                align="right">{priceFormat(price)}</StyledTableCell>
            <StyledTableCell align="left">
                <ButtonBase onClick={() => addProduct(product)}>
                    <AddToCart/>
                </ButtonBase>
            </StyledTableCell>
        </StyledTableRow>
    );
});
