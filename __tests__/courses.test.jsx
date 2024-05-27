import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import {
  render,
  waitFor,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { SWRConfig } from "swr";
import { NextUIProvider } from "@nextui-org/react";
import "@testing-library/jest-dom";
import Home from "../pages/courses";
import "whatwg-fetch";

const courses = [
  {
    courseTitle: "파이썬 기초",
    courseType: "LEGACY",
    courseLanguage: "Python",
    lessonsInCourse: 12,
    published: "2019-12-02T06:00:00.000Z",
    courseDetailType: "plain",
    CourseDetail:
      "10년 안에 프로그래밍을 모르면 문맹이 되는 시대가 올 것입니다. 인공지능, 로봇, 사물인터넷, 가상현실, 스마트카 등 다가오는 미래 산업에 프로그래밍을 빼고 말할 수 있는 것은 없습니다. 그렇다면, 어떤 언어로 시작하는 게 좋을까요? 코드잇에서는 파이썬을 가장 추천합니다.",
  },
  {
    courseTitle: "파이썬으로 시작하는 알고리즘",
    courseType: "V1",
    courseLanguage: "Python",
    lessonsInCourse: 33,
    published: "2019-12-02T06:00:00.000Z",
    courseDetailType: "plain",
    CourseDetail:
      "막무가내 코딩은 이제 그만! 효율적이고 효과적인 개발을 위해서는 알고리즘에 대한 이해가 필수적입니다. 개발의 기초 체력이 되는 알고리즘, 파이썬으로 시작해 보세요!",
  },
];

const server = setupServer(
  rest.get(
    "https://front-assignment.codeit.team/courses.json",
    (req, res, ctx) => {
      return res(ctx.json(courses));
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("loads and displays courses", async () => {
  customRender(<Home />);

  await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i));

  expect(
    screen.getByRole("button", { name: "모든 타입 ," })
  ).toBeInTheDocument();
  expect(screen.getByText("파이썬 기초")).toBeInTheDocument();
  expect(screen.getByText("파이썬으로 시작하는 알고리즘")).toBeInTheDocument();
});

describe("when specific course type is selected", () => {
  beforeEach(async () => {
    customRender(<Home />);

    await waitForElementToBeRemoved(() => screen.queryByLabelText(/loading/i));
  });

  test("when Legacy type is selected, it should only show Legacy type courses", async () => {
    fireEvent.click(screen.getByRole("button", { name: "모든 타입 ," }));

    await waitFor(() =>
      expect(screen.getByRole("option", { name: "Legacy" })).toBeInTheDocument()
    );
    fireEvent.click(screen.getByRole("option", { name: "Legacy" }));

    expect(screen.queryByText("파이썬 기초")).toBeInTheDocument();
    expect(
      screen.queryByText("파이썬으로 시작하는 알고리즘")
    ).not.toBeInTheDocument();
  });

  test("when V1 type is selected, it should only show V1 type courses", async () => {
    fireEvent.click(screen.getByRole("button", { name: "모든 타입 ," }));

    await waitFor(() =>
      expect(screen.getByRole("option", { name: "Legacy" })).toBeInTheDocument()
    );
    fireEvent.click(screen.getByRole("option", { name: "Version 1" }));

    expect(screen.queryByText("파이썬 기초")).not.toBeInTheDocument();
    expect(
      screen.queryByText("파이썬으로 시작하는 알고리즘")
    ).toBeInTheDocument();
  });
});

describe("when search query is typed and submitted", () => {
  beforeEach(async () => {
    customRender(<Home />);

    await waitForElementToBeRemoved(() => screen.queryByLabelText(/loading/i));
  });

  test("when '파이썬 기초 Python' is typed and submitted, no course should be displayed", async () => {
    const input = screen.getByPlaceholderText(
      "강의 이름, 언어, 코스 소개로 검색하세요."
    );
    fireEvent.change(input, { target: { value: "파이썬 기초 Python" } });
    fireEvent.click(screen.getByText("검색"));

    expect(screen.queryByText("파이썬 기초")).not.toBeInTheDocument();
    expect(
      screen.queryByText("파이썬으로 시작하는 알고리즘")
    ).not.toBeInTheDocument();
  });

  test("when '파이썬 기초' is typed and submitted, only '파이썬 기초' course should be displayed", async () => {
    const input = screen.getByPlaceholderText(
      "강의 이름, 언어, 코스 소개로 검색하세요."
    );
    fireEvent.change(input, { target: { value: "파이썬 기초" } });
    fireEvent.click(screen.getByText("검색"));

    expect(screen.queryByText("파이썬 기초")).toBeInTheDocument();
    expect(
      screen.queryByText("파이썬으로 시작하는 알고리즘")
    ).not.toBeInTheDocument();
  });

  test("when '파파파' is typed and submitted, no courses should be displayed", async () => {
    const input = screen.getByPlaceholderText(
      "강의 이름, 언어, 코스 소개로 검색하세요."
    );
    fireEvent.change(input, { target: { value: "파파파" } });
    fireEvent.click(screen.getByText("검색"));

    expect(screen.queryByText("파이썬 기초")).not.toBeInTheDocument();
    expect(
      screen.queryByText("파이썬으로 시작하는 알고리즘")
    ).not.toBeInTheDocument();
  });
});

const AllTheProviders = ({ children }) => {
  return (
    <SWRConfig
      value={{
        dedupingInterval: 0,
        provider: () => new Map(),
        fetcher: async (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <NextUIProvider>{children}</NextUIProvider>
    </SWRConfig>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });
