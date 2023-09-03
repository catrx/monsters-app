export type Monster = {
  name: string;
  skills: Skill;
  actions: Action[];
};

type Skill = {
  history: number;
  perception: number;
};

type Action = {
  name: string;
};
