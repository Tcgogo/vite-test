import { ReactComponent as ReactLogo } from '@assets/react.svg';
import { useEffect } from 'react';
import styles from './index.module.scss';
// import Worker from './worker.js?worker';';
import init from './fib.wasm?init';
// // 1. 初始化 Worker 实例
// const worker = new Worker();
type FibFunc = (num: number) => number;
// // 2. 主线程监听 worker 的信息
// worker.addEventListener('message', (e) => {
//   console.log(e.data);
// });
import img1 from '@assets/img1.png';
import img2 from '@assets/img2.jpg';
import SvgIcon from '../SvgIcon';

import ids from 'virtual:svg-icons-names';

console.log(
  '%c [ids]-18',
  'font-size:13px; background:#336699; color:#fff;',
  ids
);

const imgs = Object.values(ids).map((mod) => {
  const fileName = mod.split('-').pop();
  const [svgName] = fileName.split('.');
  return svgName;
});

init({}).then(({ exports }) => {
  console.log(
    '%c [exports]-15',
    'font-size:13px; background:#336699; color:#fff;',
    exports.memory
  );
  const fibFunc = exports.fib as FibFunc;
  console.log(
    '%c [fibFunc]-21',
    'font-size:13px; background:#336699; color:#fff;',
    fibFunc
  );
  console.log('Fib result:', fibFunc(10));
});

export function Header() {
  return (
    <p className={`text-15px text-center ${styles.header}`}>
      {imgs.map((img) => (
        <SvgIcon name={img} key={img} className="w-20 h-20"></SvgIcon>
      ))}
      <ReactLogo></ReactLogo>
    </p>
  );
}
