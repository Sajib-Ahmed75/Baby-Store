import  styled  from 'styled-components';





export const StyledCta = styled.div`
    margin-bottom: 100px;
    .ctaSection{
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 30px;
        
        .thumbnail{
            overflow: hidden;
            width: 61%;
            img{
                width: 100%;
                transition: all .75s cubic-bezier(0,0,.2,1);
                &:hover{
                    transform: scale(1.1);
                }
            }
        }
        .ctaInfo{
            width: 35%;
            .h2{
                font-size: 50px;
                font-weight: 500;
                line-height: 1.34em;
                color: #000;
            }
            .description{
                margin-top: 19px;
                font-size: 16px;
                line-height: 1.75;
                display: inline-block;
                color: #000;
            }
        }
    }


`