class DaysPassed {
    /**
     * Calculates the number of days passed in the current month.
     * @returns The number of days passed in the current month.
     */
    inMonth(): number {
        const currentDate = new Date();
        return currentDate.getDate();
    }

    /**
     * Calculates the number of days passed in the current week.
     * @returns The number of days passed in the current week.
     */
    inWeek(): number {
        const currentDate = new Date();
        const dayOfWeek = currentDate.getDay();
        return dayOfWeek === 0 ? 0 : dayOfWeek;
    }

    /**
     * Calculates the number of days passed in the current quarter.
     * @returns The number of days passed in the current quarter.
     */
    inQuarter(): number {
        const currentDate = new Date();
        const quarterStartMonth = Math.floor((currentDate.getMonth() / 3)) * 3;
        const quarterStartDate = new Date(currentDate.getFullYear(), quarterStartMonth, 1);
        const daysPassed = Math.floor((currentDate.getTime() - quarterStartDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
        return daysPassed;
    }

    /**
     * Calculates the number of days passed in the current half year.
     * @returns The number of days passed in the current half year.
     */
    inHalfYear(): number {
        const currentDate = new Date();
        const halfYearStartMonth = currentDate.getMonth() < 6 ? 0 : 6;
        const halfYearStartDate = new Date(currentDate.getFullYear(), halfYearStartMonth, 1);
        const daysPassed = Math.floor((currentDate.getTime() - halfYearStartDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
        return daysPassed;
    }

    /**
     * Calculates the number of days passed in the current year.
     * @returns The number of days passed in the current year.
     */
    inYear(): number {
        const currentDate = new Date();
        const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
        const daysPassed = Math.floor((currentDate.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)) + 1;
        return daysPassed;
    }

    /**
     * Calculates the number of days passed since a specified date to the current date.
     * @param {Date} startDate The start date.
     * @returns {number} The number of days passed since the start date to the current date.
     */
    since(startDate: Date): number {
        // Set both dates to the same time of day to avoid discrepancies
        const currentDate = new Date();
        const startOfDayCurrent = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        const startOfDayStart = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());

        // Calculate the difference in milliseconds between the two dates
        const millisecondsPerDay = 1000 * 60 * 60 * 24;
        const differenceInMilliseconds = startOfDayCurrent.getTime() - startOfDayStart.getTime();

        // Calculate the number of days passed, including the start date
        const daysPassed = Math.floor(differenceInMilliseconds / millisecondsPerDay) + 1;

        return daysPassed;
    }
}

export const daysPassed = new DaysPassed();