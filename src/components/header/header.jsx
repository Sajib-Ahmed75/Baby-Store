import React from 'react';
import { PageTopBar } from '../pageTopBar/pageTopBar';
import HeaderTop from './headerTop';
import HeaderBellow from './header_bellow/headerBellow';
import HeaderMiddle from './header_middle/headerMiddle';

const Header = () => {
  return (
    <div>
        <PageTopBar />
        <HeaderTop />
        <HeaderMiddle />
        <HeaderBellow />
    </div>
  );
}

export default Header;
