import React from "react";
import { mount } from "enzyme";
import { authors, newCourse, courses } from "../../../tools/mockData";
import { ManageCoursePage } from "./ManageCoursesPage";

function render(args) {
    const defaultProps = {
        authors,
        courses,
        history: {},
        saveCourse: jest.fn(),
        loadAuthors: jest.fn(),
        loadCourses: jest.fn(),
        course: newCourse,
        match: {}
    };

    const props = { ...defaultProps, ...args };

    return mount(<ManageCoursePage {...props} />);
}

it("sets error when attempting to osave an empty tittle field", () => {
    const wrapper = render();
    wrapper.find("form").simulate("submit");
    const error = wrapper.find(".alert").first();
    expect(error.text()).toBe("Title is required.");
});