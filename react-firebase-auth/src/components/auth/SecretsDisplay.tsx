import React, { useEffect, useState } from 'react';
import { getSecrets } from '../../api/auth-api';

export const SecretsDisplay = () => {
  const [secrets, setSecrets] = useState<string[]>([]);

  useEffect(() => {
    getSecrets().then((data) => setSecrets([...data]));
  }, []);
  return (
    <div>
      <h2>Secrets</h2>
      <ul>
        {secrets.map((secret, index) => (
          <li key={index}>{secret}</li>
        ))}
      </ul>
    </div>
  );
};
