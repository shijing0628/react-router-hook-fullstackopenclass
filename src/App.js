import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Notes from './components/Notes';
import { BrowserRouter as Router, useRouteMatch, Switch, Route, Link, Redirect } from 'react-router-dom'
import Users from './components/Users';
import Note from './components/Note';
import Login from './components/Login';


const App = () => {
  const [user, setUser] = useState(null)
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: 'HTML is easy',
      important: true,
      user: 'Matti Luukkainen'
    },
    {
      id: 2,
      content: 'Browser can execute only Javascript',
      important: false,
      user: 'Matti Luukkainen'
    },
    {
      id: 3,
      content: 'Most important methods of HTTP-protocol are GET and POST',
      important: true,
      user: 'Arto Hellas'
    }
  ])
  const padding = {
    padding: 5
  }

  const login = (user) => {
    setUser(user)
  }

  const match = useRouteMatch('/notes/:id');
  const note = match ? notes.find(note => note.id === Number(match.params.id)) : null;

  return (

    <>
      <div>
        <Link style={padding} to="/">Home</Link>
        <Link style={padding} to="/notes">Notes</Link>
        <Link style={padding} to="/users">Users</Link>
        {user ? <em>{user} login</em> : <Link style={padding} to="/login">Login</Link>}
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/notes">
          <Notes notes={notes} />
        </Route>

        <Route path="/notes/:id">
          <Note note={note} />
        </Route>

        <Route path="/users" render={() => user ? <Users /> : <Redirect to="/login" />}>
          <Users />
        </Route >

        <Route path="/login">
          <Login onLogin={login} />
        </Route>
      </Switch>
      <div>
        <i>Note app, Department of Computer Science 2020</i>
      </div>
    </>

  );
}

export default App;
