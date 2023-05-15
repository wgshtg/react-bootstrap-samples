import { Route, Router } from 'wouter';
import App from './App';
import {
  AlertComponent,
  Footer,
  FormInput,
  FormInputType,
  Header,
  Modal,
  ModalWithBody,
  ModalWithFooter,
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
        <div className='top-50 start-50 position-absolute translate-middle'>
          <AlertComponent />
        </div>
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
        <ModalWithBody />
        <ModalWithFooter />
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
