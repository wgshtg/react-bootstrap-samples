import { ReactNode } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';

type BaseModalProps = {
  show: boolean;
  title?: string;
  body?: ReactNode;
  footer?: ReactNode;
  handleHide: () => void;
};

export const BaseModal = ({ show, title, body, footer, handleHide }: BaseModalProps) => {
  return (
    // onHide 效果是在 Modal 外面空白處點擊時觸發，設定 Modal 顯示為 false
    <Modal show={show} centered backdrop onHide={handleHide}>
      <ModalHeader>
        <ModalTitle>{title || 'Modal Title'}</ModalTitle>
      </ModalHeader>
      {body || <ModalBody>Modal Body</ModalBody>}
      {footer || <ModalFooter>Modal Footer</ModalFooter>}
    </Modal>
  );
};
