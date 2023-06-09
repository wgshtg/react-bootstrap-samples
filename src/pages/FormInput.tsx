import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BaseSyntheticEvent, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

export enum FormInputType {
  Number = 'number',
  Text = 'text',
}

type FormInputProps = {
  type: FormInputType;
};

export const FormInput = ({ type }: FormInputProps) => {
  const [numberInputValue, setNumberInputValue] = useState(0);
  const [textInputValue, setTextInputValue] = useState('');

  const handleNumberInputValueChange = ({ target }: BaseSyntheticEvent) => {
    setNumberInputValue(target.value);
  };
  const handleTextInputValueChange = ({ target }: BaseSyntheticEvent) => {
    setTextInputValue(target.value);
  };
  const handleClearTextInput = () => {
    setTextInputValue('');
  };

  switch (type) {
    case FormInputType.Number:
      return (
        <FormControl
          type={type.toString()}
          name='numberInput'
          value={numberInputValue}
          min='0'
          onChange={handleNumberInputValueChange}
        />
      );
    case FormInputType.Text:
    default:
      return (
        <InputGroup>
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
