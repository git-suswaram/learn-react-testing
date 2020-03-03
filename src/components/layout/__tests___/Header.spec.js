import React from "react";
import { shallow } from "enzyme";
import Header from "./../Header";
import { findByTestAttr } from "../../../../utils";

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Test Header", () => {
  let component;

  describe("Have No props", () => {
    beforeEach(() => {
      component = setup();
    });

    it("should render header with default Props", () => {
      const wrapper = findByTestAttr(component, "branding-text");
      expect(wrapper.length).toBe(1);
      expect(wrapper.text()).toEqual("My App");
    });
  });

  describe("Have props", () => {
    beforeEach(() => {
      const props = {
        branding: "Contact Manager"
      };
      component = setup({ ...props });
    });

    it("should render header with Props passed by caller", () => {
      const wrapper = findByTestAttr(component, "branding-text");
      expect(wrapper.length).toBe(1);
      expect(wrapper.text()).toEqual("Contact Manager");
    });
  });
});
