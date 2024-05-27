import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UpperInput from "./UpperInput";

test("sets the value to the upper version of the value", async () => {
  // UpperInput 컴포넌트를 렌더링합니다.
  render(<UpperInput />);

  // input 요소를 찾습니다.
  const upperInput = screen.getByLabelText(/upper/i);
  // input 요소에 "stuff"를 입력합니다.
  const text = "stuff";
  fireEvent.change(upperInput, { target: { value: text } });
  // input 요소의 값이 대문자로 변환되었는지 확인합니다.
  expect(upperInput.value).toEqual(text.toUpperCase());
});
