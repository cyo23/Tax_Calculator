import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const HomePage = () => {
  return (
    <div className="container">
      <h1>欢迎使用澳大利亚个人所得税计算器</h1>
      <p>这个应用程序可以帮助您快速估算应缴纳的个人所得税，并了解您的收入在用户群中的排名。</p>
      <Link to="/calculator" className="link-button">
        <button>开始计算</button>
      </Link>
    </div>
  );
};

export default HomePage;
