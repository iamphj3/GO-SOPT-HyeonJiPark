import { css, DefaultTheme } from 'styled-components';

const colors = {
  Weather_Background: '#F8F8FF',
  Weather_Main: '#94A1FF',
  Weather_White: '#ffffff',
  Weather_Sky: '#a8ecfd',
  Weather_Cloud: '#80aff1',
  Weather_Rain: '#003b71',
};

const fonts = {
  Pretendard_Title: css`
    font-family: 'Pretendard-Regular';
    font-size: 2.5rem;
    font-weight: 900;
    font-style: normal;
    line-height: 4rem;
  `,

  Pretendard_Search: css`
    font-family: 'Pretendard-Regular';
    font-size: 1.8rem;
    font-weight: 100;
    font-style: normal;
    line-height: 3rem;
  `,
  Pretendard_Content1: css`
    font-family: 'Pretendard-Regular';
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.4rem;
  `,
  Pretendard_Content2: css`
    font-family: 'Pretendard-Regular';
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};
export default theme;
