import selfimage from '../src/self.jpg';
import './App.css';

function App() {
  return (
    <div>
      <div class="first">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact Me</li>
          </ul>
        </nav>
        <div class="text-first">
          <h1>PORTFOLIO</h1>
          <br>
          </br>
          <br></br>
          <h3>2020----------------------------------------------2024</h3>
        </div>
      </div>
      <div class="second">
        <h1>About Me</h1>
        <div class="second-container">
          <img src={selfimage}>
          </img>
          <div class="second-text">
            <p>
              As twilight settled and the sun's glow faded, whispers of nostalgia filled the air, stirring memories long tucked away. Each moment, a brushstroke on the canvas of time, painted the sky in hues of warmth and longing. In the quiet of dusk, the heart's gallery opened, revealing stories etched in the tapestry of life, weaving a tale of love and loss, hope and remembrance.</p>
          </div>
        </div>

      </div>

    </div>

  );
}

export default App;
