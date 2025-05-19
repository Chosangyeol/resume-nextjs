import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'C',
      level: 1,
    },
    {
      title: 'C++',
      level: 1,
    },
    {
      title: 'C#',
      level: 2,
    },
  ],
};

const GameEngine: ISkill.Skill = {
  category: 'GameEngine',
  items: [
    {
      title: 'Unity Engine',
      level: 2,
    },
    {
      title: 'Unreal Engine',
      level: 1,
    },
  ],
};


const skill: ISkill.Payload = {
  disable: false,
  skills: [
    programmingLanguages,
    GameEngine,
  ],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
