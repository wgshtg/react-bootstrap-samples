import { BaseSyntheticEvent, useState } from 'react';
import {
  ModalBody as BaseModalBody,
  Col,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  Row,
} from 'react-bootstrap';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';

export const ModalBody = () => {
  const [radioValue, setRaidoValue] = useState('');
  const [switchValue, setSwitchValue] = useState(false);
  const [selectValue, setSelectValue] = useState();
  const [selectOptions] = useState([
    { name: 'option1', value: 'option1-value' },
    { name: 'option2', value: 'option2-value' },
  ]);

  const handleCheck = ({ target }: BaseSyntheticEvent) => {
    setRaidoValue(target.value);
  };

  const handleSwitch = () => {
    setSwitchValue(!switchValue);
  };

  const handleSelect = ({ target }: BaseSyntheticEvent) => {
    setSelectValue(target.value);
  };

  return (
    <BaseModalBody>
      <Form>
        <FormGroup as={Row} className='mb-3'>
          <FormLabel column sm='2'>
            field1
          </FormLabel>
          <Col sm='10'>
            <FormControl type='text' placeholder='field1 placeholer' />
          </Col>
        </FormGroup>
      </Form>
      <hr />
      <Form>
        <FormGroup as={Row}>
          <FormLabel column sm='3'>
            item-name
          </FormLabel>
          <FormLabel column sm='4'>
            item-property
          </FormLabel>
          <Col sm='5'>
            <FormControl type='text' placeholder='field1 placeholer' />
          </Col>
        </FormGroup>
      </Form>
      <hr />
      <Form>
        <FormGroup as={Row}>
          <FormLabel column sm='3'>
            field2
          </FormLabel>
          <Col sm='4' className='p-2'>
            <FormCheck>
              <FormCheckInput
                id='radio1'
                type='radio'
                value='radio1'
                checked={radioValue === 'radio1'}
                onChange={handleCheck}
              />
              <Form.Check.Label htmlFor='radio1'>radio1 label</Form.Check.Label>
            </FormCheck>
          </Col>
          <Col sm='4' className='p-2'>
            <FormCheck>
              <FormCheckInput
                id='radio2'
                type='radio'
                value='radio2'
                checked={radioValue === 'radio2'}
                onChange={handleCheck}
              />
              <Form.Check.Label htmlFor='radio2'>radio2 label</Form.Check.Label>
            </FormCheck>
          </Col>
        </FormGroup>
      </Form>
      <hr />
      <Form>
        <FormGroup as={Row}>
          <FormLabel column sm='2'>
            field3
          </FormLabel>
          <Col sm='3' className='p-2'>
            <FormCheck type='switch' id='switch1' label='switch1' />
          </Col>
          <FormLabel column sm='2'>
            field4
          </FormLabel>
          <Col sm='3' className='p-2'>
            <Form.Switch id='switch2' label={switchValue.toString()} onChange={handleSwitch} />
          </Col>
        </FormGroup>
      </Form>
      <hr />
      <Form>
        <FormGroup as={Row} className='mb-3'>
          <FormLabel column sm='2'>
            field5
          </FormLabel>
          <Col sm='6'>
            <FormSelect onChange={handleSelect} name='select1' value={selectValue}>
              <option value=''>selct option placeholder</option>
              {selectOptions.map((option) => {
                return (
                  <option key={option.name} value={option.value}>
                    {option.name}
                  </option>
                );
              })}
            </FormSelect>
          </Col>
        </FormGroup>
        <FormGroup as={Row}>
          <FormLabel column sm='2'>
            field6
          </FormLabel>
          <Col sm='6'>
            <FormControl type='number' name='numberInput' min='0' />
          </Col>
        </FormGroup>
      </Form>
    </BaseModalBody>
  );
};
