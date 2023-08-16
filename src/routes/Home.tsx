import React from 'react';
import {Page} from "../components/Page";
import {CatalogTable} from "../components/CatalogTable";
import {observer} from "mobx-react"
import {SearchInput} from "../components/SearchInput";
import {Alert, CircularProgress, useMediaQuery} from "@mui/material";
import {CatalogMobile} from "../components/CatalogMobile";
import {useStore} from "../stores";
import {Box} from "@mui/system";

export const Home = observer(() => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const {modalStore: {errorMessage}, productStore: {isLoading}} = useStore()
    return (
        <>
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            <Page title="Catalog page">
                <SearchInput/>
                {isLoading &&
                    <Box sx={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                        <CircularProgress/>
                    </Box>}
                {isMobile ? <CatalogMobile/> : <CatalogTable/>}
            </Page>
        </>
    );
});
