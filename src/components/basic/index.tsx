import React from 'react'

import styles from './index.module.less'
export default function () {
    return (
        <div className={styles.author}>
            <h2>基本信息</h2>
            <div className="line"></div>
            <div>
                <i className="iconfont" dangerouslySetInnerHTML={{__html: '&#xe658;'}}/>
                <span>任伟君</span>
            </div>
            <div>
                <i className="iconfont" dangerouslySetInnerHTML={{__html: '&#xe66b;'}}/>
                <span>男</span>
            </div>
            <div>
                <i className="iconfont" dangerouslySetInnerHTML={{__html: '&#xe60b;'}}/>
                <span>24岁</span>
            </div>
            <div>
                <i className="iconfont" dangerouslySetInnerHTML={{__html: '&#xe661;'}}/>
                <span>汉族</span>
            </div>
            <div>
                <i className="iconfont" dangerouslySetInnerHTML={{__html: '&#xe660;'}}/>
                <span>175cm/65kg</span>
            </div>
            <div>
                <i className="iconfont" dangerouslySetInnerHTML={{__html: '&#xe665;'}}/>
                <span>四川成都双楠</span>
            </div>
            <div>
                <i className="iconfont" dangerouslySetInnerHTML={{__html: '&#xe66d;'}}/>
                <span>3年经验</span>
            </div>
            <div>
                <i className="iconfont" dangerouslySetInnerHTML={{__html: '&#xe607;'}}/>
                <a href="tel:18108227370">18108227370</a>
            </div>
            <div>
                <i className="iconfont" dangerouslySetInnerHTML={{__html: '&#xe60a;'}}/>
                <a href="mailto:847679857@qq.com">847679857@qq.com</a>
            </div>
            <div>
                <i className="iconfont" dangerouslySetInnerHTML={{__html: '&#xe66e;'}}/>
                <span>喜欢新技术，js知识扎实</span>
            </div>
        </div>
    )
}