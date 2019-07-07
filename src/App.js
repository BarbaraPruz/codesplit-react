import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import './App.css';

function Loading (props) {
  return (
    <div>
      <h2>Loading...</h2>
    </div>
  )
}
const LazyCharts1 = React.lazy(() => import('./components/Charts1'))
const LazyCharts2 = React.lazy(() => import('./components/Charts2'))
function App() {
  return (
    <div className="App">
      <Router>   
        <header className="App-header">
          <h1>Code Splitting on Routes Sample</h1>
          <div className="App-nav">
            <Link to='/charts1' className="App-link">Charts 1</Link>
            <Link to='/charts2' className="App-link">Charts 2</Link>
          </div>
          <hr />        
        </header>
        <section>
          <React.Suspense fallback={<Loading />}>
            <Route path='/charts1' component={LazyCharts1} />
            <Route path='/charts2' component={LazyCharts2} />     
          </React.Suspense>                 
        </section>
      </Router>
    </div>
  );
}

export default App;
