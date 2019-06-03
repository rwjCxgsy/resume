import React from 'react'
import styles from './App.module.less'
import Basic from './components/basic'
import Weather from './components/weather'
// import Expect from './components/Expect'
import Experience from './components/experience'
import Skill from './components/skill'
import Company from './components/company'

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

// import { withStyles } from '@material-ui/core/styles';
// import Dialog from '@material-ui/core/Dialog';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
// import Typography from '@material-ui/core/Typography';

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
                        <Tab label="工作经验" />
                        <Tab label="项目经验（鼠标左右滑动切换）" />
                        <Tab label="个人技能" />
                    </Tabs>                
                </AppBar>
                <Content>
                    {value === 1 ? <Experience /> : ''}
                    {value === 0 ? <Company /> : ''}
                    {value === 2 ? <Skill /> : ''}
                </Content>
            </article>
        </div>
    )
}