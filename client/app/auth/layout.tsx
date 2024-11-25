"use client"; 

import { Box } from '@mui/material';
import styled  from '@emotion/styled';
import * as React from 'react';

interface IAuthLayoutProps {
    children: React.ReactNode;
}

const CenteredBox = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

function AuthLayout(props: IAuthLayoutProps) {
    const { children } = props;
    return (
        <CenteredBox>
            {children}
        </CenteredBox>
    );
}

export default AuthLayout;
