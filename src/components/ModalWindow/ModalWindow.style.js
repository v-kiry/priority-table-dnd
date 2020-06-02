import { css } from '@emotion/core';

export default {
  containerModal:css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    background: rgba(0,0,0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  windowModal:css`
    position: relative;
    width: 25vw;
    height: 25vh;
    padding: 30px 25px;
    background: white;
    border-radius: 6px;
  `,

  buttonModal:css`
    position: absolute;
    top: 10px;
    right: 10px;
    height: 18px;
    width: 18px;
    border: none;
    background: none;
    background-image: url("https://img.icons8.com/metro/18/000000/close-window.png");
    cursor: pointer;
    box-sizing: border-box;
  `,
}