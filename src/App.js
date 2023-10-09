import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Day1 from './Days/Days1-10/Day1';
import Day2 from './Days/Days1-10/Day2';
import Day3 from './Days/Days1-10/Day3';
import Day4 from './Days/Days1-10/Day4';
import Day5 from './Days/Days1-10/Day5';
import Day6 from './Days/Days1-10/Day6';
import Day7 from './Days/Days1-10/Day7';
import Day8 from './Days/Days1-10/Day8';
import Day9 from './Days/Days1-10/Day9';
import Day10 from './Days/Days1-10/Day10';
import Day11 from './Days/Days11-20/Day11';
import Day12 from './Days/Days11-20/Day12';
import Day13 from './Days/Days11-20/Day13';
import Day14 from './Days/Days11-20/Day14';
import Day15 from './Days/Days11-20/Day15';
import Day16 from './Days/Days11-20/Day16';
import Day17 from './Days/Days11-20/Day17';
import Day18 from './Days/Days11-20/Day18';
import Day19 from './Days/Days11-20/Day19';
import Day20 from './Days/Days11-20/Day20';
import Day21 from './Days/Days21-30/Day21';
import Day22 from './Days/Days21-30/Day22';
import Day23 from './Days/Days21-30/Day23';
import Day24 from './Days/Days21-30/Day24';
import Day25 from './Days/Days21-30/Day25';
import Day26 from './Days/Days21-30/Day26';
import Day27 from './Days/Days21-30/Day27';
import Day28 from './Days/Days21-30/Day28';
import Day29 from './Days/Days21-30/Day29';
import Day30 from './Days/Days21-30/Day30';
import Day31 from './Days/Days31-40/Day31';
import Day32 from './Days/Days31-40/Day32';
import Day33 from './Days/Days31-40/Day33';
import Day34 from './Days/Days31-40/Day34';
import Day35 from './Days/Days31-40/Day35';
import Day36 from './Days/Days31-40/Day36';
import Day37 from './Days/Days31-40/Day37';
import Day38 from './Days/Days31-40/Day38';
import Day39 from './Days/Days31-40/Day39';
import Day40 from './Days/Days31-40/Day40';
import Day41 from './Days/Days41-50/Day41';
import Day42 from './Days/Days41-50/Day42';
import Day43 from './Days/Days41-50/Day43';
import Day44 from './Days/Days41-50/Day44';
import Day45 from './Days/Days41-50/Day45';
import Day46 from './Days/Days41-50/Day46';
import Day47 from './Days/Days41-50/Day47';
import Day48 from './Days/Days41-50/Day48';
import Day49 from './Days/Days41-50/Day49';
import Day50 from './Days/Days41-50/Day50';


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
            <Route path='password-strength-background' element={<Day39/>}/>
            <Route path='3d-background-boxes' element={<Day40/>}/>
            <Route path='verify-account-ui' element={<Day41/>}/>
            <Route path='live-user-filter' element={<Day42/>}/>
            <Route path='feedback-ui-design' element={<Day43/>}/>
            <Route path='custom-range-slider' element={<Day44/>}/>
            <Route path='netflix-mobile-navigation' element={<Day45/>}/>
            <Route path='quiz-app' element={<Day46/>}/>
            <Route path='testimonial-box-switcher' element={<Day47/>}/>
            <Route path='random-image-feed' element={<Day48/>}/>
            <Route path='todo-list' element={<Day49/>}/>
            <Route path='insect-catch-game' element={<Day50/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
