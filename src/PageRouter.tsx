import { Route, Router } from 'wouter';
import App from './App';
import { AlertComponent, Footer, Header } from './pages';

export const PageRouter = () => {
  return (
    <Router>
      <Route path='/'>
        <App />
      </Route>
      <Route path='/alert'>
        <AlertComponent />
      </Route>
      <Route path='/footer'>
        <Footer />
      </Route>
      <Route path='/header'>
        <Header />
      </Route>
    </Router>
  );
};
