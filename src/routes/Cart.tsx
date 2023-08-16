import React from 'react';
import {Page} from "../components/Page";
import {observer} from "mobx-react"
import {CartList} from "../components/CartList";
import {Grid, useMediaQuery} from "@mui/material";
import {OrderSummary} from "../components/OrderSummary";
import {ConfirmModal} from "../components/ConfirmModal";
import {CatalogMobile} from "../components/CartListMobile";
import {useStore} from "../stores";
import {Box} from "@mui/system";
import Typography from "@mui/material/Typography";
import {COLORS} from "../constants";

export const Cart = observer(() => {
    const {productStore: {selectedProducts}} = useStore();
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <Page title="Your cart">
            <ConfirmModal/>
            <Grid container spacing={2}>
                <Grid xs={12} md={9} item>
                    {isMobile ? <CatalogMobile/> : <CartList/>}
                </Grid>
                <Grid xs={12} md={3} item>
                    <OrderSummary/>
                </Grid>
            </Grid>
        </Page>
    );
});
