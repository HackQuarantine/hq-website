---
title: Upcoming Events
layout: bare
styles:
  - url: https://unpkg.com/@fullcalendar/core@4.3.0/main.min.css
    hash: sha384-UYbBlSMkHrbuUVqSs26Rm1UEii5VOTR80mD2wjrJaIedgHgS5LWDt9d7rcbqEDxR
  - url: https://unpkg.com/@fullcalendar/list@4.3.0/main.min.css
    hash: sha384-I6BmgTJPPB58p0uMGaoLY/wFTFFlO4VSmjQYBfNzCzejCImTYNj/yXYmKBeUjtHH
  - url: https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/darkly/bootstrap.min.css
    hash: sha384-rCA2D+D9QXuP2TomtQwd+uP50EHjpafN+wruul0sXZzX/Da7Txn4tB9aLMZV4DZm
  - url: /assets/css/calendar.css
  - url: /assets/css/upcoming.css
scripts:
  - url: https://unpkg.com/@fullcalendar/core@4.3.0/main.min.js
    hash: sha384-rouc52Uk/cLTKcEeTGcW5Jg76vjIdbKE/Zd3U47ZMc4ezmiCtKCRuT7TRd/ai7f1
  - url: https://unpkg.com/@fullcalendar/list@4.3.0/main.min.js
    hash: sha384-fG3/vSufb+AA91JKrVZZiS16J72wgK0u/CK+afw3Kw2tbVEPEFcTHac7sJabZd31
  - url: https://unpkg.com/@fullcalendar/google-calendar@4.3.0/main.min.js
    hash: sha384-Ha5I8QPCC/z63Vv2VZG8QZIXGIhDPrLLu3fMx46RG+FLQqpWNzsA8mZIR9YXPahZ
  - url: https://unpkg.com/@fullcalendar/bootstrap/main.min.js
    hash: sha384-iE2vNnlZ9zLj/SJ+wylWYZLKMYF/03QtrLFdByV59XHKHCie9UTGNJnH6imUYv17
  - url: /assets/js/upcoming.js
---
<div id="calendar"></div>
<style>
  {% for event in site.data.event_colours %}
    .type-{{ event[0] }} { background: {{ event[1].colour }}; }
  {% endfor %}
</style>
