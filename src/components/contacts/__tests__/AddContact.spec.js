import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../../utils";
import AddContact from "../AddContact";

const setup = (props = {}) => {
  const component = shallow(<AddContact {...props} />);
  return component;
};

/** ************************************************ */

describe("verify handleChange invokes setState", () => {
  let component;

  beforeEach(() => {
    const mock = jest.fn();
    component = setup({ submit: mock });
  });

  it("should call setState on name", () => {
    const mockEvent = {
      target: {
        name: "name",
        value: "Sreedhar"
      }
    };

    const expected = {
      name: "Sreedhar",
      email: "",
      phone: "",

      submitActive: false
    };

    component.instance().handleChange(mockEvent);
    expect(component.state()).toEqual(expected);
  });

  it("should call setState on email", () => {
    const mockEvent = {
      target: {
        name: "email",
        value: "sr@gmail.com"
      }
    };

    const expected = {
      name: "",
      email: "sr@gmail.com",
      phone: "",

      submitActive: false
    };

    component.instance().handleChange(mockEvent);
    expect(component.state()).toEqual(expected);
  });

  it("should call setState on phone", () => {
    const mockEvent = {
      target: {
        name: "phone",
        value: "222-222-2222"
      }
    };

    const expected = {
      name: "",
      email: "",
      phone: "222-222-2222",

      submitActive: false
    };

    component.instance().handleChange(mockEvent);
    expect(component.state()).toEqual(expected);
  });

  it("should modify submitActive when all input fields are populated", () => {
    const nameEvent = {
      target: {
        name: "name",
        value: "Sreedhar"
      }
    };

    const emailEvent = {
      target: {
        name: "email",
        value: "sr@gmail.com"
      }
    };

    const phoneEvent = {
      target: {
        name: "phone",
        value: "222-222-2222"
      }
    };

    const expected = {
      name: "Sreedhar",
      email: "sr@gmail.com",
      phone: "222-222-2222",

      submitActive: true
    };

    component.instance().handleChange(nameEvent);
    component.instance().handleChange(emailEvent);
    component.instance().handleChange(phoneEvent);
    expect(component.state()).toEqual(expected);
  });
});

/** ************************************************ */

describe("verify handleChange invokes checkFields", () => {
  let component;

  beforeEach(() => {
    const mock = jest.fn();
    component = setup({ submit: mock });
  });

  it("should call checkFields", () => {
    const spy = jest.spyOn(component.instance(), "checkFields");
    component.instance().forceUpdate();

    const nameEvent = {
      target: {
        name: "name",
        value: "Sreedhar"
      }
    };

    component.instance().handleChange(nameEvent);
    expect(spy).toHaveBeenCalled();
  });
});

/** ************************************************ */

describe("verify handleChange is called with correct params", () => {
  let component;

  beforeEach(() => {
    const mock = jest.fn();
    component = setup({ submit: mock });
  });

  it("should call handle change on name with correct params", () => {
    const spy = jest.spyOn(component.instance(), "handleChange");
    component.instance().forceUpdate();

    const nameEvent = {
      target: {
        name: "name",
        value: "Sreedhar"
      }
    };

    findByTestAttr(component, "tig-name").simulate("change", nameEvent);

    expect(spy).toHaveBeenCalledWith(nameEvent);
  });

  it("should call handle change on email with correct params", () => {
    const spy = jest.spyOn(component.instance(), "handleChange");
    component.instance().forceUpdate();

    const emailEvent = {
      target: {
        name: "email",
        value: "sr@gmail.com"
      }
    };

    findByTestAttr(component, "tig-email").simulate("change", emailEvent);

    expect(spy).toHaveBeenCalledWith(emailEvent);
  });

  it("should call handle change on phone with correct params", () => {
    const spy = jest.spyOn(component.instance(), "handleChange");
    component.instance().forceUpdate();

    const phoneEvent = {
      target: {
        name: "phone",
        value: "222-222-2223"
      }
    };

    findByTestAttr(component, "tig-phone").simulate("change", phoneEvent);

    expect(spy).toHaveBeenCalledWith(phoneEvent);
  });
});

/** ************************************************ */

describe("simulate handleSubmit", () => {
  let component;
  let mockSubmit;

  beforeEach(() => {
    mockSubmit = jest.fn();
    component = setup({ submit: mockSubmit });
  });

  it("should call preventDefault()", () => {
    const mockPreventDefault = jest.fn();

    const mockEvent = {
      preventDefault: mockPreventDefault
    };

    component.instance().handleSubmit(mockEvent);

    expect(mockPreventDefault).toHaveBeenCalled();
  });

  it("should return if submitActive is false", () => {
    component.setState({
      name: "sree",
      email: "",
      phone: "",

      submitActive: false
    });
    const expected = {
      name: "sree",
      email: "",
      phone: ""
    };
    const mockPreventDefault = jest.fn();
    const mockEvent = {
      preventDefault: mockPreventDefault
    };

    component.instance().forceUpdate();

    component.instance().handleSubmit(mockEvent);
    expect(component.state().name).toBe("sree");
    expect(mockSubmit).not.toHaveBeenCalledWith(expected);
  });

  it("should call handleSubmit with correct params", () => {
    component.setState({
      name: "sree",
      email: "sr@gmail.com",
      phone: "333-333-3333",

      submitActive: true
    });

    const expected = {
      name: "sree",
      email: "sr@gmail.com",
      phone: "333-333-3333"
    };

    const mockPreventDefault = jest.fn();
    const mockEvent = {
      preventDefault: mockPreventDefault
    };

    component.instance().handleSubmit(mockEvent);
    expect(mockSubmit).toHaveBeenCalledWith(expected);
  });

  it("should call handleSubmit with correct params on submit", () => {
    const spy = jest.spyOn(component.instance(), "handleSubmit");
    component.instance().forceUpdate();

    const mockPreventDefault = jest.fn();
    const mockEvent = {
      preventDefault: mockPreventDefault
    };

    const wrapper = findByTestAttr(component, "addC-form");
    wrapper.simulate("submit", mockEvent);
    expect(spy).toHaveBeenCalledWith(mockEvent);
    console.log(wrapper.debug());
  });
});

/** *************************************************** */

describe("checkFields", () => {

  let component;
  let mockSubmit;

  beforeEach(() => {
    mockSubmit = jest.fn();
    component = setup({ submit: mockSubmit });
  });

  it("should setState if it meets conditions", () => {
    component.setState({
      name: "sree",
      email: "sr@gmail.com",
      phone: "333-333-3333",

      submitActive: false
    });

    component.instance().checkFields();

    expect(component.state().submitActive).toEqual(true);
  });

  it("should setState if it does not meet conditions", () => {
    component.setState({
      name: "sree",
      email: "sr@gmail.com",
      phone: "",

      submitActive: true
    });

    component.instance().checkFields();

    expect(component.state().submitActive).toEqual(false);
  });
});
