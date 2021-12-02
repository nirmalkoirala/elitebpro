import React from 'react'
import './index.css'
import Profile from "../../images/Pratik.jpeg"
import Profile1 from "../../images/Kunga.jpeg"
import Profile2 from "../../images/Sudarshan.jpeg"
import Profile3 from "../../images/Nirmal.jpeg"
import Profile4 from "../../images/Chintan.jpeg"
import Profile5 from "../../images/Rajan.jpeg"
import Profile6 from "../../images/Sagar.jpeg"


const Team = () => {


    return (
        <div class="container">
        <h1 class="heading">Our Team</h1>
    
        <div class="profiles">
          <div class="profile">
            <img src={Profile1} class="profile-img"/>
    
            <h3 class="user-name">Kunga</h3>
            <h5>Mortgage and Finance</h5>
            <p>Kunga will tell, how you can become mortgage-free, and you can increase your assets and create a multiple property portfolio. Multilingual Kunga looks after Finance and Mortgage.</p>
          </div>
          <div class="profile">
            <img src={Profile} class="profile-img"/>
    
            <h3 class="user-name">Pratik Bhattarai</h3>
            <h5>Educaiton Consultant</h5>
            <p>Pratik is a highly approachable and knowledgeable education agent who strives in providing students with excellent guidance. He is well acquainted with the education system and is committed in providing students with best possible advice helping them to secure a better future.</p>
          </div>
          
          <div class="profile">
            <img src={Profile2} class="profile-img"/>
    
            <h3 class="user-name">Sudarshan Tiwari</h3>
            <h5>Business Advisor and Tax Accountant</h5>
            <p>Sudarshan is a highly knowledgeable, experienced, and qualified Business and Tax accountant. He is passionate about assisting our clients in their best interest and committed to being a part of the journey of their growth. He is well experienced in tax planning services to maximize your cash inflow and your wealth.</p>
          </div>
        </div>
        <div class="profiles">
          <div class="profile">
            <img src={Profile3} class="profile-img"/>
    
            <h3 class="user-name">Nirmal Koirala</h3>
            <h5>Project Lead</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eveniet soluta hic sunt sit reprehenderit.</p>
          </div>
          <div class="profile">
            <img src={Profile4} class="profile-img"/>
    
            <h3 class="user-name">Chintan Dhungel</h3>
            <h5>Education Counsellor</h5>
            <p>Chintan is a well reputed and Qualified Education Agent Counsellor. Over the time his skills, experience and dedication have been highly valuable to help clients in achieving desired education outcomes.</p>
          </div>
          <div class="profile">
            <img src={Profile5} class="profile-img"  />
    
            <h3 class="user-name">Rajan Khatiwada</h3>
            <h5>Education Counsellor</h5>
            <p>Rajan possesses more than a decade of experience in leading roles in the education sector. He is well experienced in coordinating universities and colleges to best fit the needs of our student client. He is extremely passionate about helping clients with every possible outcome.</p>
          </div>
        </div>
        <div class="profiles">
          <div class="profile">
            <img src={Profile6} class="profile-img"/>
    
            <h3 class="user-name">Sagar Koirala</h3>
            <h5>Chartered Accountant</h5>
            <p>As a qualified Chartered Accountant, Sagar has over a decade of experience in providing taxation, accounting and consulting services for a range of businesses, sole traders, high net-wealth individuals/contractors and self managed super fund (SMSF). He is well versed in assisting business owners and investors for those who need help with the right business or investment portfolio structure to effectively minimise tax and protect their assets.</p>
          </div>
          <div class="profile">
            <img src={Profile} class="profile-img"/>
    
            <h3 class="user-name">Camila</h3>
            <h5>Managing Partner</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis sint quod.</p>
          </div>
          <div class="profile">
            <img src={Profile} class="profile-img"  />
    
            <h3 class="user-name">Isabella</h3>
            <h5>Project Manager</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eveniet!</p>
          </div>
        </div>
      </div>
    )
}

export default Team;
