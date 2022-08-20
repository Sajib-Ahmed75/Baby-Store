import React from "react";
import  styled  from 'styled-components';
import { Wrapper } from "../wrapper/wrapper";
import { THEME } from './../../styles/theme';


const StyledPageTopBar = styled.section`
        padding: 7px 0;
        background-color: ${THEME.colors.primary};
    
    
    div{
        margin: 0 auto;
        line-height: 26px;
        font-weight: 500;
        font-style: normal;
        color: ${THEME.colors.textLight};
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;


export const PageTopBar = () => {
    return (
        <StyledPageTopBar>
            <Wrapper>
                <div>Free Express Shipping on AU orders $200+</div>
            </Wrapper>
        </StyledPageTopBar>
    )
}