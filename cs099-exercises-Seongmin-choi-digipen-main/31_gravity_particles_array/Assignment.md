
# CS099 Gravity Particles Array

Utilizing arrays, make a sketch that creates a simple explosion explosion effect wherever the mouse is pressed with gravity and acceleration applied.

The explosion should look similar to the previous exercise but the particles should be falling down over time.

When the explosion is first created apply a random acceleration one time. <br/>
For example, say you randomly generated the acceleration vector &lt;10, 0&gt; then applying it one time should make the explosion look like it is exploding to the right.

Watch the following to learn how to model the explosion effect.

[Coding Math: Episode 9 - Acceleration](https://youtu.be/OuzWDQ6zFXo)


## Requirements

- Must define the classes using the newer ES6 syntax
- Reuse your `Vec2` class from your last assignment.
- Update your Particle class from the last exercise to work with acceleration and gravity
- Create an Array of particles to update and draw

## Grading Rubric

- [ ] Source Code has a proper header comment: Name, Assignment Name, Course Number, Term & Year.
- [ ] Submitted a commit hash ID of when this exercise was completed.
- [ ] Reused `Vec2` class from your assignment.
- [ ] [**core**] Everywhere the mouse clicked an explosion of particles is spawned, they will move in one general direction based off of some initial acceleration, and all the particles will fall down over time due to gravity.
- [ ] Updated the Particle class to handle acceleration and gravity.
- [ ] [**core**] Created an array of particles to update and draw.

Scores for Exercises will be given as the following:

Score        | Assessment
------------ | ----------
Zero         | Nothing turned in at all
Failing      | Attempted Something
Rudimentary  | Close to meeting core requirements
Satisfactory | Meets all of the core requirements
Good         | Close to meeting all requirements
Excellent    | Clearly meets all requirements

