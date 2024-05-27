import * as React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import MyInput from "./MyInput";

describe("MyInput", () => {
  it("should render correctly", () => {
    // MyInput 컴포넌트를 렌더링합니다.
    const wrapper = render(<MyInput label="test input" />);
    // wrapper.unmount() 함수를 호출해도 에러가 발생하지 않는지 확인합니다.
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should clear the value and onClear is triggered", async () => {
    // 필요하다면 jest mock 함수나 ref를 생성합니다.
    const onClear = jest.fn();
    const ref = React.createRef<HTMLInputElement>();

    // MyInput 컴포넌트를 렌더링합니다.
    const { getByRole } = render(
      <MyInput
        ref={ref}
        isClearable
        defaultValue="junior@nextui.org"
        label="test input"
        onClear={onClear}
      />
    );

    // clearButton을 클릭합니다.
    const clearButton = getByRole("button");
    expect(clearButton).not.toBeNull();
    fireEvent.click(clearButton);

    // input 요소의 값이 ""인지 확인합니다.
    // onClear 함수가 한 번 호출되었는지 확인합니다.
    await waitFor(() => {
      expect(ref.current?.value)?.toBe("");
      expect(onClear).toHaveBeenCalledTimes(1);
    });
  });
});
