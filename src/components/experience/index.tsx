import React from 'react'
import styles from './index.module.less';
// import boot from './boot.js'
import Swiper from 'swiper/dist/js/swiper.js'

import 'swiper/dist/css/swiper.min.css'

import classNames from 'classnames';

const {useEffect}  = React

const list: any[] = [
    {
        time: ['2018/4', '2019/5'],
        name: '成都市第二人民医院',
        job: 'web前端',
        des: '该项目是我们公司给成都市第二医院（基于vue）做的移动端用户使用的预约挂号项目。功能包括预约挂号，问卷调查，体检报告，就诊人，门诊缴费等',
        url: 'http://ipay.cd2120.com',
        myWork: [
            '独立完成就诊人，满意度调查，排号等待，预约详情等多个功能模块',
            '跟进医院后续新增功能和维护'
        ],
        myHarvest: [
            '更加了解vue生态相关插件（vue-auto-routing、vuet等等）的使用，减少代码量',
            '更加规范的代码，提高了组件的复用性',
            '更加熟悉支付宝微信h5内置宿主api'
        ],
        tags: [
            'vue全家桶', '团队合作', 'vue生态插件', 'vux'
        ]
    },
    {
        time: ['2018/10', '2019/1'],
        name: '汇花收银台商户入驻',
        job: 'web前端',
        des: '包括商户入驻，开通代开发票，聚合支付，花呗分期，支付宝预授权，管理门店，管理店员，修改门店，修改店员，修改密码等页面，与native交互获取数据等，页面效果接近于原生app。',
        url: 'https://kf.huihua365.com/kf-merchant-enter/index.html#/',
        myWork: [
            '独立完成该项目所以h5页面及数据调试，提取公共组件以便于复用，减少代码量，项目完成后的更新以及日常维护',
            '使用F2图表库进行门店账户数据可视化展示',
            '使用postcss实现css兼容以及页面尺寸响应式'
        ],
        myHarvest: [
            '更加优雅的表单字段验证功能',
            '利用canvas图片压缩上传功能',
            '利用vuex表单填写数据的合并于拆分和保存，保证返回数据不丢失'
        ],
        tags: [
            'vue全家桶', 'antv/f2', 'canvas图片压缩上传', 'flex布局'
        ]
    },
    {
        time: ['2017/11', '2018/1'],
        name: '纬视听Vue单页WebAPP',
        job: 'web前端',
        des: '该项目是APP内嵌h5，包含（电视直播）（电视点播）（电视）（电台直播）（电台 点播）（电台）（新闻）（资讯）（用户）9个模块以及第三方登录',
        url: 'http://www.yjlmall.com:8100',
        myWork: [
            '独立完成所有前端界面以及数据调试',
        ],
        myHarvest: [
            '开始使用vue-cli构建应用',
            '熟练掌握了vuex和vue-router的使用'
        ],
        tags: [
            'vue-cli', '独立完成', 'vue全家桶', 'flex布局'
        ]
    },
    {
        time: ['2017/6', '2017/10'],
        name: '博瑞智慧酒店自主选房项目（夭折了）',
        job: 'web前端',
        des: '1、自主选房app包含酒店基本选酒店和订房功能，还增加了独特选择楼层后选择楼层某一间房进行单独下单支付。 2、电视模块包括直播和点播（有付费节目和免费节目）实现手机观看和电视上观看，电视上付费节目下单可通过手机APP扫码完成支付',
        myWork: [
            '独立完成所有前端界面以及数据调试',
        ],
        myHarvest: [
            '更加灵活运用flex布局，以及解决出现的相关兼容性',
            '熟悉高德地图定位iapi',
            '更加熟悉了vue'
        ],
        tags: [
            'vue', '独立完成', '高德地图城市定位'
        ]
    },
    {
        time: ['2017/4', '2017/7'],
        name: '大竹微电视H5新媒体',
        job: 'web前端',
        des: '1、包括大竹电视台的电视直播和点播播放功能模块 2、还有资讯模块提供当地的新闻，通知，政务新闻的展示等',
        url: 'http://175.153.153.53:8090/index.html',
        myWork: [
            '独立完成所有前端界面以及数据调试',
        ],
        myHarvest: [
            '开始接触vue，对vue有了初步的了解以及运用在项目中'
        ],
        tags: [
            'vue', '独立完成', '高德地图城市定位'
        ]
    },
    {
        time: ['2016/11', '2017/1'],
        name: '圣仁康医疗集团及旗下医院（pc）',
        job: 'web前端',
        des: '1、该项目是一个内容展示性网页pc端和移动端通用一套代码，内容包括医院新闻，医疗，医疗技术，特殊科室和医疗专家展示。2、8个医院展示网站统一一个模板，包括医院新闻介绍和医生介绍',
        url: 'http://www.senico.com.cn',
        myWork: [
            '独立完成所有前端界面以及数据调试',
        ],
        myHarvest: [
            '熟悉了原生js、dom'
        ],
        tags: [
            '原生js', '独立完成'
        ]
    }
]

export default function () {
    useEffect(() => {
        new Swiper('.slider', {
            effect: 'cube',
            // grabCursor: true,
            // loop: false,
            // keyboard: false,
            // spaceBetween: 0,
            // slidesPerView: 'auto',
            // speed: 300,
            cubeEffect: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 100,
                shadowScale: 0.6
            },
            // breakpoints: {
            //     480: {
            //         spaceBetween: 0,
            //         centeredSlides: true
            //     }
            // },
            simulateTouch: true,
            // navigation: {
            //     nextEl: '.news-slider-next',
            //     prevEl: '.news-slider-prev'
            // },
            // pagination: {
            //     el: '.news-slider__pagination',
            //     clickable: true
            // },
        })
    })
    return (
        <div className={styles.experience}>
            {/* <h4>项目经验（部分）</h4>
            <div className="line" /> */}
            <div className={styles.main}>
                <div className={classNames(['slider', styles['slider']])}>
                    <div className="slider__wrp swiper-wrapper">
                        {
                            list.map((v: any, i) => {
                                return (
                                    <div className={classNames(['swiper-slide', styles['swiper-slide']])} key={'experience_id_' + i}>
                                        <div className={styles.time}>
                                            <div>
                                                <i>{v.time[0].split('/')[0]}</i>
                                                <span>{v.time[0].split('/')[1]}</span>
                                            </div>
                                            <div>
                                                <i>{v.time[1].split('/')[0]}</i>
                                                <span>{v.time[1].split('/')[1]}</span>
                                            </div>
                                        </div>
                                        <h4>{v.name}</h4>
                                        <span>{v.job}</span>
                                        <p>{v.des}</p>
                                        {
                                            v.url ? <a href={v.url}>{v.url}</a> : ''
                                        }
                                        <div className={styles.sec}>
                                            <h5>我的职责</h5>
                                            <ol>
                                                {
                                                    v.myWork.map((v: any, i: number) => {
                                                        return <li key={i}>{v}</li>
                                                    })
                                                }
                                            </ol>
                                        </div>
                                        <div className={styles.sec}>
                                            <h5>我的收获</h5>
                                            <ul>
                                                {
                                                    v.myHarvest.map((v: any, i: number) => {
                                                        return <li key={i}>{v}</li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className={styles.sec}>
                                            <div>
                                                {
                                                    v.tags.map((v: any, i: number) => {
                                                        return <span key={i}>{v}</span>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* <div className="news-slider__ctr">
                    <div className="news-slider__arrows">
                        <button className="news-slider__arrow news-slider-prev">
                            left
                        </button>
                        <button className="news-slider__arrow news-slider-next">
                            right
                        </button>
                    </div>
                    <div className="news-slider__pagination"></div>
                </div> */}
            </div>
        </div>
    )
}