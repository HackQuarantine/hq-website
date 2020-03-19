---
title: Schedule
layout: plain
styles:
  - url: https://unpkg.com/@fullcalendar/core@4.3.0/main.min.css
    hash: sha384-UYbBlSMkHrbuUVqSs26Rm1UEii5VOTR80mD2wjrJaIedgHgS5LWDt9d7rcbqEDxR
  - url: https://unpkg.com/@fullcalendar/daygrid@4.3.0/main.min.css
    hash: sha384-3/CmTldIZRXuPMPFO0YHhiLwdsqbsB8YEG+psHdxNbnNBTrci0MOdt/hbPRVmtS8
  - url: https://unpkg.com/@fullcalendar/timegrid@4.3.0/main.min.css
    hash: sha384-Y2E7KGXSxkviA14jxA5DeBmVwovKH3ipCOXJ1ByetT9DLlwehyYf/3Lm2wSncMR2
  - url: https://unpkg.com/@fullcalendar/list@4.3.0/main.min.css
    hash: sha384-I6BmgTJPPB58p0uMGaoLY/wFTFFlO4VSmjQYBfNzCzejCImTYNj/yXYmKBeUjtHH
  - url: https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/darkly/bootstrap.min.css
    hash: sha384-rCA2D+D9QXuP2TomtQwd+uP50EHjpafN+wruul0sXZzX/Da7Txn4tB9aLMZV4DZm
  - url: https://fonts.googleapis.com/icon?family=Material+Icons
  - url: /assets/css/calendar.css
scripts:
  - url: https://unpkg.com/@fullcalendar/core@4.3.0/main.min.js
    hash: sha384-rouc52Uk/cLTKcEeTGcW5Jg76vjIdbKE/Zd3U47ZMc4ezmiCtKCRuT7TRd/ai7f1
  - url: https://unpkg.com/@fullcalendar/daygrid@4.3.0/main.min.js
    hash: sha384-Vg8WM1KZn59u30ahJ4mGZwEw2R4ieRhhvX2PPiKKCSpuxms+HvoC3XPii6CnMvFD
  - url: https://unpkg.com/@fullcalendar/timegrid@4.3.0/main.min.js
    hash: sha384-yyTZuDPNQFp/xKe4Yk67GZBC6Pm3OXdipzs78KRRA37YWJuy3rcgDQTxCxbIviHs
  - url: https://unpkg.com/@fullcalendar/list@4.3.0/main.min.js
    hash: sha384-fG3/vSufb+AA91JKrVZZiS16J72wgK0u/CK+afw3Kw2tbVEPEFcTHac7sJabZd31
  - url: https://unpkg.com/@fullcalendar/google-calendar@4.3.0/main.min.js
    hash: sha384-Ha5I8QPCC/z63Vv2VZG8QZIXGIhDPrLLu3fMx46RG+FLQqpWNzsA8mZIR9YXPahZ
  - url: https://unpkg.com/@fullcalendar/bootstrap/main.min.js
    hash: sha384-iE2vNnlZ9zLj/SJ+wylWYZLKMYF/03QtrLFdByV59XHKHCie9UTGNJnH6imUYv17
  - url: /assets/js/calendar.js
---


<h2>Schedule</h2>

<div id="timezone"></div>

<div id="colour-key-container">
  <b>Event Types</b>
  <div id="colour-key">
    {% for event in site.data.event_colours %}
      <div class="type-{{ event[0] }}">{{ event[1].name }}</div>
    {% endfor %}
  </div>
</div>

<div id="calendar"></div>
<div id="event-modal" class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title"><i class="material-icons">event</i><b id="event-title"></b></h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div><i class="material-icons">label</i> Type - <b id="event-type"></b></div>
        <div><i class="material-icons">access_time</i> Date - <b id="event-date"></b></div>
        <div><i class="material-icons">person</i> Organiser - <b id="event-person"></b></div>
        <hr>
        <p id="event-desc"></p>
      </div>
    </div>
  </div>
</div>

<style>
  {% for event in site.data.event_colours %}
    .type-{{ event[0] }} { background: {{ event[1].colour }}; }
  {% endfor %}
</style>
