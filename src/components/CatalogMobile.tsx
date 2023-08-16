import {useStore} from "../stores";
import {observer} from "mobx-react";
import {Box, styled} from "@mui/system";
import {COLORS} from "../constants";
import {priceFormat} from "../format";
import {ButtonBase} from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import {ReactComponent as AddToCart} from '../svg/addToCart.svg';
import Typography from "@mui/material/Typography";

export const CatalogMobile = observer(() => {
    const {productStore: {showSearchedProducts, addProduct}} = useStore();
    const StyledProductItem = styled(Box)({
        backgroundColor: COLORS.white,
        borderRadius: 4,
        padding: 16,
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: 8,
        color: COLORS.grey1
    })
    return (
        <Box>
            {showSearchedProducts().map((product) =>
                <StyledProductItem>
                    <Box style={{marginRight: 13}}>
                        <Avatar src={product.image} variant="square"
                                  style={{borderRadius: 2}}/>
                    </Box>
                    <Box style={{display: 'flex', flexDirection: 'column', marginRight: 'auto', justifyContent: 'space-between'}}>
                        <Typography>{product.id}</Typography>
                        <Typography>{product.title}</Typography>
                        <Typography>{priceFormat(product.price)}</Typography>
                    </Box>
                    <Box>
                        <ButtonBase onClick={() => addProduct(product)}>
                            <AddToCart/>
                        </ButtonBase>
                    </Box>
                </StyledProductItem>)}
        </Box>
    )
});
