import { faGlobe, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

export const Header = () => {
  const [currentLang, setCurrentLang] = useState('');

  const locales = [
    { name: 'English', value: 'en' },
    { name: '正體中文', value: 'zh-TW' },
    { name: '日本語', value: 'ja' },
  ];

  const isCurrentLanguage = (value: string): boolean => {
    return value === currentLang;
  };

  return (
    <Navbar collapseOnSelect bg='dark' expand='lg' fixed='top' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>React Bootstrap Samples</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href=''>menu1</Nav.Link>
            <Nav.Link href=''>menu2</Nav.Link>
          </Nav>
          <Nav.Link href='' className='text-secondary pe-3'>
            login
          </Nav.Link>
          <NavDropdown
            title={
              <span className='link-secondary'>
                <FontAwesomeIcon icon={faUser} />
                User1
              </span>
            }
          >
            <NavDropdown.Item href=''>logout</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={
              <span className='link-secondary'>
                <FontAwesomeIcon icon={faGlobe} />{' '}
              </span>
            }
            id='locale-dropdown'
          >
            {locales.map(({ name, value }) => {
              return (
                <NavDropdown.Item
                  key={name}
                  className={isCurrentLanguage(value) ? 'active' : ''}
                  onClick={() => setCurrentLang(value)}
                >
                  {name}
                </NavDropdown.Item>
              );
            })}
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
