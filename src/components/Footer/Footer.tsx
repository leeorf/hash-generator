import { version } from '@package';
import { TestID } from '@/constants';

import * as S from './styles';

export const Footer = () => {
  return (
    <S.Footer>
      <p>
        Version: <span data-testid={TestID.VERSION}>{version}</span>
      </p>
    </S.Footer>
  );
};
