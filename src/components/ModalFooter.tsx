import { BaseSyntheticEvent, useState } from 'react';
import { ModalFooter as BaseModalFooter, Button } from 'react-bootstrap';

type ModalFooterProps = {
  handleModalHide: () => void;
};

export const ModalFooter = ({ handleModalHide }: ModalFooterProps) => {
  const [indicatorIndex, setIndicatorIndex] = useState(0);

  const handleFooterButtonClick = () => {
    handleModalHide();
  };

  const handleIndicatorClick = ({ target }: BaseSyntheticEvent) => {
    setIndicatorIndex(Number(target.value));
  };

  return (
    <>
      <BaseModalFooter>
        <Button onClick={handleFooterButtonClick}>Close</Button>
      </BaseModalFooter>
      <BaseModalFooter>
        <Button className='me-auto' variant='secondary' onClick={handleFooterButtonClick}>
          Cancel
        </Button>
        <Button variant='primary' onClick={handleFooterButtonClick}>
          Agree
        </Button>
      </BaseModalFooter>
      <BaseModalFooter>
        <Button className='me-auto' variant='secondary' onClick={handleFooterButtonClick}>
          Back
        </Button>
        <span>middle content</span>
        <Button className='ms-auto' variant='primary' onClick={handleFooterButtonClick}>
          Next
        </Button>
      </BaseModalFooter>
      <BaseModalFooter>
        <Button className='me-auto' variant='secondary' onClick={handleFooterButtonClick}>
          Reset to defaults
        </Button>
        <Button className='ms-auto' variant='secondary' onClick={handleFooterButtonClick}>
          Cancel
        </Button>
        <Button variant='primary' onClick={handleFooterButtonClick}>
          Agree
        </Button>
      </BaseModalFooter>
      <BaseModalFooter>
        <Button className='ms-auto' variant='secondary' onClick={handleFooterButtonClick}>
          Cancel
        </Button>
        <Button className='me-auto' variant='primary' onClick={handleFooterButtonClick}>
          Agree
        </Button>
      </BaseModalFooter>
    </>
  );
};
