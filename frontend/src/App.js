
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from "./components/Header";
import User from './screens/User'
import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import PhotoScreen from './screens/PhotoScreen'
import PhotoUpdateScreen from './screens/PhotoUpdateScreen'
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/posts/:id' component={PhotoScreen} />
          <Route path='/login' component={Login} />
          <Route path='/user' component={User} />
          <Route path='/users/posts/:id/edit' component={PhotoUpdateScreen} />
        </Container>
      </main>
    </Router>
  );
}

export default App;
