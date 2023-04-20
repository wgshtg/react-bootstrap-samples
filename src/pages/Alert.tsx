import { Alert } from 'react-bootstrap';

export const AlertComponent = () => {
  return (
    <Alert
      variant="danger"
      className="text-center position-absolute top-50 start-50 translate-middle p-5"
      dismissible
    >
      <Alert.Heading className="text-center">Alert Heading</Alert.Heading>
      <p>Alert message</p>
    </Alert>
  );
};
