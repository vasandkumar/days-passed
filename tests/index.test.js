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
});
