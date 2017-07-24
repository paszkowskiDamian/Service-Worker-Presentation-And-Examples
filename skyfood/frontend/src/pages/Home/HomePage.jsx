import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { TopBar } from './elements'

export function HomePage(props) {
    return (
        <MuiThemeProvider>
            <TopBar />
        </MuiThemeProvider>
    )
} 