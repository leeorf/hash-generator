import { useState } from 'react';

type Props = {
  testId?: string;
};

export const Input = ({ testId }: Props) => {
  const [isHidden, setIsHidden] = useState(true);

  return <input type={isHidden ? 'password' : 'text'} data-testid={testId} />;
};
