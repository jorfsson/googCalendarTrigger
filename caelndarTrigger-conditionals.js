function calendarTrigger(){
  var today = new Date();
  var todayMin = today.getMinutes();
  var todayHr = today.getHours();

  var events = CalendarApp.getCalendarById('jeffreychea234@gmail.com').getEventsForDay(today);
  for (var i=0;i<events.length;i++) {
    var eventStart = events[i].getStartTime();
    var eventStartMin = eventStart.getMinutes();
    var eventStartHr = eventStart.getHours();

    if ((todayHr == eventStartHr) && ((Math.abs(todayMin - eventStartMin) <= 5) && (Math.abs(todayMin - eventStartMin) >= -5))) {
      lagProduct();
    }
  }
} 
