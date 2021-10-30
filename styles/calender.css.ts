import { createTheme, style,styleVariants } from '@vanilla-extract/css';
import {green, red, yellow, green_high, orange, blue, white} from './base-color.css'

export const calender_header = style({
    display: "grid",
    gridTemplateColumns: "1fr 46px 46px 1fr",
    width: "100%",
    alignItems: "center",
    gap: "12px",
    backgroundColor: "#3f51b5",
    color: "white",
    padding: "4px 8px",
})


export const calender_body = style({
    display: "grid",
    gridTemplateColumns: "1fr 46px 46px 1fr",
    width: "100%",
    alignItems: "center",
    gap: "12px",
    borderBottom: "solid 2px",
    padding: "4px 8px",
})