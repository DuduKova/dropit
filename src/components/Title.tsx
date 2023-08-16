import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {COLORS} from "../constants";
import {
    TypographyPropsVariantOverrides
} from "@mui/material/Typography/Typography";
import {OverridableStringUnion} from "@mui/types";
import {Variant} from "@mui/material/styles/createTypography";

export const Title = ({title, variant = 'h4'}: {
    title: string,
    variant?: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>
}) => {
    return (
        <Box sx={{
            width: '100%',
            borderBottom: 1,
            borderColor: COLORS.grey2,
            mb: 5
        }}>
            <Typography variant={variant} gutterBottom color={COLORS.greyBlue}>
                {title}
            </Typography>
        </Box>
    );
}