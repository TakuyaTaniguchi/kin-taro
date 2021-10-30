import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { format,parseISO,parse } from 'date-fns'
import {useState, useEffect} from 'react';
import Link from 'next/link'
import {marginTop} from '../../styles/margin.css'
import { calender_header,calender_body} from '../../styles/calender.css'
import Header from '../../components/header'


const isServer = () => typeof window === 'undefined';

function dmat(props: any) {

    new Date()
    return <div>{ props.time }</div>
  }

function Date() {
    const stg = localStorage.getItem('attendance')
    if (stg) {
        const data = JSON.parse(stg)
        const elm = data.map((v, index) => {
            return (
                <div key="index" className={ `${marginTop['16']} ${calender_body}` }>
                    { v.date && <div>{format(parseISO(v.date), 'yyyy/MM/dd')}</div>}
                    {v.start && <div>{format(parseISO(v.start), 'HH:mm')}</div>}
                    {v.end && <div>{format(parseISO(v.end), 'HH:mm')}</div>}
                    <div>
                        <span>{ v.startRest && format(parseISO(v.startRest), 'HH:mm')}</span>
                        <span>〜</span>
                        <span>{ v.endRest && format(parseISO(v.endRest), 'HH:mm')}</span>
                    </div>
                </div>
            )
        })

        return elm
    } else {
        return <div>記録がありません。</div>
    }
}

export default function Calender() {

  return (
    <div className={styles.container}>
        <Header/>
          <h1>勤怠記録</h1>
          <h2>10月</h2>
        <div className={ calender_header }>
            <div>日付</div>
            <div>開始</div>
            <div>終了</div>
            <div>休憩</div>
        </div>

        {!isServer() && <Date />}
    </div>
  )


}
