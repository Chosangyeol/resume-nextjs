import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'VR게임을 통한 관광지 경험 개선',
      startedAt: '20025-01-08',
      endedAt: '2025-01-23',
      where: '미국 시에틀',
      descriptions: [
        {
          content:
            '관광지를 바탕으로 한 VR 게임을 개발 및 재공하여 관광객의 경험을 개선하는 프로젝트',
        },
        {
          content:
            '미국 시에틀의 Space Needle 관광지를 바탕으로 한 VR 방탈출 게임을 개발하여, 미국 시에틀의 Bellevue Collage 학생 및 관광객에게 시연 및 설문',
          weight: 'MEDIUM',
          descriptions: [
            { content: '4인 프로젝트로, 서브 개발 및 Space Needle 3D 모델링을 담당' },
            { content: '평균적인 플레이 시간은 10분 내외로, 외계의 Space Needle을 탈출하는 게임' },
            { content: '시연 및 설문 결과, 이러한 컨텐츠가 있다면 재방문 의사가 있음을 확인' },
          ],
        },
      ],
    },
  ],
};

export default project;
