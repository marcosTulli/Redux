import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi"

export function loadCourseSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSuccess(courses) {
    return { type: types.UPDATE_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(courses) {
    return { type: types.CREATE_COURSES_SUCCESS, courses };
}

export function loadCourses() {
    return function (dispatch) {
        return courseApi
            .getCourses()
            .then(courses => {
                dispatch(loadCourseSuccess(courses))
            }).catch(error => {
                throw error;
            })
    }
}

export function saveCourse(course) {
    // eslint-disable-next-line no-unused-vars
    return function (dispatch) {
        return courseApi
            .saveCourse(course)
            .then(savedCourse => {
                course.id
                    ? dispatch(updateCourseSuccess(savedCourse))
                    : dispatch(createCourseSuccess(savedCourse));
            })
            .catch(error => {
                throw error;
            })
    }

}