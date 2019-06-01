import React, { Component } from 'react'
import styles from './index.module.less'
import jsonp from 'jsonp'
// import {notification} from 'onsenui'

interface Istate {
  local: any,
  result: any,
  time: Date
}

let timer: any = null

export default class TopWeather extends Component {
  state: Istate = {
    local: '',
    time: new Date(),
    result: {
      sk: {},
      today: {}
    }
  }
  render() {

    const {sk, today} = this.state.result
    const {time} = this.state
    let maxTemp = ''
    let minTemp = ''
    if (today.temperature) {
      const reg = today.temperature.match(/(\d)+/g)
      minTemp = reg[0]
      maxTemp = reg[1]
    }
    const day7 = ['一', '二', '三', '四', '五', '六', '七']
    return (
      <div className={styles['weather-top']}>
        <div className={styles.warp}>
          <div className={styles.left}>
            <span className={styles.time}>
              {time.getHours()}<i>:</i>{time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}
            </span>
            <p className={styles.day}>
              {time.getMonth() + 1}月{time.getDate()}, 周{day7[time.getDay() - 1]}
            </p>
          </div>
          <div className={styles.right}>
              <div className={styles.weather}>
                <span>{today.weather}</span>
                <span className={styles['current-temp']}>{sk.temp}</span>
                <span className={styles['weather-range']}>
                  <i>{maxTemp}</i>
                  <i>{minTemp}</i>
                </span>
              </div>
              <div className={styles.address}>{today.city}</div>
              <div className={styles.air}>空气湿度 {sk.humidity}</div>
              <div className={styles['updata-time']}>
                <p>天气更新于 {sk.time}</p>
                <i></i>
              </div>
          </div>
        </div>
      </div>
    )
  }

  getData (url: string, option = {}) {
    return new Promise((resolve, reject) => {
      const data = {
        "resultcode":"200",
        "reason":"successed!",
        "result":{"sk":{"temp":"18","wind_direction":"东北风","wind_strength":"5级","humidity":"76%","time":"14:13"},"today":{"temperature":"14℃~22℃","weather":"晴转多云","weather_id":{"fa":"00","fb":"01"},"wind":"持续无风向微风","week":"星期三","city":"成都","date_y":"2019年04月10日","dressing_index":"较舒适","dressing_advice":"建议着薄外套、开衫牛仔衫裤等服装。年老体弱者应适当添加衣物，宜着夹克衫、薄毛衣等。","uv_index":"中等","comfort_index":"","wash_index":"较适宜","travel_index":"较适宜","exercise_index":"较适宜","drying_index":""},"future":{"day_20190410":{"temperature":"14℃~22℃","weather":"晴转多云","weather_id":{"fa":"00","fb":"01"},"wind":"持续无风向微风","week":"星期三","date":"20190410"},"day_20190411":{"temperature":"15℃~23℃","weather":"阴转小雨","weather_id":{"fa":"02","fb":"07"},"wind":"持续无风向微风","week":"星期四","date":"20190411"},"day_20190412":{"temperature":"16℃~23℃","weather":"小雨转多云","weather_id":{"fa":"07","fb":"01"},"wind":"持续无风向微风","week":"星期五","date":"20190412"},"day_20190413":{"temperature":"14℃~22℃","weather":"多云转阵雨","weather_id":{"fa":"01","fb":"03"},"wind":"持续无风向微风","week":"星期六","date":"20190413"},"day_20190414":{"temperature":"12℃~22℃","weather":"多云转小雨","weather_id":{"fa":"01","fb":"07"},"wind":"持续无风向微风","week":"星期日","date":"20190414"},"day_20190415":{"temperature":"15℃~23℃","weather":"阴转小雨","weather_id":{"fa":"02","fb":"07"},"wind":"持续无风向微风","week":"星期一","date":"20190415"},"day_20190416":{"temperature":"16℃~23℃","weather":"小雨转多云","weather_id":{"fa":"07","fb":"01"},"wind":"持续无风向微风","week":"星期二","date":"20190416"}}},
        "error_code":0
      }
      resolve(data)
      // jsonp(url, option, (err: any, data: any) => {
      //   if (err) {
      //     reject(err)
      //   }
      //   resolve(data)
      // })
    })
  }

  async initData (city: string) {
    const cityname = encodeURIComponent(city)
    try {
      const d: any = await this.getData(`http://v.juhe.cn/weather/index?cityname=${cityname}&key=6b1333527278ef25ef6b36e3755efe84`)
      if (d.result) {
        this.setState({
          ...this.state,
          result: d.result
        })      
      }
    } catch (error) {
      // notification.alert('天气收取失败')
      console.log(error)
    }
  }

  getLocaltion (): any {
    return new Promise((resolve, reject) => {
      (window as any).amapLoad  = function(){
        console.log(AMap.Geolocation)
        AMap.plugin('AMap.Geolocation', (...arg: any[]) => {
          new AMap.Geolocation().getCityInfo((...arg: any[]) => {
            console.log(arg)
            if (arg[0] === 'complete') {
              console.log(arg[1])
              resolve(arg[1])
            } else {
              // notification.alert('位置获取失败')
              resolve({})
            }
          })
        })
        // AMap.Geolocation((...arg: any[]) => {
        //   console.log(arg)
        // })
      }
      const url = 'https://webapi.amap.com/maps?v=1.4.14&key=a8d3fbbe209d4bcf6018e6530eea3d27&callback=amapLoad&plugin=AMap.Geolocation';
      const jsapi: HTMLScriptElement = document.createElement('script');
      jsapi.charset = 'utf-8';
      jsapi.src = url;
      document.head.appendChild(jsapi);
    })
  }

  async componentWillMount () {
    timer = setInterval(() => {
      this.setState({
        ...this.state,
        time: new Date()
      })
    }, 1000)
    const {city} = await this.getLocaltion()
    if (!city) {
      console.log('定位失败')
      return false
    }
    this.initData(city)
  }

  componentWillUnmount () {
    clearInterval(timer)
    timer = null
  }
}
