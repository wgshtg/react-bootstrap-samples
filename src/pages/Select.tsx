import { BaseSyntheticEvent, useState } from 'react';
import { FormSelect } from 'react-bootstrap';

export const Select = () => {
  const [currentValue, setCurrentValue] = useState();
  const [options] = useState([
    { name: 'option1', value: 'option1-value' },
    { name: 'option2', value: 'option2-value' },
  ]);

  const handleChange = ({ target }: BaseSyntheticEvent) => {
    setCurrentValue(target.value);
  };

  return (
    <FormSelect onChange={handleChange} name='select1' value={currentValue}>
      <option value=''>selct option placeholder</option>
      {options.map((option) => {
        return (
          <option key={option.name} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </FormSelect>
  );
};
