/* global $, FullCalendar */

const CALENDAR_ID = 'hacksocnotts.co.uk_5m2l3o30k13frs9nd9dmh9rk8o@group.calendar.google.com'
const CALENDAR_KEY = 'AIzaSyBzgsuQnfQ7g_zMSsmll7XosF5ZxpJZaWk'

const SMALL_DEVICE_WIDTH = 768

const SMALL_DEVICE_VIEW = 'listYear'
const LARGE_DEVICE_VIEW = 'listYear'

const DATE_24HR_FORMAT = {
  hour: '2-digit',
  minute: '2-digit',
  omitZeroMinute: false,
  hour12: false
}

const DATE_RANGE_FORMAT = {
  month: 'short',
  day: 'numeric',
  separator: ' to ',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZoneName: 'short'
}

let calendar
let calendarElement

document.addEventListener('DOMContentLoaded', () => {
  calendarElement = document.querySelector('#calendar')

  calendar = new FullCalendar.Calendar(calendarElement, {
    plugins: ['bootstrap', 'dayGrid', 'googleCalendar', 'list', 'timeGrid'],
    defaultView: getCalendarMode(),
    header: { center: 'listYear, timeGridWeek, dayGridMonth' },
    titleFormat: { year: 'numeric', month: 'short', day: 'numeric' },
    buttonText: { dayGridMonth: 'Month', timeGridWeek: 'Week', list: 'All', today: 'Today' },
    firstDay: 1,
    height: 700,
    googleCalendarApiKey: CALENDAR_KEY,
    events: {
      googleCalendarId: CALENDAR_ID,
      failure: onLoadFailed
    },
    themeSystem: 'bootstrap',
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
        nowIndicator: true,
        timeGridEventMinHeight: 60
      },
      // all upcoming events view
      listYear: {
        listDayFormat: { year: 'numeric', month: 'short', day: '2-digit', omitCommas: true },
        listDayAltFormat: { weekday: 'long' }
      }
    },
    eventClick: displayEvent,
    eventRender: (info) => {
      try {
        const details = JSON.parse(info.event._def.extendedProps.description)
        info.el.classList.add(`type-${details.type}`)
      } catch (e) {
        console.error('cannot parse event details/ find colour')
      }
    }
  })
  document.getElementById('timezone').innerHTML = `All times are in your local timezone! (${Intl.DateTimeFormat().resolvedOptions().timeZone})`

  window.addEventListener('resize', () => {
    calendar.changeView(getCalendarMode())
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

function getCalendarMode () {
  if (window.innerWidth < SMALL_DEVICE_WIDTH) {
    return SMALL_DEVICE_VIEW
  } else {
    return LARGE_DEVICE_VIEW
  }
}

function displayEvent (info) {
  info.jsEvent.preventDefault()

  const date = info.event._instance.range
  $('#event-title').text(info.event._def.title)
  $('#event-date').text(FullCalendar.formatRange(date.start, date.end, DATE_RANGE_FORMAT))

  let details = {}
  try {
    details = JSON.parse(info.event._def.extendedProps.description)
  } catch (e) {
    console.error('cannot parse event details')
  }
  console.log(details)

  if (details.organiser === undefined) {
    details.organiser = '(no organiser specifed)'
  }

  if (details.description === undefined) {
    details.description = '(no description specifed)'
  }

  if (details.type === undefined) {
    details.type = '(no type specifed)'
  }

  $('#event-person').text(details.organiser)
  $('#event-desc').text(details.description)
  $('#event-type').text(details.type)

  $('#event-modal').modal('show')
}
