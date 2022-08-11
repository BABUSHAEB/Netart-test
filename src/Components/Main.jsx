import React from 'react'
import styled from 'styled-components';
import '../App.css';

let MainContainer = styled.div`


.flex-box{
    display: flex;
    flex-direction: row;
  
  }
  
  .image-Trophy{
    max-width: 22rem;
    height: 45rem;
    padding: 2rem;
  
  }
  
  .main-heading{
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .image-second{
  width: 95%;
  }
  
  .second-section{
    text-align: center;
  }
  .pd{
    padding:0 1.5rem;
  }
  .rs-align{
    padding:0.3rem 0.1rem;
    text-align:left;
  }
  .p-size{
    font-size: 0.97rem;
  }

  .product-images{
    width: 80vw;
  }
  .section-section-box{
    margin: 0 10px;
    border-bottom: 1.5px solid #ff0000b8;
  }
  span{
    color: red;
  }
  .font-size{
    padding: 0 1rem;
  }
  
@media (min-width: 200px) and (max-width: 680px){
    .flex-box{
        display: flex;
        flex-direction: column;
        text-align:center;
        align-items:center;
      
      }
      .main-heading{
        font-size: 0.8rem;
        font-weight: bold;
    
      }
      .second-section{
        text-align: center;
      }
      .rs-align{
        padding:0.3rem 0.1rem;
        text-align:left;
      }
      .p-size{
        font-size: 0.9rem;
      }
      .rs-size{
        text-align:center;
        padding: 0 2px;

      }
      .pd {
        padding: 0;
      }
      .image-Trophy{
        padding: 0;
      
      }
      .font-size{
        font-size:0.7rem;
        text-align:center;
        padding: 0 0.3px;
      
      }
      .product-images{
        width: 90vw;
      }
}


`;

export default function Main() {
    return (
        <MainContainer>
            <main>
                <section className='flex-box'>
                    <div className='left-section'>
                        <img className='image-Trophy' src="Images/1.png" alt="Trophy" srcset="" />
                    </div>
                    <div>
                        <p className='main-heading'>  C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
                        <ul >
                            <li className='rs-align'>
                                C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                            </li>
                            <li className='rs-align'>
                                C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                            </li>
                        </ul>
                        <img className='image-second' src="Images/2.png" alt="" srcset="" />
                        <p className='pd rs-size'>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                    </div>
                </section>
                <section className='second-section'>
                    <div className='section-section-box'>
                        <p className='pd rs-pd p-size'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
                        <img className='product-images' src="Images/3.png" alt="Product Images" srcset="" />
                        <p className='font-size'>Valves - Pumps - Pipes - IoT Drives &amp; Controllers - Wires &amp; Cables - Solar Systems - Motors </p>
                    </div>
                    <div>
                        <p className='main-heading'> C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
                        <p className='font-size'>
                            CHEMICALS &amp; PROCESS <span>|</span> POWER <span>|</span> WATER &amp; WASTE WATER <span>|</span> OILS &amp; GAS <span>|</span> PHARMA <span>|</span> SUGARS &amp; DISTILLERIES <span>|</span> PAPER &amp; PULP <span>|</span> MARINE &amp; DEFENCE <span>|</span> METAL &amp; MINING <span>|</span> FOOD &amp; BEVERAGE <span>|</span> PETROCHEMICAL &amp; REFINERIES <span>|</span> SOLAR <span>|</span> BUILDING <span>|</span> HVAC <span>|</span> FIRE FIGHTING <span>|</span> AGRICULTURE &amp; RESIDENTIAL
                        </p>
                    </div>
                </section>
            </main>
        </MainContainer>
    )
}
