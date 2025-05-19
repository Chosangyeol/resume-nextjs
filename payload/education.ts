import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '배재대학교',
      subTitle: '배재대학교 AISW창의융합대학 게임공학과',
      startedAt: '2021-03',
      // endedAt: '2027-02',
    },
    {
      title: '전곡고등학교',
      subTitle: '졸업',
      startedAt: '2018-03',
      endedAt: '2021-02',
    },
  ],
};

export default education;
