import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { format,parseISO,parse } from 'date-fns'
import {useState, useEffect} from 'react';
import Link from 'next/link'
import {header} from '../styles/header.css'

import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import { AppBar,Toolbar,Typography,Button,IconButton} from '@material-ui/core'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);


function TimeFormat(props: any) {
  /**
   * いい感じに見やすいようにformatする
   * ここにf
   */
  const test = new Date()
  return <div>{ props.time }</div>
}


export default function Header() {

  const classes = useStyles();

  return (
    <div className={`${classes.root} ${header}`}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            勤太郎
          </Typography>
          <div>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </div>
          <div>
              <Link href="/calender">
              <a>Calender</a>
              </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
