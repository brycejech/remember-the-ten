---
layout: page
---


{% for person in site.contacts %}

<h3>{{ person.name }}</h3>
<h5>{{ person.email }}</h5>
<ul>
{% for role in person.roles %}
    <li>{{ role }}</li>
{% endfor %}
</ul>

{%- endfor -%}
