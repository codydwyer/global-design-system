import { ISelection, TSelection, TTrait } from '.';
import { TTraits } from '~/types';
import './style.scss';

export interface ISelectTraitProps {
  id: string;
  label: string;
  traitSelectHandler: (trait: TTrait, selection: TSelection) => void;
  selection: TSelection;
  selectionList: ISelection[];
}

export interface ISelectTraitsProps {
  traitSelectHandler: (trait: TTrait, selection: TSelection) => void;
  selectionList: ISelection[];
  builderTraits: TTraits;
  updateHandler: (traits: TTraits) => void;
}

const traitList: TTrait[] = ['agility', 'strength', 'finesse', 'instinct', 'presence', 'knowledge'];
const selections: TSelection[] = [
  {
    name: 'plus-2',
    value: 2,
  },
  {
    name: 'plus-1-1',
    value: 1,
  },
  {
    name: 'plus-1-2',
    value: 1,
  },
  {
    name: 'minus-1',
    value: -1,
  },
];

const SelectTrait = ({ id, label, selection, traitSelectHandler, selectionList }: ISelectTraitProps) => {
  const selected = selectionList.find((item) => item.selection.name == id);

  return (
    <div className="trait">
      <span className="label">{label}</span>
      <select
        className="trait-select"
        name={id}
        onChange={(event) => traitSelectHandler(event.target.value, selection)}
        defaultValue={selected && selected.trait}
      >
        <option value={''}>Select 1</option>
        {traitList.map((traitOption) => {
          return (
            <option key={`${id}-${traitOption}`} value={traitOption}>
              {traitOption}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const SelectTraits = ({ selectionList, traitSelectHandler, builderTraits, updateHandler }: ISelectTraitsProps) => {
  return (
    <>
      <div className="trait-selector">
        <SelectTrait
          id="plus-2"
          label={'Pick +2 trait'}
          selection={selections[0]}
          traitSelectHandler={traitSelectHandler}
          selectionList={selectionList}
        />
        <SelectTrait
          id="plus-1-1"
          label={'Pick +1 trait'}
          selection={selections[1]}
          traitSelectHandler={traitSelectHandler}
          selectionList={selectionList}
        />
        <SelectTrait
          id="plus-1-2"
          label={'Pick +1 trait'}
          selection={selections[2]}
          traitSelectHandler={traitSelectHandler}
          selectionList={selectionList}
        />
        <SelectTrait
          id="minus-1"
          label={'Pick -1 trait'}
          selection={selections[3]}
          traitSelectHandler={traitSelectHandler}
          selectionList={selectionList}
        />
      </div>
      <button className={'use-selected-traits-btn'} onClick={() => updateHandler(builderTraits)}>
        Use selected traits
      </button>
    </>
  );
};

export default SelectTraits;
