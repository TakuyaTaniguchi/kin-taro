import { createTheme, style,styleVariants } from '@vanilla-extract/css';

export const button = styleVariants({
    start: [{
        color : "red"
    }],
    end: [{
        color : "blue"
    }]
})