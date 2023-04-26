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
import Day24 from './Days/Day24';
import Day25 from './Days/Day25';
import Day26 from './Days/Day26';
import Day27 from './Days/Day27';
import Day28 from './Days/Day28';
import Day29 from './Days/Day29';
import Day30 from './Days/Day30';
import Day31 from './Days/Day31';
import Day32 from './Days/Day32';
import Day33 from './Days/Day33';
import Day34 from './Days/Day34';
import Day35 from './Days/Day35';
import Day36 from './Days/Day36';
import Day37 from './Days/Day37';
import Day38 from './Days/Day38';


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
            <Route path='content-placeholder' element={<Day24/>}/>
            <Route path='sticky-navbar' element={<Day25/>}/>
            <Route path='double-vertical-slider' element={<Day26/>}/>
            <Route path='toast-notification' element={<Day27/>}/>
            <Route path='github-profiles' element={<Day28/>}/>
            <Route path='double-click-heart' element={<Day29/>}/>
            <Route path='auto-text-effect' element={<Day30/>}/>
            <Route path='password-generator' element={<Day31/>}/>
            <Route path='good-cheap-fast' element={<Day32/>}/>
            <Route path='notes-app' element={<Day33/>}/>
            <Route path='animated-countdown' element={<Day34/>}/>
            <Route path='image-carousel' element={<Day35/>}/>
            <Route path='hoverboard' element={<Day36/>}/>
            <Route path='pokedex' element={<Day37/>}/>
            <Route path='mobile-tab-navigation' element={<Day38/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
