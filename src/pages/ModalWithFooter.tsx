import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BaseModal, ModalFooter } from '../components';

export const ModalWithFooter = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(true);
  const handleModalHide = () => setShow(false);

  return (
    <div>
      <Button className='m-5' onClick={handleClick}>
        Show Modal With Footer
      </Button>
      <BaseModal
        show={show}
        handleHide={handleModalHide}
        title='Modal With Footer'
        footer={<ModalFooter handleModalHide={handleModalHide} />}
      />
    </div>
  );
};
