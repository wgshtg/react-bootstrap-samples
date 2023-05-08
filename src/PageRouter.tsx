import { Route, Router } from 'wouter';
import App from './App';
import {
  AlertComponent,
  Footer,
  FormInput,
  FormInputType,
  Header,
  Modal,
  Pagination,
  Popover,
  ProgressBar,
  Select,
  Table,
} from './pages';

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
      <Route path='/formInput'>
        <FormInput type={FormInputType.Number} />
        <FormInput type={FormInputType.Text} />
      </Route>
      <Route path='/header'>
        <Header />
      </Route>
      <Route path='/modal'>
        <Modal />
      </Route>
      <Route path='/pagination'>
        <Pagination />
      </Route>
      <Route path='/popover'>
        <Popover />
      </Route>
      <Route path='/progressbar'>
        <ProgressBar />
      </Route>
      <Route path='/select'>
        <Select />
      </Route>
      <Route path='/table'>
        <Table />
      </Route>
    </Router>
  );
};
