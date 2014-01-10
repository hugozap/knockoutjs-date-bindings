# Knockout custom bindings for boostrap-datepicker  and boostrap-timepicker

Custom bindigs that make easy to work with the following date and time pickers:

* https://github.com/eternicode/bootstrap-datepicker
* http://jdewit.github.io/bootstrap-timepicker/

( Beware that there is an outdated version of the boostrap-datepicker here http://www.eyecon.ro/bootstrap-datepicker/  <-- This bindings do not work with this one)

## Usage:

### date picker:

<input type="text" data-bind="dateValue:birthday"/>
<input type="text" data-bind="dateValue:birthday,format='MM/DD/YYY'"/>

### time picker (hour selection):

<input type="text" data-bind="timeValue:birthday"/>

**Note: The input is wrapped in the required markup by bootstrap-timepicker**


## Timepicker binding use

# Dependencies

This binding depends on:

* JQuery
* moment.js


TODO:

* Support ko 2.0 