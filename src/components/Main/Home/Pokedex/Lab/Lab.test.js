import React from "react";
import { shallow } from "enzyme";
import Lab from "./Lab";

describe("Lab", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Lab />);
    expect(wrapper).toMatchSnapshot();
  });
});
