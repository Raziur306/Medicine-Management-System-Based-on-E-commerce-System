'use client'
import { CssBaseline, ThemeOptions, ThemeProvider, createTheme } from "@mui/material";
import { Children } from "react";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";

const themeOptions: ThemeOptions = {

}

const theme = createTheme(themeOptions);
export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    return (
        <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    )
}