import{u as a,j as i,W as t}from"./index-17102859.js";import{B as r}from"./BubblesAnimation-91c6adf2.js";import{t as l}from"./motion-0024fe2c.js";const s=a.h1`
  font-size: 30px;
  text-align: center;
  margin: 24px auto;
`,d=a.div`
  .members {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    padding: 8px;
  }

  .member {
    width: 320px;
    border-radius: 10px;
    padding: 12px;
    background-color: transparent;
    transition: all 0.5s ease-in;
  }

  .member > a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .img-container {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    overflow: hidden;
  }

  img {
    width: 100%;
  }

  .desc-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: ${({theme:e})=>e.color.black};
  }

  .bubble {
    background: linear-gradient(
      ${({theme:e})=>e.color.skyBlue},
      ${({theme:e})=>e.color.blue}
    );
    border-radius: 50%;
    box-shadow: 0 30px 15px rgba(0, 0, 0, 0.15);
    position: absolute;
  }
  .bubble:before,
  .bubble:after {
    content: '';
    background: linear-gradient(
      ${({theme:e})=>e.color.skyBlue},
      ${({theme:e})=>e.color.blue}
    );
    border-radius: 50%;
    box-shadow: 0 30px 15px rgba(0, 0, 0, 0.15);
    position: absolute;
  }
  .bubble:nth-child(1) {
    top: 15vh;
    left: 15vw;
    height: 22vmin;
    width: 22vmin;
  }
  .bubble:nth-child(1):before {
    width: 13vmin;
    height: 13vmin;
    bottom: -25vh;
    right: -10vmin;
  }
  .bubble:nth-child(2) {
    top: 20vh;
    left: 38vw;
    height: 10vmin;
    width: 10vmin;
  }
  .bubble:nth-child(2):before {
    width: 5vmin;
    height: 5vmin;
    bottom: -10vh;
    left: -8vmin;
  }
  .bubble:nth-child(3) {
    top: 12vh;
    right: 30vw;
    height: 13vmin;
    width: 13vmin;
  }
  .bubble:nth-child(3):before {
    width: 3vmin;
    height: 3vmin;
    bottom: -15vh;
    left: -18vmin;
    z-index: 6;
  }
  .bubble:nth-child(4) {
    top: 25vh;
    right: 18vw;
    height: 18vmin;
    width: 18vmin;
  }
  .bubble:nth-child(4):before {
    width: 7vmin;
    height: 7vmin;
    bottom: -10vmin;
    left: -15vmin;
  }
  .bubble:nth-child(5) {
    top: 60vh;
    right: 18vw;
    height: 28vmin;
    width: 28vmin;
  }
  .bubble:nth-child(5):before {
    width: 10vmin;
    height: 10vmin;
    bottom: 5vmin;
    left: -25vmin;
  }

  @media screen and (min-width: 768px) {
    .member {
      width: 300px;
    }
  }

  @media screen and (min-width: 1440px) {
    .member:hover {
      box-shadow: 0 0 10px 5px ${({theme:e})=>e.color.skyBlue};
      background-color: ${({theme:e})=>e.color.white};
      scale: 1.3;
    }
  }
`,c="/fs-92-react-node-NadiiaPavliuchenko/assets/AD-de51e06c.png",h="/fs-92-react-node-NadiiaPavliuchenko/assets/AK-0828cac2.png",m="/fs-92-react-node-NadiiaPavliuchenko/assets/BS-1314b635.png",p="/fs-92-react-node-NadiiaPavliuchenko/assets/DD-07cacaed.png",v="/fs-92-react-node-NadiiaPavliuchenko/assets/II-98e819ee.png",b="/fs-92-react-node-NadiiaPavliuchenko/assets/IT-63a0cc40.png",g="/fs-92-react-node-NadiiaPavliuchenko/assets/NP-582684b9.png",k="/fs-92-react-node-NadiiaPavliuchenko/assets/OP-9c28c0e0.png",u="/fs-92-react-node-NadiiaPavliuchenko/assets/SK-20167dfd.png",w="/fs-92-react-node-NadiiaPavliuchenko/assets/SO-bfd93667.png",f="/fs-92-react-node-NadiiaPavliuchenko/assets/VS-fcb08e0c.png",P=()=>{const e=[{name:"Svitlana Otenko",image:w,role:"TechLeader, Developer",description:"backend: deployment of a server for development, database, routes, controllers (authControllers, monthControllers, todayControllers, userControllers, waterControllers, waterRateControllers), services and middleware, implementation of sending emails, storing images in the cloud, help with complex issues, frontend: help with complex issues",linkedin:"https://www.linkedin.com/in/svitlana-otenko/"},{name:"Nadiia Pavliuchenko",image:g,role:"TechLeader, Developer",description:"deployment of a server for development, architecture,, routes, SettingsModal, implementation of dark and light themes",linkedin:"https://www.linkedin.com/in/nadiia-pavliuchenko"},{name:"Andrii Dovhaniuk",image:c,role:"SCRUM, Developer",description:"redux state, api thunks, addWaterModal, animation, Loader, ErrorPage, deleteUserModal/Form, modalContainer, Wrapper, recoveryModal/Form, resendCodeModal/Form, userLogoutModal, waterRatioPanel, Notifications, services, help with complex issues",linkedin:"https://www.linkedin.com/in/andrii-dovhaniuk-ua/"},{name:"Andrii Koliadenko",image:h,role:"Developer",description:"Calendar, TodayListModal",linkedin:"https://www.linkedin.com/in/andrii-koliadenko/"},{name:"Ivan Imenynnyk",image:v,role:"Developer",description:"DailyNormaModal",linkedin:"https://www.linkedin.com/in/ivan-imenynnyk/"},{name:"Iryna Trysh",image:b,role:"Developer",description:"HomePage",linkedin:"https://www.linkedin.com/in/irynatrysh/"},{name:"Bohdan Solomych",image:m,role:"Developer",description:"Header, UserLogo",linkedin:"https://www.linkedin.com/in/bogdan-solomich/"},{name:"Dana Dobryshkina",image:p,role:"Developer",description:"WelcomePage, WhyDrinkWater, WaterTrackerConsumption, partially DailyNorma",linkedin:"https://www.linkedin.com/in/dana-dobryshkina-ua/"},{name:"Volodymyr Shevchenko",image:f,role:"Developer",description:"SignInPage, SignUpPage, SignIn/SignUp form, TodayWaterList, DeleteWaterIntakesModal",linkedin:"https://www.linkedin.com/in/volodymyr-shevchenko-developer/"},{name:"Serhii Krysiuk",image:u,role:"Developer",description:"backend:partially updateWaterIntakeRecord, removeWaterIntakeRecord, sendPasswordRecoveryEmail and recoverPassword, frontend: UserLogoModal, styling DailyNorma",linkedin:"https://www.linkedin.com/in/serhii-krysiuk-4330052ab/"},{name:"Oleksii Pokormiakho",image:k,role:"Developer",description:"Swagger endpoint documentation",linkedin:"https://www.linkedin.com/in/oleksiy-pokormyakho/"}];return i.jsxs(t,{children:[i.jsx(r,{}),i.jsx(s,{children:"Our team «IT Frogs»"}),i.jsx(d,{children:i.jsx("ul",{className:"members",children:e.map((n,o)=>i.jsx(l.li,{className:"member",initial:{opacity:0},animate:{opacity:1},transition:{duration:1.5,delay:o*.6},children:i.jsxs("a",{href:n.linkedin,target:"_blank",rel:"noreferrer",children:[i.jsx("div",{className:"img-container",children:i.jsx("img",{src:n.image,alt:n.name})}),i.jsxs("div",{className:"desc-container",children:[i.jsxs("h3",{children:[n.name,", ",i.jsx("span",{children:n.role})]}),i.jsxs("p",{children:[i.jsx("b",{children:"Developed part:"})," ",n.description]})]})]})},o))})})]})};export{P as default};
