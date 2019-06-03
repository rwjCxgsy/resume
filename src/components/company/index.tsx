import React from 'react'
import styles from './index.module.less'
import classNames from 'classnames'

const {useEffect} = React
const list  = [
    {
        type: 0,
        time: '2016-3-1',
        name: '家（实习期间）',
        des: '开始自学'
    },
    {
        type: 0,
        time: '2016-6-1',
        name: '学校',
        des: '毕业'
    },
    {
        type: 1,
        time: '2016-7-1',
        name: '成都纬视科技有限公司',
        des: '该公司主要业务是视频和音频业务，广电业务，FM设备，也做外包项目',
        my: [
            '项目前期根据的项目组讨论并协商项目整体流程逻辑和功能设计 ',
            '和UI协商完成产品设计图和界面功能实现',
            '独立将UI设计图高度还原H5页面展示并实现页面交互功能'
        ]
    },
    {
        type: 0,
        time: '2017-3-1',
        name: '开始接触vue',
    },
    {
        type: 1,
        time: '2018-4-1',
        name: '四川汇安融信息技术有限公司',
        des: '该公司有运营自己产品汇花收银台app和政府外包项目（成都市二医院，成都工商联等）',
        my: [
            '成都市第二人民医院支付宝/微信端挂号预约（Vue），包括后期新功能的添加和修改 ',
            '维护支付宝公众号汇花页面（vue）更新，淘宝支付宝新用户拉新等等 活动更新。',
            '开发金融云平台移动端（vue）项目 （夭折）',
            '开发汇花app内嵌商户入驻H5（vue）项目，以及后续维护和更新 ',
            '公司汇花所有活动项目H5（vue）页面'
        ]
    },
    {
        type: 0,
        time: '2018-8-1',
        name: '开始接触react',
    }
]

export default function () {
    useEffect(() => {

    })

    function getPOsition (time: string): string {
        console.log(time)
        const range: number = new Date().getTime() - new Date('2016-3-1').getTime()
        const _: number = new Date(time).getTime() - new Date('2016-3-1').getTime()
        console.log(_ / range)
        const result = Math.floor((_ / range) * 100)
        console.log(result + '%')
        return result + '%'
    }

    function timeYearMonth (time: string): string {
        const {length} = time
        return time.substr(0, length - 2)
    }
    return (
        <div className={styles.company}>
            <div className={styles.timeLine}>
                {
                    list.map((v: any, i: number) => {
                        return <div key={i} className={classNames({
                            isCom: v.type === 1
                        })} style={{
                            left: getPOsition(v.time)
                        }}>
                            <strong>{timeYearMonth(v.time)}</strong>
                            <h6>{v.name}</h6>
                            <p>{v.des}</p>
                            {
                                v.type === 1 ? 
                                <section>
                                    我的职责
                                    <ol>
                                        {
                                            v.my.map((vv: any ,ii: number) => {
                                                return <li key={ii}>{vv}</li>
                                            })
                                        }
                                    </ol>
                                </section> : ''                            
                            }

                        </div>
                    })
                }
            </div>
        </div>
    )
}