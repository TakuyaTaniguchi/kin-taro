import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { format,parseISO,parse, setDate } from 'date-fns'
import {useState, useEffect} from 'react';
import Link from 'next/link'
import {marginTop} from '../../styles/margin.css'
import { calender_header,calender_body} from '../../styles/calender.css'
import Header from '../../components/header'
import { thisMonth } from '../../components/this-month'

const isServer = () => typeof window === 'undefined';


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

let date = 'aaaaaa'

function selectedDate(e:any) {
    if (process.browser) {
        console.log(e.target.value)

    }

}

export default function Calender() {


    const [date, setDate] = useState('')


    useEffect(() => {
        if (process.browser) {
            const monthControl = document.querySelector('input[type="month"]');
            monthControl.addEventListener("input", selectedDate);
            return () => monthControl.removeEventListener("input", selectedDate);
        }

      }, []);

  return (
    <div className={styles.container}>
        <Header/>
          <h1>勤怠記録</h1>
          <h2>{thisMonth()}</h2>
        <div>
              <label>開始</label>
              <input type="month" name="month"></input>
              { date }
        </div>
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
