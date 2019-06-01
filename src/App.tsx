import React from 'react'
import styles from './App.module.less'
import Basic from './components/basic'
import Weather from './components/weather'
import Expect from './components/Expect'
import Experience from './components/experience'
import Skill from './components/skill'
import Company from './components/company'

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

function Content (props: React.Props<any>) {
    return (
        <section className={styles.content}>
            {
                props.children
            }
        </section>
    )
}

export default function App () {
    const [value, setValue] = React.useState(0);

    function handleChange(event: any, newValue: any) {
        setValue(newValue);
    }
    return (
        <div className={styles.app}>
            <aside className={styles.left}>
                <Weather />
                <Basic />
            </aside>
            <article className={styles.right}>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label="求职方向"/>
                        <Tab label="项目经验（鼠标左右滑动切换）" />
                        <Tab label="工作经验" />
                        <Tab label="个人技能" />
                    </Tabs>                
                </AppBar>
                <Content>
                    {value === 0 ? <Expect /> : ''}
                    {value === 1 ? <Experience /> : ''}
                    {value === 2 ? <Company /> : ''}
                    {value === 3 ? <Skill /> : ''}
                </Content>
            </article>
        </div>
    )
}