import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Day1 from './Days/Day1';
import Day2 from './Days/Day2';
import Day3 from './Days/Day3';
import Day4 from './Days/Day4';
import Day5 from './Days/Day5';
import Day6 from './Days/Day6';
import Day7 from './Days/Day7';
import Home from './Home';


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
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
