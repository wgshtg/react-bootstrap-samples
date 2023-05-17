import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BaseModal } from '../components';

export const Modal = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(true);
  const handleModalHide = () => setShow(false);

  return (
    <div>
      <Button onClick={handleClick}>Show Modal</Button>
      <BaseModal show={show} handleHide={handleModalHide}></BaseModal>
    </div>
  );
};
