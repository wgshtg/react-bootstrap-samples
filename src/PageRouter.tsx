import { Route, Router } from 'wouter';
import App from './App';

export const PageRouter = () => {
  return (
    <Router>
      <Route path='/'>
        <App />
      </Route>
    </Router>
  );
};
