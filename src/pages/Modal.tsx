import { useState } from 'react';
import {
  Modal as BaseModal,
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from 'react-bootstrap';

export const Modal = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleBtnClick = () => setModalShow(true);
  const handleModalHide = () => setModalShow(false);

  return (
    <div>
      <Button className='m-5' onClick={handleBtnClick}>
        Show modal
      </Button>
      {/* onHide 效果是在 Modal 外面空白處點擊時觸發，設定 Modal 顯示為 false */}
      <BaseModal show={modalShow} centered backdrop onHide={handleModalHide}>
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
        </ModalHeader>
        <ModalBody>Modal Body</ModalBody>
        <ModalFooter>Modal Footer</ModalFooter>
      </BaseModal>
    </div>
  );
};
