import styled from "styled-components";
import { media } from "../../../styles/responsive";

export const StyledHeaderMiddle = styled.header`

    .headerWrap{
        display: flex;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        padding-top: 14px;
        min-height: 70px;
        ${media.down("sm")}{
            min-height: 50px;
        }

        .headerInner{
            display: flex;
            column-gap: 14px;
            margin: 0 calc(-1 * 14px);
            align-items: center;
            flex-shrink: 0;
        }
        
    }
    .headerLeft{
        /* mobile menu bar icon design here */
        .mobileMenuBar{
            /* padding: 0 14px; */
            margin: 0 14px;
            padding: 0;
            display: flex;
            align-items: center;
            position: relative;
            cursor: pointer;
            line-height: 1;
            display: none;
            ${media.down("xl")}{
                display: block;
            }
            .menuBarIcon{
                color: #000;
                svg{
                    position: relative;
                    z-index: 2;
                    display: block;
                    /* vertical-align: middle; */
                }
            }
        }

        /* mobile menu bar icon design here */



        .headerSearchForm{
            padding: 0 14px;
            ${media.down("md")}{
                display: none;
            }
        }
        
        form{
            position: relative;
        }
        .searchInput{
            padding: 3px 45px 3px 18px;
            position: relative;
            flex-grow: 1;
            padding-right: 45px;
            color: #000;
            border: 1px solid #d2d2d2;
            background-color: transparent!important;
            box-shadow: none!important;
            outline: none;
            min-height: 45px;
            border-radius: 23px;
            width: 270px;
            ${media.down("xl")}{
                width: 209px;
            }
        }
        button{
            position: absolute;
            top: 0;
            right: 0;
            min-width: 45px;
            height: 45px;
            line-height: 45px;
            padding: 0;
            border: 0;
            background-color: transparent;
            span{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                width: 22px;
                height: 22px;
            }
            svg{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
            
        }
    }
    .headerCenter{
        .headerCenterInner{
            margin-left: -144px;
            ${media.down("lg")}{
                margin-left: 0;
            }
        }
        a{
            padding: 5px 0;
            img{
                width: 169px;
                height: 44px;
                ${media.down("lg")}{
                    width: 145px;
                    height: 38px;
                }
                ${media.down("sm")}{
                    width: 120px;
                    height: 32px;
                }
            }
        }
    }
    .headerRightInner{
        display: flex;
        align-content: center;
        justify-content: flex-end;
        align-items: center;

        .SearchIcon{
            display: none;
            ${media.down("md")}{
                display: block;
            }
        }
        .loginIcon{
            ${media.down("md")}{
                display: none;
            }
        }
        .wishListIcon{
            ${media.down("md")}{
                display: none;
            }
        }

        a{
            padding: 0 14px;
            color: #000;
        }
        

        .headerRightImg{
            transition: all .25s cubic-bezier(.645,.045,.355,1);
            &:hover{
                opacity: .5;
                
            }
        }

        .headerRightIcon{
            position: relative;
            .iconBadge{
                padding: 2px 8px;
                background-color: red;
                font-weight: 700;
                font-size: 12px;
                top: -11px;
                right: -15px;
                position: absolute;
                background-color: #e1927f;
                color: #fff;
                border-radius: 50%;
            }
        }

        .headerRightLink{
            position: relative;
            .subMenu{
                margin-top: -5px;
                padding: 7px 10px;
                font-size: 14px;
                line-height: 14px;
                border-radius: 3px;
                position: absolute;
                top: 100%;
                left: 50%;
                background-color: #000;
                color: #fff;
                visibility: hidden;
                white-space: nowrap;
                transform: translateX(-50%);
                box-shadow: 4px 4px 8px rgb(0 0 0 / 30%);
                transition: all .25s cubic-bezier(.645,.045,.355,1);

            }

            &:hover{
                .subMenu{
                    visibility: visible;
                    margin-top: 0;

                }
            }
        }
    }

    
`