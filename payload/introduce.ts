import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요. 어릴때 부터 게임을 좋아해, 게임 개발자를 지망하게된 게임 개발자 지망생 조상열입니다.',
    '저는 현재 대전의 배재대학교 게임공학과에 3학년으로 재학중이고, 2025년도 부터 학과 게임 개발 동아리 PlAYER의 회장을 맡고 있습니다. 또한 배재대학교교 신기술혁신융합사업단의 4기 서포터즈로 활동하고 있습니다.',
    '게임 개발자를 지망하는 학생으로서, 플레이어가가 진정으로 재미를 느낄 수 있고 누군가의 기억에 오래토록 남을 수 있는 게임을 만들고 싶습니다.'
  ],
  sign: 'Tux',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
