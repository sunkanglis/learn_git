import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
function BasicExample(){
  return(
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <ul>
          <li>
          <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
      </div>
    </Router>
  );
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}
function Topics({match}) {
  return (
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Render with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props State</Link>
        </li>
      </ul>
      <h2>Topics</h2>
      <Route path={`${match.path}/:topicId`} component={Topic}/>
      <Route  exact path="/topics" render={() => <h3>Place select a topic.</h3>}/>
    </div>
  )
}
function Topic ({match}){
  return(
    <div>
      {match.params.topicId}
    </div>
  )
}
ReactDOM.render(<BasicExample></BasicExample>,document.getElementById('root'))