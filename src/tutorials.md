---
layout: "layouts/base.njk"
title: "Tutorials"
pagination:
    data: posts
    size: 10
    alias: posts_set
---

# Tutorials

{%- for post in posts_set -%}
<div class="post">
    <h2>
      <a href="/posts/{{ post.title | slug }}/">{{ post.id }}. {{ post.title }}</a>
    </h2>
</div>
{%- endfor -%}

<ul>

  {%- if pagination.href.first -%}
    <li>
        <a href="{{ pagination.href.first | url }}">First</a>
    </li>
  {%- endif -%}
  
  {%- if pagination.href.previous -%}
    <li>
        <a href="{{ pagination.href.previous | url }}">Previous</a>
    </li>
  {%- endif -%}

  {% set page_index = 1 %}
  {%- for page in pagination.hrefs -%}
    <li>
        <a href="{{ page }}">{{ page_index }}</a>
    </li>
    {% set page_index = page_index + 1 %}
  {%- endfor -%}

  {%- if pagination.href.next -%}
    <li>
        <a href="{{ pagination.href.next | url }}">Next</a>
    </li>
  {%- endif -%}

  {%- if pagination.href.last -%}
    <li>
        <a href="{{ pagination.href.last | url }}">Last</a>
    </li>
  {%- endif -%}
</ul>


