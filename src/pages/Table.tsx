import { useState } from 'react';
import { Table as BaseTable, Collapse } from 'react-bootstrap';

export const Table = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => setOpen(!open);

  return (
    <div className='p-5'>
      <BaseTable striped hover responsive size='sm'>
        <thead>
          <tr onClick={handleClick} aria-controls='table-body' aria-expanded={open}>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th className='text-end'>Number</th>
          </tr>
        </thead>
        <Collapse in={open}>
          <tbody id='table-body'>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td className='text-end'>10000000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td className='text-end'>1000</td>
            </tr>
          </tbody>
        </Collapse>
      </BaseTable>
    </div>
  );
};
