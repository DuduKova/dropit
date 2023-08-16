import React from 'react';
import {styled} from "@mui/system";
import {COLORS} from "../constants";
import Typography from "@mui/material/Typography";
import {ButtonBase, Grid} from "@mui/material";
import {ReactComponent as PlusIcon} from '../svg/plus.svg';
import {ReactComponent as MinusIcon} from '../svg/minus.svg';

const StyledBox = styled(Grid)({
    backgroundColor: COLORS.grey3,
    color: COLORS.greyBlue,
    borderRadius: 12,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 2
})

export const Counter = ({
                            quantity,
                            decrement,
                            increment
                        }: {
    quantity: number,
    decrement: () => void,
    increment: () => void,
}) => {
    return (
        <StyledBox>
            <ButtonBase onClick={decrement}>
                <MinusIcon/>
            </ButtonBase>
            <Typography>{quantity}</Typography>
            <ButtonBase onClick={increment}>
                <PlusIcon/>
            </ButtonBase>
        </StyledBox>
    );
};
