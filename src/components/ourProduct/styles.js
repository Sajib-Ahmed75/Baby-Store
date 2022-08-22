
import  styled  from 'styled-components';
import img from '../../../public/image/cta/h_baby_banner_01.jpg'
import { media } from './../../styles/responsive';



export const StyledOurProduct = styled.section`
    width: 100%;


    .image{
        background-image: url(${img});
        width: 100%;
        height: 500px;
        object-fit: cover;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        /* display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: start; */
        .info{
           ${media.down("sm")}{
                display: none;
            } 
        }
        ${media.down("sm")}{
            min-height: 300px;
            width: 100%;
        }
        
    }    

        .info{
            max-width: 316px;
            margin-left: 115px;
            ${media.down("sm")}{
                width: 100%;
                margin-left: 0;
                
            }
            
            .h2{
                font-size: 50px;
                font-weight: 500;
                line-height: 1.44em;
                color: #000;
                ${media.down("sm")}{
                    font-size: 28px;
                    text-align: center;
                }
            }
            .description{
                margin: 20px 0 56px 0;
                ${media.down("sm")}{
                    text-align: center;
                }
            }
            .btn{
               
                
                a{
                    padding: 13px 45px;
                    background-color: red;
                    cursor: pointer;
                    line-height: 23px;
                    background-color: #e1927f;
                    color: #fff;
                    border-radius: 23px;
                    font-size: 16px;
                    font-weight: 500px;
                     ${media.down("sm")}{
                        display: block;
                        text-align: center;
                    }
                    &:hover{
                       
                    }
                }
            }
        }
    
    
`