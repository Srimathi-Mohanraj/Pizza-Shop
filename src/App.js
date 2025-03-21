
import './App.css';
import AppBar from './compoents/AppBar';
import Banner from './compoents/Banner';
import Menu from './compoents/Menu';
import PickoftheWeek from './compoents/PickoftheWeek';
import Comments from './compoents/Comments';



function App() {
  return (
<div>
<AppBar/>
<Banner/>
<Menu/>
<PickoftheWeek/>
<Comments/>
<div className='text-center text-primary small'>
  <p>Copyright 2022-2023</p>
</div>
</div>
  
   
  );
}

export default App;
