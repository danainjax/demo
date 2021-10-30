import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/bullshitio'>Bull</Link>
            </li>
            <li>
              <Link to='/ok'>Ok</Link>
            </li>

            <li>
              <Link to='/gong'>Gong</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/ok'>
            <Ok />
          </Route>
          <Route path='/Deal'>
            <Deal />
          </Route>
          <Route path='/gong'>
            <Gong />
          </Route>
          <Route path='/bullshitio'>
            <Bull />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>
}

function Bull() {
  return <h2> Bullshitio </h2>
}

function Ok() {
  return <h2> Ok </h2>
}

function Deal() {
  return <h2>Deal</h2>
}
function Gong() {
  return <h2> Gong </h2>
}
