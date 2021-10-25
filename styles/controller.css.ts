import { createTheme, style,styleVariants } from '@vanilla-extract/css';

export const controller = style({
    display: "grid",
    gap: "16px",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr",
})


export const controller_submit = style({
    "gridColumn": "1 / 3"
})