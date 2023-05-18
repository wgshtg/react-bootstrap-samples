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
        <div className='w-25 mt-3 ms-3'>
          <FormInput type={FormInputType.Number} />
          <p />
          <FormInput type={FormInputType.Text} />
        </div>
      </Route>
      <Route path='/header'>
        <Header />
      </Route>
      <Route path='/modal'>
        <div className='m-5'>
          <Modal />
          <ModalWithBody />
          <ModalWithFooter />
        </div>
      </Route>
      <Route path='/pagination'>
        <div className='m-5'>
          <Pagination />
        </div>
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
