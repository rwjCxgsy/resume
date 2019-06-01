import React from 'react'
import styles from './index.module.less'
import G2 from '@antv/g2';
const {useEffect} = React
export default function () {
    useEffect(() => {
        const data = [
            { genre: '电脑开关机', value: 100 },
            { genre: 'js', value: 70 },
            { genre: '布局（div+css）', value: 70 },
            { genre: 'webpack', value: 40 },
            { genre: 'vue', value: 70 },
            { genre: 'react', value: 60 },
            { genre: 'es6+', value: 60 },
            { genre: 'ts', value: 45 }
          ]; // G2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
          // Step 1: 创建 Chart 对象
          const chart = new G2.Chart({
            container: 'c1', // 指定图表容器 ID
            width : 600, // 指定图表宽度
            height : 300 // 指定图表高度
          });
          // Step 2: 载入数据源
          chart.source(data);
          // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
          chart.interval().position('genre*value').color('genre')
          // Step 4: 渲染图表
          chart.render();
    })
    return (
        <div className={styles.skill}>
            <div className={styles.main}>
                <div id="c1"/>
                <div>
                    <strong>技能简介</strong>
                    <ol>
                        <li>熟练使用Vue全家桶（使用vue框架两年多）</li>
                        <li>掌握使用react全家桶，对react相关的生态有一定的了解</li>
                        <li>了解使用node.js koa mongodb服务器的简单搭建</li>
                        <li>熟悉js设计模式，数据结构和常用算法</li>
                        <li>熟悉JS的继承，prototype，闭包，正则等有深入掌握，熟悉typescript语法。</li>
                        <li>掌握虚拟dom，dom-diff原理</li>
                        <li>掌握webpack，了解parcel，rollup等打包构建工具</li>
                        <li>了解rxjs loadsh等第三方js工具库，less 等前端工具</li>
                        <li>了解angular，nginx，jinkens自动化部署</li>
                    </ol>
                </div>                
            </div>
        </div>
    )
}