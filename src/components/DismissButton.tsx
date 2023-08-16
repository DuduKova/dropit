import React from 'react';
import {Button} from "@mui/material";
import {COLORS} from "../constants";

export const DismissButton = ({onClick}: { onClick: () => void }) => {
    return (
        <Button onClick={onClick} style={{
            width: '100%',
            color: COLORS.green,
            borderTop: 1,
            borderColor: COLORS.grey3,
            padding: 10,
            height: 50
        }}>
            SEE YA!
        </Button>
    );
};
