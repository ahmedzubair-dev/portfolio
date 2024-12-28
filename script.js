* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:  'montserrat';
    color: #fff;
  }
  
  html,body {
    height: 100%;
  
    width: 100%;
  }

  #cursor {
    height: 20px;
    width: 20px;
    background-color: #17d599;
    border-radius: 50%;
    position: fixed;
    z-index: 99;
    transition: all linear 0.1s;
  }
  #cursor-blur {
    height: 500px;
    width: 500px;
    background-color: rgba(15, 238, 238, 0.3);
    border-radius: 50%;
    position: fixed;
    filter: blur(80px);
    z-index: 9;
    transition: all linear 0.4s;
  }

  /* old loader css */
  #load {
    display:none;
   
    }
    
    #loader{
      font-size: 40px;
      height: 100vh;
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: end;
      color: #000;
      background-color: #17d599;
    }
    #count {
      font-size: 100px;
      font-weight: bold;
      color: #000;
      position: absolute;
      top: 40%;
      text-align: center;
      
    }

    #progress-bar {
      width: 0%;
      height: 5px;
      background-color: #000;
      position: absolute;
      bottom: 40%;
      left: 0;
    }

    
    .pop-down {
      animation: popDown 1s forwards;
    }
    

    @keyframes popDown {
      0% {
        transform: translateY(0);
        opacity: 1;
      }
      100% {
        transform: translateY(50px);
        opacity: 0;
      }
    }

    @keyframes popIn {
      0% {
        transform: scale(0.5);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }

    /* Basic reset */



    
  #nav{
    height:150px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 120px;
    gap: 50px;
    position:fixed;
    justify-content: flex-start;
    z-index: 999;
  }

  #nav img {
    height: 4.5vw;
  }
  #nav h4 {
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    font-size: 1.15vw;
  }
  #nav h4 a{
    text-decoration: none;
  }

  /* Container for the video */
.video-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1; /* Ensures the video stays behind other content */
}

/* Styling for the video element */
.video-wrapper video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the video covers the entire container */
}

  .video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  
  

  #main{
    position: relative;
    background-color: rgba(0, 0, 0, 0.5) ;
  }

  #page1{
    height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 50px 0px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('video/vid.mp4') center/cover;
    color: #fff;
    z-index: 10;
  }

  #page1 h1{
    font-size: 7.5vw;
    font-weight: 900;
    position: relative;
  }

  #page1 h1::before{
    content: "Code. Create. Innovate.";
    position: absolute;
    color: #000;
    top: -4px;
    left: -4px;
    -webkit-text-stroke: 1.5px #17d599;
    z-index: -1;
  }

  #page1 h2{
    font-size: 30px;
    font-weight: 800;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  #page1 p{
    font-size: 1.2vw;
    font-weight: 400;
    width: 40%;
  }

  #page2 {
    padding-top: 110px;
    min-height: 100vh;
    width: 100%;
    z-index: 10;
  }

  #scroller {
    /* background-color: red; */
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    z-index: 10;
  }
  #scroller::-webkit-scrollbar {
    display: none;
  }
  #scroller-in {
    display: inline-block;
    white-space: nowrap;
    animation-name: scroll;
    animation-duration: 40s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  
  #scroller h4 {
    display: inline-block;
    font-size: 120px;
    font-weight: 900;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-right: 20px;
    transition: all linear 0.3s;
    color: #000;
    -webkit-text-stroke: 2px #ffffff;
  }
  #scroller h4:hover {
    color: #17d599;
    -webkit-text-stroke: 2px #17d599;
  }
  
  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
  
  #about-us{
    height: 70vh;
    width: 100%;
    /* background-color: red; */
    display: flex;
    align-items: center;
    position: relative;
    z-index: 10;
    justify-content: space-around;
  }

  #about-us img{
    height: 300px;
    width: 300px;
    border-radius: 20px;
    object-fit: cover;
  }

  #about-us-in{
    height: 100%;
    width: 40%;
    display: flex;
    justify-content: center;

    /* text-align: center; */
    align-items: center;
    flex-direction: column;

  }

  #about-us-in h3{
    font-size: 54px;
    font-weight: 800;
    padding-bottom: 65px;
    display: block;
  }
  #about-us-in p{
    font-size: 20px;
    padding-bottom: 30px;
    line-height: 36px;
  }

  #projects {
    padding-top: 140px;
    height: 100vh;
    width: 100vw;
  }

  #projects h3{
    font-size: 40px;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #cards-container {
    /* background-color: red; */
    margin-top: 60px;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 70px;
    position: relative;
    z-index: 10;
  }
  .card {
    height: 80%;
    width: 24%;
    /* background-color: blue; */
    border-radius: 20px;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    transition: all ease 0.6s;
  }
  #card1 {
    background-image: url(https://img.freepik.com/free-vector/ai-technology-microchip-background-vector-digital-transformation-concept_53876-112222.jpg?ga=GA1.1.2097725186.1727254336&semt=ais_hybrid);
  }
  #card2 {
    background-image: url(https://img.freepik.com/premium-photo/programing-python_1292885-18831.jpg?ga=GA1.1.2097725186.1727254336&semt=ais_hybrid);
  }
  #card3 {
    background-image: url(https://img.freepik.com/premium-vector/program-coding-flat-design-style-vector-concept-illustration_92926-1857.jpg?ga=GA1.1.2097725186.1727254336&semt=ais_hybrid);
  }
  .overlay {
    height: 100%;
    width: 100%;
    background-color:#17d599;
    padding: 30px;
    padding-top: 160px;
    opacity: 0;
    transition: all ease 0.6s;
  }
  .overlay h4 {
    color: #000;
    font-size: 40px;
    text-transform: uppercase;
    white-space: nowrap;
    margin-bottom: 20px;
    font-weight: 800;
  }
  .overlay p {
    color: #000;
    font-size: 18px;
  }
  .card:hover .overlay {
    opacity: 1;
  }
  .card:hover {
    transform: rotate3d(-1, 1, 0, 20deg);
  }

  #green-div {
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: red; */
    background: linear-gradient(to left bottom, #119f3a, #17d599);
  }
  #green-div h4 {
    width: 45%;
    line-height: 50px;
    color: #000;
    text-align: center;
    font-weight: 800;
    font-size: 27px;
    text-transform: uppercase;
  }
  #green-div img {
    height: 100%;
    object-fit: cover;
    width: 14%;
  }

  #page3 {
    height: 100vh;
    width: 100%;
    background-color: #000;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
  }
  #page3 > p {
    font-size: 35px;
    font-weight: 700;
    width: 60%;
    line-height: 45px;
    text-align: center;
  }
  
  #page3 img {
    position: absolute;
    height: 60px;
  }
  #page3 #colon1 {
    left: 15%;
    top: 25%;
  }
  #page3 #colon2 {
    bottom: 30%;
    right: 15%;
  }

  #page4 {
    height: 30vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 70px;
    position: relative;
  }
  .elem {
    height: 70%;
    width: 26%;
    overflow: hidden;
    border-radius: 20px;
    position: relative;
  }
  
  .elem h2 {
    height: 100%;
    width: 100%;
    background-color:#17d599;
    display: flex;
    color: #000;
    font-weight: 800;
    align-items: center;
    justify-content: center;
    transition: all ease 0.5s;
    font-size: 2vw;
    position: absolute;
    z-index: 10;
  }
  .elem img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all ease 0.5s;
    scale: 1.1;
  }
  .elem:hover h2 {
    color: #fff;
    background-color: transparent;
  }
  .elem:hover img {
    scale: 1;
  }
  #page4 h1 {
    font-size: 3.0vw;
    position: absolute;
    top: -30%;
    font-weight: 900;
    font-family: gilroy;
    color: #000;
    -webkit-text-stroke: 2px #fff;
  }
  #footer {
    height: 40vh;
    width: 100%;
    background: linear-gradient(to left bottom, #117c9f 0%, #17d599 80%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 6.5vw;
    padding: 0 100px;
  }
  #footer > img {
    position: absolute;
    left: 0;
    height: 100%;
    z-index: 0;
  }
  #f1 img {
    height: 250px;
  }
  #f1,
  #f2,
  #f3,
  #f4 {
    width: fit-content;
    position: relative;
    z-index: 99;
    /* background-color: red; */
  }
  #f2 h3 {
    font-size: 1.6vw;
    white-space: nowrap;
    text-transform: uppercase;
    color: #000;
    font-weight: 900;
    margin-bottom: 8px;
  }
  
  #f3 h3 {
    font-size: 1.6vw;
    white-space: nowrap;
    text-transform: uppercase;
    color: #000;
    font-weight: 800;
    margin-bottom: 8px;
  }
  #f4 h4 {
    font-size: 1vw;
    white-space: nowrap;
    text-transform: uppercase;
    color: #000;
    font-weight: 600;
    line-height: 20px;
    margin-bottom: 8px;
  }

  @media (max-width: 768px) {
    
    #nav nav {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #page1 {
        padding: 20px;
    }

    #cards-container {
        flex-direction: column;
    }
    .video-background {
      object-fit: cover;}
    
}

@media (max-width: 480px) {
    #nav img {
        height: 40px;
    }

    .card {
        flex: 1 1 90%;
    }
}
