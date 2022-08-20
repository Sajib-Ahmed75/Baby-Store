
import  styled  from 'styled-components';

export const StyledHome = styled.section`




/* card design */

/* Top Categories section start here  */

    .categoriesSection{
        margin-top: 100px;
        margin-bottom: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        row-gap: 60px;
        

        .cardContainer{
            
            

            .categoriesInfo{
                h5{
                    font-size: 20px;
                    line-height: 1.5;
                    font-weight: 600;
                    margin-top: 21px;
                    a{
                        color: #000;
                    }
                }
            }
        } 
    }
/* Top Categories section ends here  */

/* Recommendation section start here  */

    .recommendationSection{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        row-gap: 60px;

        .cardContainer{


            .categoriesInfo{
                h5{
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 1.5;
                    text-align: center;
                    margin-top: 27px;
                    a{
                        color: #000;
                    }
                }
            }
        }
    }


/* Recommendation section ends here  */





    /* both cards section header design  */


    .cardContainer{
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 30px;
            
            .card{
                .thumbnail{
                overflow: hidden;

                }
                img{
                    transition: all .75s cubic-bezier(0,0,.2,1);
                }
                &:hover{
                    img{
                        transform: scale(1.1);
                    }
                }
            }
        }

    .header{
            position: relative;
            width: 100%;
            text-align: center;
            &::after{
                content: "";
                width: 100%;
                height: 1px;
                border-top: 1px dashed #c7c7c7;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
            }
            .h2{
                display: inline-block;
                position: relative;
                padding: 0 40px;
                z-index: 9;
                background: #fff;
                font-size: 36px;
                font-weight: 500;
                line-height: 1.28em;

                
            }
            
        }

    /* two card section header design  */

    /* card design */

    /* testimonial section design start here */
        .testimonialSection{
            margin: 100px 0;
            padding: 100px 0 85px 0;
            background-color: #eaf1f0;
            .header{
                margin-bottom: 80px;
                .h2{
                    background-color: #eaf1f0;
                }
            }
        }
    /* testimonial section design start here */

    /* brand section styled start here */

    .brandSection{
        margin-bottom: 80px;
        .header{
            margin-bottom: 80px;
        }
        .brandContainer{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-row-gap: 20px;

            img{
                cursor: pointer;
                opacity: .3;
                transition: all .75s cubic-bezier(0,0,.2,1);
                &:hover{
                    opacity: 1;
                }
            }
        
           
        }
    }

    /* brand section styled end here */


`