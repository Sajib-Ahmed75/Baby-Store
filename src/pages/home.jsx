import React from 'react';
import { BrandData } from '../components/brandData/brandData';
import { Slider }  from '../components/cardSlider/slider';
import { CardData } from '../components/categories/cardData';
import { Categories } from '../components/categories/categoriesData';
import { Cta } from '../components/cta/cta';
import { OurProduct } from '../components/ourProduct/ourProduct';
// import { PricingCard } from '../components/pricingCard/pricingCard';
// import { PageTopBar } from '../components/pageTopBar/pageTopBar';
import { Wrapper } from '../components/wrapper/wrapper';
import { Hero } from '../hero/hero';
import { Card } from './../components/categories/categories';
import { StyledHome } from './homeStyles';


const Home = () => {
  return (
    
    <StyledHome>
        <Hero />
        <Wrapper>
          
          <section className="categoriesSection">

            <div className="header">
              <h2 className="h2">Top Categories</h2>
            </div>

            <div className="cardContainer">

              {Categories.map((props,i)=>{
                const {image,title,number}=props
                  return(
                    <Card key={i} image={image} title={title} number={number}/>
                  )
              })}

            </div>

          </section>

          {/* <PricingCard /> */}

          <Cta />



          <section className="recommendationSection">
              <div className="header">
                <h2 className="h2">
                  Recommendation
                </h2>
              </div>
              <div className="cardContainer">
                {CardData.map((props,i)=>{
                  const {image,title}=props
                    return(
                      <Card key={i}  image={image} title={title} />
                    )
                })}
              </div>
          </section>
        </Wrapper>
          <section className="testimonialSection">
            <div className="header">
              <h2 className="h2">Our Lovely Customers</h2>
            </div>
            <div className="sliderContainer">
              <Slider />
            </div>
          </section>
        <Wrapper>
          <section className="brandSection">
            <div className="header">
              <h2 className="h2">
                Shop by Brands
              </h2>
            </div>
            <div className="brandContainer">
              {BrandData.map((props,i)=>{
                const {image}=props
                return(
                  <img key={i} src={image} alt="brand image" />
                )
              })

              }
            </div>
          </section>
          

          <OurProduct />
        </Wrapper>
    </StyledHome>

    
  
  );
}

export default Home;
