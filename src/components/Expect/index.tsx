import React from 'react'
import styles from './index.module.less';


export default function () {
    return (
        <div className={styles.expect}>
            {/* <h3>就职意向</h3>
            <div className="line" /> */}
            <div className={styles.main}>
                <div>
                    <i></i>
                    <span>Web前端（H5）开发</span>
                </div>
                <div>
                    <i></i>
                    <span>随时到岗</span>
                </div>
                <div>
                    <i></i>
                    <span>10k-11k</span>
                </div>
            </div>
        </div>
    )
}