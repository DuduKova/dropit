import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {ReactComponent as Logo} from '../svg/logo.svg';
import {ReactComponent as Cart} from '../svg/cart.svg';
import {COLORS} from "../constants";
import {Badge, ButtonBase} from "@mui/material";
import {observer} from "mobx-react";
import {useStore} from "../stores";
import {useNavigate} from "react-router-dom";

const badgeStyle = {
    "& .MuiBadge-badge": {
        color: COLORS.white,
        backgroundColor: COLORS.green,
    }
}

export const Header = observer(() => {
    const {productStore: {hideBadge, numberOfProducts}} = useStore();
    const navigate = useNavigate();
    return (
        <Box sx={{
            flexGrow: 1, padding: 0, backgroundColor: COLORS.white, mb: 10
        }}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                >
                </IconButton>
                <Typography component="div" sx={{flexGrow: 1}} onClick={() => navigate("/")}>
                    <Logo/>
                </Typography>
                <Typography component="div" sx={{flexGrow: 1}} align="right" onClick={() => navigate("/cart")}>
                    <ButtonBase>
                        <Badge badgeContent={numberOfProducts()} sx={badgeStyle} max={99} invisible={hideBadge()}>
                            <Cart/>
                        </Badge>
                    </ButtonBase>
                </Typography>
            </Toolbar>
        </Box>
    );
})