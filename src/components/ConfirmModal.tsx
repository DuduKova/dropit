import React from 'react';
import {observer} from "mobx-react";
import {useStore} from "../stores";
import {Divider, Modal} from "@mui/material";
import {Box} from "@mui/system";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";
import {CloseButton} from "./CloseButton";
import {DismissButton} from "./DismissButton";
import {COLORS} from "../constants";
import {isMobile} from "react-device-detect";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: COLORS.white,
    border: `1px solid ${COLORS.grey3}`,
    borderRadius: '5px',
    pt: 2,
    px: 4,
    pb: 3,
};


export const ConfirmModal = observer(() => {
    const {modalStore: {isOpen, setIsOpen}} = useStore();
    const navigate = useNavigate();

    const onClose = () => {
        setIsOpen(false);
        navigate('/')
    }
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box style={{...style}}>
                <Box style={{padding: 24}}>
                    <Box style={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end'
                    }}>
                        <CloseButton onClick={onClose}/>
                    </Box>
                    <Typography id="modal-modal-title" variant="h6"
                                style={{color: COLORS.greyBlue}}
                                component="h2">
                        Checkout completed
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}
                                style={{fontSize: 14, color: COLORS.greyBlue}}>
                        Thanks for buying {isMobile && `,${<br/>}`} see you soon!
                    </Typography>
                </Box>
                <Divider/>
                <DismissButton onClick={onClose}/>
            </Box>
        </Modal>
    );
});
