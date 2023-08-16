import React from 'react';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {Divider, Grid} from "@mui/material";
import {SubmitButton} from "./SubmitButton";
import {Box} from "@mui/system";
import {COLORS} from "../constants";
import {observer} from "mobx-react";
import {useStore} from "../stores";
import {priceFormat} from "../format";

export const OrderSummary = observer(() => {
    const {productStore: {calcTotal, selectedProducts}} = useStore();
    const price = priceFormat(calcTotal());
    return (
        <Grid>
            <Paper
                style={{
                    paddingTop: 24,
                    paddingBottom: 24,
                    marginBottom: 10,
                    color: COLORS.greyBlue
                }}>
                <Typography variant="h6"
                            style={{paddingLeft: 24, marginBottom: 3}}>Order
                    summary</Typography>
                <Divider/>
                <Box sx={{
                    borderBottom: 1,
                    borderColor: COLORS.grey2,
                    mb: 5,
                    padding: 3
                }}>
                    <Typography>Subtotal: {price}</Typography>
                    <Typography>Shipping: Free</Typography>
                </Box>
                <Box style={{marginTop: 24, paddingLeft: 24, paddingRight: 24}}>
                    <Typography style={{
                        fontWeight: 'bold',
                        fontSize: 18
                    }}>Total: {price}</Typography>
                </Box>
            </Paper>
            {!!selectedProducts.length && <SubmitButton/>}
        </Grid>
    );
});
