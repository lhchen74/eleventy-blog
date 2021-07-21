---
layout: "layouts/base.njk"
title: "Home"
---

# Hello Eleventy

# Please read the followings:

<ul>
    {%- for page in collections.static -%}
        <li><a href="{{ page.url }}">{{ page.data.title }}</a></li>
    {%- endfor -%}
</ul>
