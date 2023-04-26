import { useEffect, useState } from 'react';
import { ProgressBar as DefaultProgressBar } from 'react-bootstrap';

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      setProgress(0);
      return;
    }
    if (progress === 100) {
      setLoading(false);
    }

    const interval = setInterval(() => {
      setProgress((prev) => prev + 10);
    }, 1000);

    // 在 unmount component 時清除 interval
    return () => clearInterval(interval);
  }, [progress, loading, setLoading]);

  // 避免出現 Its return type 'false | Element' is not a valid JSX element. 錯誤
  return loading ? <DefaultProgressBar animated now={progress} /> : null;
};
