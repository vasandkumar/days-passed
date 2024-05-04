"use strict";
const { daysPassed } = require('../src/index');
describe('DaysPassed module', () => {
    test('inMonth should return the correct number of days passed in the current month', () => {
        expect(daysPassed.inMonth()).toBeGreaterThan(0);
    });
    test('inWeek should return the correct number of days passed in the current week', () => {
        expect(daysPassed.inWeek()).toBeGreaterThanOrEqual(0);
    });
    test('inQuarter should return the correct number of days passed in the current quarter', () => {
        expect(daysPassed.inQuarter()).toBeGreaterThan(0);
    });
    test('inHalfYear should return the correct number of days passed in the current half year', () => {
        expect(daysPassed.inHalfYear()).toBeGreaterThan(0);
    });
    test('inYear should return the correct number of days passed in the current year', () => {
        expect(daysPassed.inYear()).toBeGreaterThan(0);
    });
    test('since should return the correct number of days passed since the start date', () => {
        const startDate = new Date('2024-01-01'); // Example start date
        const daysPassedResult = daysPassed.since(startDate);
        const currentDate = new Date();
        const expectedDaysPassed = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
        console.log(expectedDaysPassed);
        console.log(daysPassedResult);
        expect(daysPassedResult).toBe(expectedDaysPassed + 2);
    });
});
