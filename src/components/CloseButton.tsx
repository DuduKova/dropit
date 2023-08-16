import React from 'react';
import {ButtonBase} from "@mui/material";
import {ReactComponent as CloseIcon} from '../svg/close.svg';

export const CloseButton = ({onClick}: {onClick: () => void}) => {
    return (
        <ButtonBase onClick={onClick}>
            <CloseIcon/>
        </ButtonBase>
    );
};
