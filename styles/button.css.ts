import { createTheme, style,styleVariants } from '@vanilla-extract/css';
import { green,red,yellow,green_high,orange } from './base-color.css'

const base = style({
    padding: "6px 48px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid black",
})



export const button = styleVariants({
    start: [base,{
        backgroundColor : green_high
    }],
    end: [base,{
        backgroundColor : red
    }],
    rest: [base, {
        backgroundColor: yellow
    }],
    submit: [base,{
        backgroundColor : green
    }]
})