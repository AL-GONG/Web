import { rest } from "msw";

const baseURL = process.env.REACT_APP_SERVER_BASE_URL;

export const handlers = [
  // GET
  rest.get(baseURL + "/study/list", (req, res, ctx) => {
    return res(
      ctx.json({
        status: 200,
        message: "SUCCESS",
        data: [
          {
            id: "test1",
            name: "알고리즘 박살",
          },
          {
            id: "test2",
            name: "카카오 문제 박살내기",
          },
        ],
      })
    );
  }),
  rest.get(baseURL + "/study/:studyId", (req, res, ctx) => {
    const id = req.params.studyId;
    return res(
      ctx.json({
        status: 200,
        message: "SUCCESS",
        data: {
          id,
          name: id === "test1" ? "알고리즘 박살" : "카카오 문제 박살내기",
          url: "https://github.com",
          members: [
            {
              id: "1",
              name: "woong-jae",
              imageUrl: "https://avatars.githubusercontent.com/u/33976823?v=4",
              githubUrl: "https://github.com/woong-jae"
            },
            {
              id: "2",
              name: "Kingdonggyu",
              imageUrl: "https://avatars.githubusercontent.com/u/33220404?v=4",
              githubUrl: "https://github.com/Kingdonggyu"
            },
            {
              id: "3",
              name: "SeongukBaek",
              imageUrl: "https://avatars.githubusercontent.com/u/33208303?v=4",
              githubUrl: "https://github.com/SeungukBaek"
            },
            {
              id: "4",
              name: "Go-Jaecheol",
              imageUrl: "https://avatars.githubusercontent.com/u/33208246?v=4",
              githubUrl: "https://github.com/Go-Jaecheol"
            },
          ],
        },
      })
    );
  }),
  rest.get(baseURL + "/session/:sessionId", (req, res, ctx) => {
    return res(
      ctx.delay(2500),
      ctx.json({
        status: 200,
        message: "SUCCESS",
        data: {
          id: req.params.sessionId,
          name: "1주차",
          start: new Date(2022, 6, 12),
          end: new Date(2022, 6, 18),
        },
      })
    );
  }),
  rest.get(baseURL + "/problem/list", (req, res, ctx) => {
    return res(
      ctx.json({
        status: 200,
        message: "SUCCESS",
        data: [
          {
            id: "p1",
            number: "92342",
            name: "양궁 대회",
            platform: "programmers",
          },
          {
            id: "p2",
            number: "92343",
            name: "양과 늑대",
            platform: "programmers",
          },
          {
            id: "p3",
            number: "92344",
            name: "파괴되지 않은 건물",
            platform: "programmers",
          },
          {
            id: "p4",
            number: "1516",
            name: "게임 개발",
            platform: "boj",
          },
        ],
      })
    );
  }),
  rest.get(baseURL + "/solution/list/:problemId", (req, res, ctx) => {
    const getRandomBoolean = () => {
      let num = Math.random() * 2;
      return Boolean(Math.floor(num) % 2);
    };

    return res(
      ctx.delay(2500),
      ctx.json({
        status: 200,
        message: "SUCCESS",
        data: [
          {
            name: "woong-jae",
            imageUrl: "https://avatars.githubusercontent.com/u/33976823?v=4",
            solve: getRandomBoolean()
          },
          {
            name: "Kingdonggyu",
            imageUrl: "https://avatars.githubusercontent.com/u/33220404?v=4",
            solve: getRandomBoolean()
          },
          {
            name: "SeongukBaek",
            imageUrl: "https://avatars.githubusercontent.com/u/33208303?v=4",
            solve: getRandomBoolean()
          },
          {
            name: "Go-Jaecheol",
            imageUrl: "https://avatars.githubusercontent.com/u/33208246?v=4",
            solve: getRandomBoolean()
          },
        ],
      })
    );
  }),
];
