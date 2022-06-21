import { useState } from 'react';

type Props = {
  testId?: string;
};

export const Input = ({ testId }: Props) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => setIsHidden(!isHidden);

  return (
    <div>
      <input type={isHidden ? 'password' : 'text'} data-testid={testId} />
      <button
        type="button"
        onClick={toggleVisibility}
        data-testid={`${testId}-visibility-toggle`}
      >
        O
      </button>
    </div>
  );
};
