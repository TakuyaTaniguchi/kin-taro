import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { format,parseISO,parse } from 'date-fns'
import {useState, useEffect} from 'react';
import Link from 'next/link'
import {header} from '../styles/header.css'


export default function Header() {
  return (
        <div className={ header }>
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
    </div>
  )
}
