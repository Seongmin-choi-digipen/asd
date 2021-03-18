
# CS099 Display Today's Date

Write a sketch that displays the current date. Like `Friday, April 3, 2018`.


## Requirements

- Must use `switch` statements to convert the day number to it's name and the month number to it's name.

Note you can store the current date via the following:

```js
let current_date = new Date();
```

You can get the day of the week via [`current_date.getDay()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay).<br/>
You can get the month via [`current_date.getMonth()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth).<br/>
You can get the day of the month via [`current_date.getDate()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate).<br/>
You can get the year via [`current_date.getFullYear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear).<br/>

## Grading Rubric

- [ ] Source Code has a proper header comment: Name, Assignment Name, Course Number, Term & Year.
- [ ] Submitted a commit hash ID of when this exercise was completed.
- [ ] Properly displays the current date in the specified format: Day of the week name, Month name Day of the month, Full Year
- [ ] [**core**] Used a `switch` statement to get the name of the day of the week
- [ ] [**core**] Used a `switch` statement to get the name of the month

Scores for Exercises will be given as the following:

Score        | Assessment
------------ | ----------
Zero         | Nothing turned in at all
Failing      | Attempted Something
Rudimentary  | Close to meeting core requirements
Satisfactory | Meets all of the core requirements
Good         | Close to meeting all requirements
Excellent    | Clearly meets all requirements

