
import  styled  from 'styled-components';
import img from '../../../public/image/cta/h_baby_banner_01.jpg'



export const StyledOurProduct = styled.section`



    .image{
        background-image: url(${img});
        width: 100%;
        height: 500px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: start;

        .info{
            max-width: 316px;
            margin-left: 115px;
            .h2{
                font-size: 50px;
                font-weight: 500;
                line-height: 1.44em;
                color: #000;
            }
            .description{
                margin: 20px 0 56px 0;
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
                    &:hover{
                       
                    }
                }
            }
        }
    }
`