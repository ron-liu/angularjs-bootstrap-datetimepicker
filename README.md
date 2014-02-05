## angularjs-bootstrap-datetimepicker

This is simple angular directive wrapper for [bootstrap datetimepicker](https://github.com/smalot/bootstrap-datetimepicker), you can directly use it in project, and take it as a sample to wrap jquery plugins as angular directive.

## Install
```bash
bower install angularjs-bootstrap-datetimepicker
```
## Sample
```html
<datetimepicker ng-model='date' today-btn='true' minute-step='30' ></datetimepicker> 
```

## Features
* ngModel: 2-way bindings
* format: readonly attribute for date format, see more detailed information in [here](https://github.com/smalot/bootstrap-datetimepicker#format) 
* todayBtn: readonly attribute to show today button on the bottom or not, true or false
* weekStart: readonly attribute, day of the week start, see details on [here](https://github.com/smalot/bootstrap-datetimepicker#weekstart)
* minuteStep: The increment used to build the hour view

## Dependencies
* smalot-bootstrap-datetimepicker
* angular
* jquery
* bootstrap 2.3.2

## Progress
Currently, it is just a minimum workable set with few options, and it only support bootstrap 2.3.2. In the near future, I hope I can finishe the following:
* Support all options in the original package
* Support bootstrap 3
* Added enough tests

