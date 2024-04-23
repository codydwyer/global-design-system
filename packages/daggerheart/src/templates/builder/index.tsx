import { useParams, useNavigate } from 'react-router-dom';
import { generateId } from '~/utils';

import DefaultLayout from '~/layouts/DefaultLayout';
import { useAppSelector, useAppDispatch } from '~/hooks';
import { DetailProvider } from '~/context';
import { selectCharacterById, selectCharacter, createCharacter } from '~/ducks/characters';
import CharacterBuilder from '~/components/CharacterBuilder';
import { useEffect } from 'react';

const BuilderTemplate = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { characterId } = useParams();

  const navigationHandler = () => {
    const character = {
      id: generateId(),
    };
    dispatch(createCharacter(character));
    navigate(`/builder/${character.id}`);
  };

  !characterId && navigationHandler();

  const character = useAppSelector((state) => selectCharacterById(state, characterId!));

  useEffect(() => {
    dispatch(selectCharacter(character!));
  }, []);

  return (
    <DefaultLayout>
      <DetailProvider>
        <CharacterBuilder character={character!} />
      </DetailProvider>
    </DefaultLayout>
  );
};

export default BuilderTemplate;
