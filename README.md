# Days Passed

Days Passed is a lightweight TypeScript module for calculating the number of days passed in various intervals such as months, weeks, quarters, half years, and years. It also provides functionality to calculate the number of days passed since a specified date.

## Installation

You can install Days Passed via npm. Make sure you have Node.js and npm installed on your system.

```bash
npm install days-passed
```
## Usage

```typescript
import { DaysPassed } from 'days-passed';

// Create an instance of the DaysPassed class
const daysPassed = new DaysPassed();

// Get the number of days passed in the current month
const daysInMonth = daysPassed.inMonth();
console.log('Days passed in the current month:', daysInMonth);

// Get the number of days passed in the current week
const daysInWeek = daysPassed.inWeek();
console.log('Days passed in the current week:', daysInWeek);

// Get the number of days passed in the current quarter
const daysInQuarter = daysPassed.inQuarter();
console.log('Days passed in the current quarter:', daysInQuarter);

// Get the number of days passed in the current half year
const daysInHalfYear = daysPassed.inHalfYear();
console.log('Days passed in the current half year:', daysInHalfYear);

// Get the number of days passed in the current year
const daysInYear = daysPassed.inYear();
console.log('Days passed in the current year:', daysInYear);

// Get the number of days passed since a specified date
const startDate = new Date('2024-01-01'); // Example start date
const daysSinceStart = daysPassed.since(startDate);
console.log('Days passed since start date:', daysSinceStart);
```