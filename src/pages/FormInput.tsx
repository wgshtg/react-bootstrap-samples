import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BaseSyntheticEvent, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

export enum FormInputType {
  Text = 'text',
}

type FormInputProps = {
  type: FormInputType;
};

export const FormInput = ({ type }: FormInputProps) => {
  const [textInputValue, setTextInputValue] = useState('');

  const handleTextInputValueChange = ({ target }: BaseSyntheticEvent) => {
    setTextInputValue(target.value);
  };
  const handleClearTextInput = () => {
    setTextInputValue('');
  };

  switch (type) {
    case FormInputType.Text:
    default:
      return (
        <InputGroup className='w-25 mt-3 ms-3 '>
          <FormControl
            className='border-end-0'
            type={type}
            name='textInput'
            placeholder='textInputPlaceholder'
            value={textInputValue}
            onChange={handleTextInputValueChange}
          />
          {/* 透過 InputGroup 組合 Input 和清除按鈕 */}
          <InputGroup.Text className='bg-transparent border-start-0'>
            {textInputValue && <FontAwesomeIcon icon={faXmark} onClick={handleClearTextInput} />}
          </InputGroup.Text>
        </InputGroup>
      );
  }
};
