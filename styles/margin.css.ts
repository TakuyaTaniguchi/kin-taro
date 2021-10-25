import { style , styleVariants} from '@vanilla-extract/css';

export const marginTop = styleVariants({
    16: {marginTop: '16px'},
    32: {marginTop: '32px'},
    48: { marginTop: '48px' },
})