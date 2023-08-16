import React from 'react';
import {Button} from "@mui/material";
import {COLORS} from "../constants";
import Typography from "@mui/material/Typography";
import {observer} from "mobx-react";
import {useStore} from "../stores";
import {styled} from "@mui/system";

const StyledButton = styled(Button)({
    backgroundColor: COLORS.green,
    color: COLORS.white,
    width: '100%',
    ':hover': {
        backgroundColor: COLORS.greenHover,
    },
    ":active": {
        backgroundColor: COLORS.greenPressed
    }
})

export const SubmitButton = observer(() => {
    const {productStore: {clearCart}, modalStore: {setIsOpen}} = useStore();
    return (
        <StyledButton onClick={() => {
            clearCart();
            setIsOpen(true);
        }}>
            <Typography
                style={{textTransform: 'capitalize'}}>Checkout</Typography>
        </StyledButton>
    );
});
