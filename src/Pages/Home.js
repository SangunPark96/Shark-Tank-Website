import githubLogo from '../Assests/github-logo.png'

function Home() {
    return (
      <div className="home">
        <h1>Welcome</h1>
        <h3>Hi, I'm SangUn Park. A passionate Front-end React Developer based in New York City.</h3>
        <h2>This is an on-going project I am working on. I plan on expanding it further as I find better ways of farming the data.</h2>
        <h3>The dataset was provided by Erik Webb github: <a href="https://github.com/erikgregorywebb/datasets"> <img src={githubLogo} alt='github-logo' height={30} width={30}></img></a> </h3>
        
        <a href="https://unboxed-analytics.com/data-technology/lessons-from-the-tank-analyzing-800-shark-tank-pitches/" className="credit-link"> Greg's Blog about SharkTank</a>
        
      </div>
    );
  }
  
  export default Home;
  