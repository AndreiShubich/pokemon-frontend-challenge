/* eslint-disable import/prefer-default-export */
import { INamedAPIResource } from './commonTypes';

// @TODO: Not full interface
export interface IMove {
  id: number;
  name: string;
  accuracy: number;
  effect_chance: number;
  pp: number;
  priority: number;
  power: number;
  // contest_combos: ContestComboSets
  contest_type: INamedAPIResource;
  // contest_effect: APIResource (ContestEffect)
  damage_class: INamedAPIResource;
  // effect_entries: list VerboseEffect
  // effect_changes: list AbilityEffectChange
  // flavor_text_entries: list MoveFlavorText
  generation: INamedAPIResource;
  // machines: list MachineVersionDetail
  // meta: MoveMetaData
  // names: list Name
  // past_values: list PastMoveStatValues
  // stat_changes: list MoveStatChange
  // super_contest_effect: APIResource (SuperContestEffect)
  target: INamedAPIResource;
  type: INamedAPIResource;
}
