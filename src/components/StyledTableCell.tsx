import {styled} from "@mui/system";
import TableCell from "@mui/material/TableCell";
import {tableCellClasses} from "@mui/material";
import {COLORS} from "../constants";

export const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: COLORS.white,
        color: COLORS.greyBlue,
        fontSize: 14,
        letterSpacing: 1.5
    },
}));