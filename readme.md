# Knockout custom bindings for boostrap-datepicker  and boostrap-timepicker

Licence: MIT

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



## Timepicker binding use

# Dependencies

This binding depends on:

* JQuery
* moment.js


The MIT License (MIT)

Copyright (c) 2013 Hugo Zapata

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.