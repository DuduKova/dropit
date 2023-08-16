import React from 'react';
import {Grid, InputAdornment, TextField} from "@mui/material";
import {ReactComponent as SearchIcon} from '../svg/search.svg';
import {observer} from "mobx-react";
import {useStore} from "../stores";
import {COLORS} from "../constants";

export const SearchInput = observer(() => {
    const {productStore: {searchProduct}} = useStore();
    return (
        <Grid container style={{marginBottom: 24}}>
            <Grid item xs={12} md={6}>
                <TextField
                    style={{backgroundColor: COLORS.white, width: '100%'}}
                    id="search-input"
                    name="search-input"
                    placeholder="Search item"
                    onChange={({target: {value}}) => searchProduct(value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>
        </Grid>
    );
});
