import React from 'react';
import { IProps } from './interface';

const Header: React.FC<IProps> = (props: IProps) => {

  const [color, setColor] = React.useState('blue');

  const changeColor = () => {
    setColor('green');
  } 

  return (
    <div className="Header">
      <header className="header">
          <div>{props.logo}</div>
          <div style={{ color }}>函数式组件</div>
          <button onClick={changeColor}>点击换色</button>
      </header>
    </div>
  );
}

export default Header;
