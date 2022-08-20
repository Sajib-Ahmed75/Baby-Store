import React from 'react';
import { StyledHeaderMiddle } from './styles';

const HeaderMiddle = () => {
  return (
    <StyledHeaderMiddle>
        <div className="headerWrap">
            <div className="headerLeft">
                <div className="headerInner">
                    <div className="headerSearchForm">
                        <form role="search" method="get"  action="/">
                            <input type="text" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="headerCenter"></div>
            <div className="headerRight"></div>
        </div>
    </StyledHeaderMiddle>
  );
}

export default HeaderMiddle;
