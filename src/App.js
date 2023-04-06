import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Day1 from './Days/Day1';
import Day2 from './Days/Day2';
import Day3 from './Days/Day3';
import Day4 from './Days/Day4';
import Day5 from './Days/Day5';
import Day6 from './Days/Day6';
import Day7 from './Days/Day7';
import Day8 from './Days/Day8';
import Day9 from './Days/Day9';
import Day10 from './Days/Day10';
import Day11 from './Days/Day11';
import Day12 from './Days/Day12';
import Home from './Home';
import Day13 from './Days/Day13';
import Day14 from './Days/Day14';
import Day15 from './Days/Day15';
import Day16 from './Days/Day16';
import Day17 from './Days/Day17';
import Day18 from './Days/Day18';
import Day19 from './Days/Day19';
import Day20 from './Days/Day20';
import Day21 from './Days/Day21';
import Day22 from './Days/Day22';
import Day23 from './Days/Day23';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route>
            <Route path='/' element={<Home />}/>
            <Route path='expanding-cards' element={<Day1/>}/>
            <Route path='progress-steps' element={<Day2/>}/>
            <Route path='rotating-navigation-animation' element={<Day3/>}/>
            <Route path='hidden-search-widget' element={<Day4/>}/>
            <Route path='blurry-loading' element={<Day5/>}/>
            <Route path='scroll-animation' element={<Day6/>}/>
            <Route path='split-landing-page' element={<Day7/>}/>
            <Route path='form-wave' element={<Day8/>}/>
            <Route path='sound-board' element={<Day9/>}/>
            <Route path='dad-jokes' element={<Day10/>}/>
            <Route path='event-keycodes' element={<Day11/>}/>
            <Route path='faq-collapse' element={<Day12/>}/>
            <Route path='random-choice-picker' element={<Day13/>}/>
            <Route path='animated-navigation' element={<Day14/>}/>
            <Route path='incrementing-counter' element={<Day15/>}/>
            <Route path='drink-water' element={<Day16/>}/>
            <Route path='movie-app' element={<Day17/>}/>
            <Route path='background-slider' element={<Day18/>}/>
            <Route path='theme-clock' element={<Day19/>}/>
            <Route path='button-ripple-effect' element={<Day20/>}/>
            <Route path='drag-n-drop' element={<Day21/>}/>
            <Route path='drawing-app' element={<Day22/>}/>
            <Route path='kinetic-loader' element={<Day23/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
