import React from 'react';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {IProduct} from "../types";
import Avatar from "@mui/material/Avatar";
import {tableCellClasses} from '@mui/material';
import {styled} from "@mui/system";
import {COLORS} from "../constants";
import {CloseButton} from "./CloseButton";
import {Counter} from "./Counter";
import {priceFormat} from "../format";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        letterSpacing: 0.5,
        color: COLORS.grey1,
    },
}));

export const CartProduct = ({
                                product,
                                removeProduct,
                                calcQuantity,
                                decrementProductQuantity,
                                incrementProductQuantity,
                                calcTotal
                            }: {
    product: IProduct,
    removeProduct: (product: IProduct) => void,
    calcQuantity: number,
    decrementProductQuantity: () => void;
    incrementProductQuantity: () => void;
    calcTotal: number;
}) => {
    const {id, image, title, price} = product;
    return (
        <TableRow key={id}>
            <StyledTableCell component="th" scope="row">
                <Avatar src={image} variant="square"
                        style={{borderRadius: 2}}/>
            </StyledTableCell>
            <StyledTableCell
                align="left">{title}</StyledTableCell>
            <StyledTableCell
                align="right">{priceFormat(price)}</StyledTableCell>
            <StyledTableCell>
                <Counter
                    quantity={calcQuantity}
                    decrement={decrementProductQuantity}
                    increment={incrementProductQuantity}
                />
            </StyledTableCell>
            <StyledTableCell
                align="left">{priceFormat(calcTotal)}</StyledTableCell>
            <StyledTableCell
                align="left">&nbsp;</StyledTableCell>
            <StyledTableCell align="left">
                <CloseButton onClick={() => removeProduct(product)}/>
            </StyledTableCell>
        </TableRow>
    );
};
