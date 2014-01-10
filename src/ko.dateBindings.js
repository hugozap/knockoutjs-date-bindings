  /* Adds the binding dateValue to use with bootstra-datepicker
     Usage :
     <input type="text" data-bind="dateValue:birthday"/>
     <input type="text" data-bind="dateValue:birthday,format='MM/DD/YYY'"/>

   */
  ko.bindingHandlers.dateValue = {

    init:function(element,valueAccessor,allBindings){
      var format ;
      var defaultFormat = 'yyyy/mm/dd'
      if( typeof allBindings == 'function' )
      {
         format = allBindings().format || defaultFormat;
      }
      else
        format = allBindings.get('format') || defaultFormat;

      var dpicker = $(element).datepicker({
        'format':format
      }).on('changeDate',function(ev){
          var newDate = moment(new Date(ev.date));
          var value = valueAccessor();
          var currentDate = moment(value() || new Date);
          newDate.hour(currentDate.hour());
          newDate.minute(currentDate.minute());
          newDate.second(currentDate.second());
          value(newDate.toDate());

      });
    },
    update:function(element,valueAccessor,allBindingsAccessor){
      var date =  ko.unwrap(valueAccessor());
      if(date){
        $(element).datepicker('setDate',date);
      }
    }
  }

  /* Adds the binding timeValue to use with bootstra-timepicker 
     This works with the http://jdewit.github.io/bootstrap-timepicker/index.html
     component.
     Use: use with an input, make sure to use your input with this format
     <div class="bootstrap-timepicker pull-right">
         <input id="timepicker3" type="text" class="input-small">
     </div>
  */
  ko.bindingHandlers.timeValue = {
    init:function(element,valueAccessor,allBindingsAccessor,viewModel,bindingContext){
      var tpicker = $(element).timepicker();
      tpicker.on('changeTime.timepicker',function(e){
       
        //Asignar la hora y los minutos
        var value = valueAccessor();
        if(!value){
          throw new Error('timeValue binding observable not found');
        }
        var date = ko.unwrap(value);
        var mdate = moment(date || new Date());
        var hours24;
        if(e.time.meridian == "AM"){
          if(e.time.hours == 12)
            hours24 = 0;
          else
            hours24 = e.time.hours;
        }
        else{
          if(e.time.hours == 12){
            hours24 = 12;
          }
          else{
            hours24 = e.time.hours + 12;
          }
        }
 
        mdate.hours(hours24)
        mdate.minutes(e.time.minutes);
        $(element).data('updating',true);
        value(mdate.toDate());
        $(element).data('updating',false);


      })
    },
    update:function(element,valueAccessor,allBindings,viewModel,bindingContext){
      //Avoid recursive calls
      if($(element).data('updating')){
        return;
      }
      var date =  ko.unwrap(valueAccessor());
     
      if(date){
        var time = moment(date).format("hh:mm");
        $(element).timepicker('setTime',time);
      }
    }
  }

  ko.unwrap = ko.unwrap || ko.utils.unwrapObservable;