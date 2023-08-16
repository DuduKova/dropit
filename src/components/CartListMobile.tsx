import {useStore} from "../stores";
import {observer} from "mobx-react";
import {Box, styled} from "@mui/system";
import {COLORS} from "../constants";
import {priceFormat} from "../format";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {Counter} from "./Counter";
import {CloseButton} from "./CloseButton";

export const CatalogMobile = observer(() => {
    const {
        productStore: {
            selectedProductsByType,
            removeProduct,
            calcQuantity,
            decrementProductQuantity,
            incrementProductQuantity,
            calcTotalForProduct
        }
    } = useStore();
    const StyledProductItem = styled(Box)({
        backgroundColor: COLORS.white,
        borderRadius: 4,
        padding: 16,
        display: 'flex',
        marginBottom: 8,
        color: COLORS.grey1
    })
    return (
        <Box>
            {selectedProductsByType().map((product) =>
                <StyledProductItem>
                    <Box style={{marginRight: 13}}>
                        <Avatar src={product.image} variant="square"
                                style={{
                                    borderRadius: 2,
                                    width: 65,
                                    height: 65
                                }}/>
                    </Box>
                    <Box style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginRight: 'auto',
                        justifyContent: 'space-between'
                    }}>
                        <Typography>{product.title}</Typography>
                        <Typography>{priceFormat(product.price)}</Typography>
                        <Box style={{width: 85}}>
                            <Counter
                                quantity={calcQuantity(product.id)}
                                decrement={() => decrementProductQuantity(product.id)}
                                increment={() => incrementProductQuantity(product.id)}
                            />
                        </Box>
                    </Box>
                    <Box style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'self-end'
                    }}>
                        <CloseButton onClick={() => removeProduct(product)}/>
                        <Typography>{priceFormat(calcTotalForProduct(product.id))}</Typography>
                    </Box>
                </StyledProductItem>)}
        </Box>
    )
});
