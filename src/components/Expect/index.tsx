import React from 'react'
import styles from './index.module.less';


export default function () {
    return (
        <div className={styles.expect}>
            {/* <h3>就职意向</h3>
            <div className="line" /> */}
            <div className={styles.main}>
                <div>
                    <i>求职方向：</i>
                    <span>Web前端（H5）开发</span>
                </div>
                <div>
                    <i>到岗时间：</i>
                    <span>随时到岗</span>
                </div>
                <div>
                    <i>期望薪资：</i>
                    <span>10k-11k</span>
                </div>
            </div>
        </div>
    )
}