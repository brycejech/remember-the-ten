---
title: RT10 Steering Committee
layout: page
---

{% for person in site.data.committee %}
<h5>{{ person.name }} - {{ person.role }}</h5>
{% endfor %}
