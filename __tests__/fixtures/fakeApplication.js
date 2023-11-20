const mongoose = require('mongoose');

module.exports = function makeFakeApplication(baseUser = "123456789123456") {
    return {
        baseUser: baseUser,
        motivation: "My Motivation",
        academicLevel: "String",
        academicStatus: "String",
        major: "String",
        institution: "String",
        educationStartDate: "String",
        educationEndDate: "String",
        company: "String",
        position: "String",
        workStartDate: "String",
        workEndDate: "String",
        workActivities: "String",
    }
}
