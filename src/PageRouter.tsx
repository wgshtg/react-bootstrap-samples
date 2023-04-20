import { Route, Router } from 'wouter';
import App from './App';
import { AlertComponent } from './pages';

export const PageRouter = () => {
  return (
    <Router>
      <Route path='/'>
        <App />
      </Route>
      <Route path='/alert'>
        <AlertComponent />
      </Route>
    </Router>
  );
};
