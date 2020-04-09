import { createGlobalStyle } from 'styled-components';

import RobotoRegularWoff from './Roboto-Regular.woff';
import RobotoRegularWoff2 from './Roboto-Regular.woff2';
import AntonRegularWoff from './AntonRegular.woff';
import AntonRegularWoff2 from './AntonRegular.woff2';
import LacquerRegularWoff from './LacquerRegular.woff'
import LacquerRegularWoff2 from './LacquerRegular.woff2'
import TomorrowRegularWoff from './Tomorrow-Regular.woff'
import TomorrowRegularWoff2 from './Tomorrow-Regular.woff2'

export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('sans-serif'),
        url(${RobotoRegularWoff2}) format('woff2'),
        url(${RobotoRegularWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Anton';
        src: local('Anton'), local('sans-serif'),
        url(${AntonRegularWoff2}) format('woff2'),
        url(${AntonRegularWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Lacquer';
        src: local('Lacquer'), local('sans-serif'),
        url(${LacquerRegularWoff2}) format('woff2'),
        url(${LacquerRegularWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Tomorrow';
        src: local('Tomorrow'), local('sans-serif'),
        url(${TomorrowRegularWoff2}) format('woff2'),
        url(${TomorrowRegularWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
