import { Alert } from 'react-bootstrap';

export const AlertComponent = () => {
  return (
    <Alert
      variant="danger"
      className="text-center p-5"
      dismissible
    >
      <Alert.Heading className="text-center">Alert Heading</Alert.Heading>
      <p>Alert message</p>
    </Alert>
  );
};
