/* global FullCalendar */

const CALENDAR_ID = 't8iphvpqadetnf7ccpb2c7pnjk@group.calendar.google.com'
const CALENDAR_KEY = 'AIzaSyBplGV41n0rSD_NK612JhLTxePXXeyo0iE'

const DATE_24HR_FORMAT = {
  hour: '2-digit',
  minute: '2-digit',
  omitZeroMinute: false,
  hour12: false
}

let calendar
let calendarElement

document.addEventListener('DOMContentLoaded', () => {
  calendarElement = document.querySelector('#calendar')

  calendar = new FullCalendar.Calendar(calendarElement, {
    plugins: ['dayGrid', 'googleCalendar', 'list', 'timeGrid'],
    defaultView: 'listYear',
    header: { center: 'dayGridMonth, timeGridWeek, listYear' },
    titleFormat: { year: 'numeric', month: 'short', day: 'numeric' },
    buttonText: { dayGridMonth: 'Month', timeGridWeek: 'Week', list: 'All', today: 'Today' },
    firstDay: 1,
    height: 700,
    googleCalendarApiKey: CALENDAR_KEY,
    events: {
      googleCalendarId: CALENDAR_ID,
      failure: onLoadFailed
    },
    eventTimeFormat: DATE_24HR_FORMAT,
    views: {
      // month view
      dayGridMonth: {
        displayEventEnd: true
      },
      // week view
      week: {
        columnHeaderFormat: { weekday: 'short' },
        allDaySlot: false,
        slotDuration: '01:00:00',
        slotLabelInterval: '02:00:00',
        slotLabelFormat: DATE_24HR_FORMAT,
        nowIndicator: true
      },
      // all upcoming events view
      listYear: {
        listDayFormat: { year: 'numeric', month: 'short', day: '2-digit', omitCommas: true },
        listDayAltFormat: { weekday: 'long' }
      }
    }
  })

  calendar.render()
})

function onLoadFailed (error) {
  calendarElement.innerHTML =
    `<div id="calendar-error">
      <h3>Could not load calendar</h3>
      <p>HTTP Error ${error.xhr.status}</p>
    </div>`
}
