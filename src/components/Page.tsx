import React, {PropsWithChildren} from 'react';
import {Box, Container} from "@mui/system";
import {COLORS} from "../constants";
import {Header} from "./Header";
import {Title} from "./Title";
import {IPageProps} from "../types";

export const Page = ({children, title}: PropsWithChildren<IPageProps>) => {
    return (
        <Box bgcolor={COLORS.grey3} pb={5} height="100%">
            <Header/>
            <Container>
                <Title title={title}/>
                {children}
            </Container>
        </Box>
    );
};
