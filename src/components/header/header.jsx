import React from 'react';
import { PageTopBar } from '../pageTopBar/pageTopBar';
import HeaderTop from './headerTop';
import HeaderBelow from './header_below/headerBelow';
import HeaderMiddle from './header_middle/headerMiddle';

const Header = () => {
  return (
    <div>
        <PageTopBar />
        <HeaderTop />
        <HeaderMiddle />
        <HeaderBelow />
    </div>
  );
}

export default Header;
