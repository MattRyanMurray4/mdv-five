export interface Lift {
  id: string;
  name: string;
  muscleGroups: string;
  myOneRep: string;
  currentSetRep: string;
  percentOfOneRep: number;
}

export const emptyLift = {
  id: '',
  name: '',
  muscleGroups: '',
  myOneRep: '',
  currentSetRep: '',
  percentOfOneRep: 0,
};
