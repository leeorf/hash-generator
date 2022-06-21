import { Footer } from '@/components/Footer';
import { Input } from '../Input';

import * as S from './styles';

export const App = () => {
  return (
    <>
      <S.GlobalStyles />
      <S.Content>
        <Input />
      </S.Content>
      <Footer />
    </>
  );
};
