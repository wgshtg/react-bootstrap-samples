import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BaseModal, ModalBody } from '../components';

export const ModalWithBody = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleClick = () => setModalShow(true);
  const handleModalHide = () => setModalShow(false);

  return (
    <div>
      <Button className='m-5' onClick={handleClick}>
        Show Modal With Body
      </Button>
      <BaseModal
        show={modalShow}
        handleHide={handleModalHide}
        title='Modal With Body'
        body={<ModalBody />}
      />
    </div>
  );
};
