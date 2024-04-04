import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';
import { v4 as uuid } from 'uuid';
import { Content } from '@global-design-system/react-components';

import { selectCharacters, createCharacter, deleteCharacter } from '~/ducks/characters';

import ThemeContext from '../../context/theme';
import DefaultLayout from '../../layouts/DefaultLayout';
import { ICharacter } from '~/types';

import './style.scss';

export const CharacterListItem = (character: ICharacter) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectHandler = () => {
    navigate(`/character/${character.id}`);
  };
  const editHandler = () => {
    navigate(`/builder/${character.id}`);
  };
  const deleteHandler = () => {
    dispatch(deleteCharacter(character));
  };

  return (
    <tr>
      <td>{character.name}</td>
      <td>
        <button onClick={selectHandler}>view</button>
      </td>
      <td>
        <button onClick={editHandler}>edit</button>
      </td>
      <td>
        <button onClick={deleteHandler}>delete</button>
      </td>
    </tr>
  );
};

const CharacterListTemplate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const classes = clsx(theme, 'main');
  const characters = useSelector(selectCharacters);
  const newHandler = () => {
    const character = {
      id: uuid(),
    };
    dispatch(createCharacter(character));
    navigate(`/builder/${character.id}`);
  };

  return (
    <DefaultLayout>
      <Content>
        <div className={classes}>
          <h1>Character List</h1>
          <button onClick={newHandler}>New Character</button>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {characters.map((character) => (
                <CharacterListItem key={`character-${character.id}`} {...character} />
              ))}
            </tbody>
          </table>
        </div>
      </Content>
    </DefaultLayout>
  );
};

export default CharacterListTemplate;
