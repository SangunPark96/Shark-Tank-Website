import kaggleLogo from '../Assests/Kaggle_logo.png'
import githubLogo from '../Assests/github-logo.png'

function Home() {
    return (
      <div className="home">
        
        <h1>Welcome</h1>
        <h3>Hi, I'm SangUn Park. A passionate Front-end React Developer based in New York City.</h3>
        <h2>This is an on-going project I am working on. I plan on expanding it further as I find better ways of farming the data.</h2>
        <h4>The dataset was provided by    <a href="https://www.kaggle.com/datasets/thirumani/shark-tank-us-dataset">  <img src={kaggleLogo} alt='kaggle-logo'  width={70}></img></a> </h4>
        
        <p>I have to give full inspirational credit to <a href='http://www.sharkalytics.com'>http://www.sharkalytics.com</a>,  <a href="https://github.com/jace0x21"> Joncarlo Alvarado <img src={githubLogo} alt='git-logo' height={30}  width={30}></img></a>, as well as the undying greed of Kevin O'Leary.</p>
        
      </div>
    );
  }
  
  export default Home;
  