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
      <BaseModalFooter>
        <div className='me-auto w-25'>
          {Array.from({ length: 3 }, (_, i) => i).map((_, index) => {
            return (
              <Button
                key={index}
                className={`rounded-pill p-1 me-1 ${index !== indicatorIndex && 'border'}`}
                style={{ width: index !== indicatorIndex ? '1rem' : '2rem', height: '1rem' }}
                variant={index !== indicatorIndex ? 'light' : 'dark'}
                value={index}
                onClick={handleIndicatorClick}
              ></Button>
            );
          })}
        </div>
        <Button variant='secondary' onClick={handleFooterButtonClick}>
          Cancel
        </Button>
        <Button variant='primary' onClick={handleFooterButtonClick}>
          Agree
        </Button>
      </BaseModalFooter>
    </>
  );
};
