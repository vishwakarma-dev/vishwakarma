"use client"; 
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import * as React from 'react';

interface IBuilderLayoutProps {
    children: React.ReactNode;
}

const CenteredBox = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

function BuilderLayout(props: IBuilderLayoutProps) {
    const { children } = props;
    return (
        <CenteredBox>
            {children}
        </CenteredBox>
    );
}

export default BuilderLayout;