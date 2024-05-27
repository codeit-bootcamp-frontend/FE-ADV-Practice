import "@testing-library/jest-dom";
import * as React from "react";
import axios from "axios";
import { render, fireEvent, screen } from "@testing-library/react";
import Login from "./Login";

jest.mock("axios");

beforeEach(() => {
  window.localStorage.removeItem("token");
});

test("allows the user to login successfully", async () => {
  const fakeUserResponse = { token: "fake_user_token" };
  const response = { data: fakeUserResponse };
  axios.post.mockResolvedValue(response);

  render(<Login />);

  // fill out the form
  fireEvent.change(screen.getByLabelText(/username/i), {
    target: { value: "chuck" },
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: "norris" },
  });

  fireEvent.click(screen.getByText(/submit/i));

  // just like a manual tester, we'll instruct our test to wait for the alert
  // to show up before continuing with our assertions.
  const alert = await screen.findByRole("alert");

  // .toHaveTextContent() comes from jest-dom's assertions
  // otherwise you could use expect(alert.textContent).toMatch(/congrats/i)
  // but jest-dom will give you better error messages which is why it's recommended
  expect(alert).toHaveTextContent(/congrats/i);
  expect(window.localStorage.getItem("token")).toEqual(fakeUserResponse.token);
});

test("handles server exceptions", async () => {
  const response = { message: "Internal server error", status: 500 };
  axios.post.mockRejectedValue(response);

  render(<Login />);

  // fill out the form
  fireEvent.change(screen.getByLabelText(/username/i), {
    target: { value: "chuck" },
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: "norris" },
  });

  fireEvent.click(screen.getByText(/submit/i));

  // wait for the error message
  const alert = await screen.findByRole("alert");

  expect(alert).toHaveTextContent(/internal server error/i);
  expect(window.localStorage.getItem("token")).toBeNull();
});
