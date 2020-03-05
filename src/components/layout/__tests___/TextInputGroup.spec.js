import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../../utils";
import TextInputGroup from "../TextInputGroup";

const setup = (props = {}) => {
  const component = shallow(<TextInputGroup {...props} />);
  return component;
};

describe("Test TextInputGroup", () => {
  let component;

  /** ************************************************ */

  describe("Validate Inputs", () => {
    beforeEach(() => {
      const mock = jest.fn();

      const props = {
        label: "Test Label",
        name: "Test Name",
        value: "Test Value",
        type: "text",
        placeholder: "Enter Data...",
        onChange: mock
      };
      component = setup(props);
    });

    it("should render TextInputGroup with correct inputs", () => {
      const wrapper = findByTestAttr(component, "root-testInputGroup");
      
      expect(wrapper.getElements()[0].props.children[0].type).toEqual("label");
      expect(wrapper.getElements()[0].props.children[0].props.htmlFor).toEqual(
        "Test Name"
      );
      expect(wrapper.getElements()[0].props.children[0].props.children).toEqual(
        "Test Label"
      );

      expect(wrapper.getElements()[0].props.children[1].type).toEqual("input");
      expect(wrapper.getElements()[0].props.children[1].props.name).toEqual(
        "Test Name"
      );
      expect(wrapper.getElements()[0].props.children[1].props.value).toEqual(
        "Test Value"
      );
      expect(wrapper.getElements()[0].props.children[1].props.type).toEqual(
        "text"
      );
      expect(
        wrapper.getElements()[0].props.children[1].props.placeholder
      ).toEqual("Enter Data...");

      //wrapper.getElements()[0].props.children[1].props.onChange =
    });

    it("Expects to run onChange function when data is entered", () => {
      const wrapper = findByTestAttr(component, "test-form-input");
      expect(wrapper.getElements()[0].props.onChange.mock.calls.length).toEqual(0);

      wrapper.simulate("change");
      expect(wrapper.getElements()[0].props.onChange.mock.calls.length).toEqual(1);
    });
  });

  /** ************************************************ */

  describe("Simulate Change", () => {
    beforeEach(() => {
      const mock = jest.fn();
      mock.mockReturnValue("bar");
      let result = mock("foo");

      const props = {
        label: "Test Label",
        name: "Test Name",
        value: "Test Value",
        type: "text",
        placeholder: "Enter Data...",
        onChange: mock
      };
      component = setup(props);
    });

    it("Expects to run onClick function when data is entered", () => {
      const wrapper = findByTestAttr(component, "test-form-input");
      expect(wrapper.getElements()[0].props.onChange).toHaveBeenCalledWith("foo");
      expect(wrapper.getElements()[0].props.onChange.mock.results[0].value).toEqual("bar");
  
    });
  });

  /** ************************************************ */

  describe('Checking PropTypes', () => {
    it('should not throw a warning', () => {

      const expectedProps = {
        label: "Test Label",
        name: "Test Name",
        value: "Test Value",
        type: "text",
        placeholder: "Enter Data...",
        onChange: jest.fn()
      };

      const propsErr = checkProps(TextInputGroup, expectedProps);

      expect(propsErr).toBeUndefined()

    })
  });
});
