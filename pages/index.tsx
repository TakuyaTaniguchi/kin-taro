import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { format,parseISO,parse } from 'date-fns'
import {useState, useEffect} from 'react';
import Link from 'next/link'
import {button} from '../styles/button.css'


function TimeFormat(props: any) {
  /**
   * いい感じに見やすいようにformatする
   * ここにf
   */
  return <div>{ props.time }</div>
}

export default function Home() {


  const [date, setDate] = useState(format(new Date(), 'yyyy/MM/dd: HH:mm'));
  //Replaces componentDidMount and componentWillUnmount
  useEffect(() => {
    let timerID = setInterval( () => tick(), 1000 );
    return function cleanup() {
        clearInterval(timerID);
      };
  });

  function tick() {
    setDate(format(new Date(),'yyyy/MM/dd: HH:mm'));
  }

  const [start, setStart] = useState(null as null | string);
  const [end, setEnd] = useState(null as null | string);
  const [startRest, setStartRest] = useState(null as null | string);
  const [endRest, setEndRest] = useState(null as null | string);

  const [aaaaa] = useState('aaaaaaaaa');

  /**
   * それぞれの値付きでその時の時刻を保存する関数を用意する
   * 開始、終了、休憩開始、休憩終了
   * タイムゾーン怪しい
   * 日付つきでlocalstrageに保存する
   */

  const read = () => {
    
      // const read = JSON.parse(localStorage.getItem('attendance'))
    // console.log(format(parseISO(read[read.length -1 ].date),'yyyy/MM/dd: HH:mm:ss'))
  }

  const submit = () => {

    /**
     * バリデーション
     * 初回の追加
     * 今のストレージをを読んで追加するか
     * localstrageに保存する
     */

    const stg = localStorage.getItem("attendance")
    if (stg) {
      const attendance = JSON.parse(stg)

      attendance.push({
        'date': new Date(),
        'start': parse(start, 'yyyy/MM/dd: HH:mm', new Date()),
        'end': parse(end, 'yyyy/MM/dd: HH:mm', new Date()),
        'startRest': parse(startRest, 'yyyy/MM/dd: HH:mm', new Date()),
        'endRest': parse(endRest, 'yyyy/MM/dd: HH:mm', new Date()),
        })

      const setjson = JSON.stringify(attendance);
      localStorage.setItem('attendance', setjson);
    } else {

      const data = [
        {
          'date': new Date(),
          'start': new Date(),
          'end': new Date(),
          'startRest': new Date(),
          'endRest': new Date(),
          }
      ]
      const setjson = JSON.stringify(data);
      localStorage.setItem('attendance', setjson);
    }



  }



  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.top}>{date}</div>
        <div>
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
        <div className={styles.controller}>
          <button className={button['start']} onClick={() => setStart(date)}>開始</button>
          <button className={button['end']} onClick={() => setEnd(date)}>終了</button>
          <button className={button['rest']} onClick={() => setStartRest(date)}>休憩開始</button>
          <button className={button['rest']} onClick={() => setEndRest(date)}>休憩終了</button>

          <button className={button['submit']} onClick={() => submit()}>保存</button>

        </div>
        <div className={styles.display}>
          <div>
            <span>{start}</span>~<span>{end}</span>
          </div>
          <div>
            <TimeFormat time={start}/>
            <span>{startRest}</span>~<span>{ endRest }</span>
          </div>
        </div>
      </main>
    </div>
  )


}
