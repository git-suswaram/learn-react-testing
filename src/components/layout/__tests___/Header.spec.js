import React from "react";
import { shallow } from "enzyme";
import Header from "./../Header";
import { findByTestAttr, checkProps } from "../../../../utils";

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Test Header", () => {
  let component;

  /** ************************************************ */

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

  /** ************************************************ */

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

  /** ************************************************ */

  describe("Do not depend on value of props", () => {

    beforeEach(() => {
      component = setup();
    });

    it("renders home link", () => {
      const wrapper = findByTestAttr(component, 'home-link');
      expect(wrapper.getElements()[0].props.href).toEqual("/");
      expect(wrapper.getElements()[0].props.children).toEqual("Home");
    });

    it("has proper classes for root-nav", () => {
      const wrapper = findByTestAttr(component, 'root-nav');
      expect(wrapper.hasClass('navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0')).toBeTruthy();
    })

  });

/** ************************************************ */

  describe('Checking PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {branding: 'Test Header'};
      const propsErr = checkProps(Header, expectedProps);

      expect(propsErr).toBeUndefined()

    })
  });
});
