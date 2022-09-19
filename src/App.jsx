import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import './App.css'
import Home from './Pages/meu-app';
import About from './Pages/About'
import Technology from './Pages/Technology';
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import JS from './Components/JavaScript';
import TecReact from './Components/TecReact';
import Npm from './Components/Npm';
import Css from './Components/Css';
import Git from './Components/Git';
import Bash from './Components/Bash';
import Html from './Components/Html';
import Github from './Components/Github';
import Jest from './Components/Jest';

class App extends React.Component {
  render() {
    return (
      <main>
        <BrowserRouter >
          <Switch>
            <Route exact path='/meu-app' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/technology' component={Technology} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/JavaScript' component={JS} />
            <Route exact path='/TecReact' component={TecReact} />
            <Route exact path='/Npm' component={Npm} />
            <Route exact path='/Css' component={Css} />
            <Route exact path='/Git' component={Git} />
            <Route exact path='/Bash' component={Bash} />
            <Route exact path='/Html' component={Html} />
            <Route exact path='/Github' component={Github} />
            <Route exact path='/Jest' component={Jest} />
          </Switch>
        </BrowserRouter>
      </main>
    )
  }
}


export default App;