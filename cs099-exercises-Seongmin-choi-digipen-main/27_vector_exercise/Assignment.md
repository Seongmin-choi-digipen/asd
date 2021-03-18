
# CS099 Create a Vec2 Class Exercise

You are to create a class `Vec2` that represents a two dimensional vector using the common v&#772; = (x,y) representation.

Watch the following:

[Coding Math: Episode 6 - Vectors, Part 1](https://youtu.be/DfGOw8_ZaBA)

[Coding Math: Episode 7 - Vectors, Part 2](https://youtu.be/zYOGtlY6xaM)


Based off of the Coding Math's `vector` class, recreate it using the javascript ES6 syntax and name it `Vec2`.

Specifically it should have the following:

Class Method|Description
-|-
`constructor(x=0,y=0)`| `x` and `y` parameters will set the vector's `this.x` and `this.y` fields. The parameters are optional and default to zero.
`getAngle()` | Returns the calculated angle of the vector utilizing `atan2()`. Note that _this_ vector's `x` and `y` is left unchanged.
`setAngle(angle_in_radians)` | Preserving the current length of the vector, make _this_ vector point in a direction based off of `angle_in_radians`.
`getLength()` | Returns the calculated length of the vector utilizing Pythagoreans Theorem. Note that _this_ vector's `x` and `y` is left unchanged.
`setLength(length)` | Preserving the current direction of the vector, make _this_ vector have a new length specified by the `length` parameter.
`add(v2)` | Returns a **new** vector that is the sum of _this_ vector and vector `v2`. Mathematically equivalent to v&#772;<sub>1</sub> + v&#772;<sub>2</sub>. Note that _this_ vector's `x` and `y` is left unchanged.
`addTo(v2)` | Modifies _this_ vector by adding the vector `v2` into itself. It is logically like doing `v1 = v1 + v2;`
`subtract(v2)` | Returns a **new** vector that is the difference of _this_ vector and vector `v2`. Mathematically equivalent to v&#772;<sub>1</sub> - v&#772;<sub>2</sub>. Note that _this_ vector's `x` and `y` is left unchanged.
`subtractFrom(v2)` | Modifies _this_ vector by subtracting the vector `v2` from itself. It is logically like doing `v1 = v1 - v2;`
`multiply(scalar)` | Returns a **new** vector that is the scaled version of _this_ vector. Mathematically equivalent to sv&#772;= (sx,sy). Note that _this_ vector's `x` and `y` is left unchanged.
`multiplyBy(scalar)` | Modifies _this_ vector by scaling it's `x` and `y` components. It is logically like doing `v = s*v;`
`divide(scalar)` | Returns a **new** vector that is the scaled version of _this_ vector. Mathematically equivalent to v&#772;/s = (x/s, y/s). Note that _this_ vector's `x` and `y` is left unchanged.
`divideBy(scalar)` | Modifies _this_ vector by scaling it's `x` and `y` components. It is logically like doing `v = v/s;`


Note that `setX()`, `getX()`, `setY()` and `getY()` need not be implemented since users of our class can simply access the `this.x` and `this.y` fields directly.

Create and draw a line to represent a vector showcasing the use of each method listed above, there should be 13 lines.

## Requirements

- Must define a `Vec2` class using the ES6 syntax
- Implement all of the described methods
- Use the constructor and each method at least one time to draw a line


## Grading Rubric

- [ ] Source Code has a proper header comment: Name, Assignment Name, Course Number, Term & Year.
- [ ] Submitted a commit hash ID of when this exercise was completed.
- [ ] [**core**] Created Vec2 class with ES6 syntax and implemented all of the described class methods
- [ ] Used this class to draw a line for every defined class method

Scores for Exercises will be given as the following:

Score        | Assessment
------------ | ----------
Zero         | Nothing turned in at all
Failing      | Attempted Something
Rudimentary  | Close to meeting core requirements
Satisfactory | Meets all of the core requirements
Good         | Close to meeting all requirements
Excellent    | Clearly meets all requirements

