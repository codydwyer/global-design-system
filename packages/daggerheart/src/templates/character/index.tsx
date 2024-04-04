import { useParams } from 'react-router-dom';
import { Content } from '@global-design-system/react-components';
import DefaultLayout from '~/layouts/DefaultLayout';
import { useAppSelector, useAppDispatch } from '~/hooks';
import { DetailProvider } from '~/context';
import { selectCharacterById, selectCharacter } from '~/ducks/characters';
import CharacterSheet from '~/components/CharacterSheet';

const CharacterTemplate = () => {
  const dispatch = useAppDispatch();
  const { characterId } = useParams();
  const character = useAppSelector((state) => selectCharacterById(state, characterId!));
  dispatch(selectCharacter(character!));

  return (
    <DefaultLayout>
      <DetailProvider>
        <Content>
          <CharacterSheet character={character!} />
        </Content>
      </DetailProvider>
    </DefaultLayout>
  );
};

export default CharacterTemplate;
