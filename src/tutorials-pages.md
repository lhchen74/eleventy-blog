---
layout: "layouts/base.njk"
pagination:
    data: posts
    size: 1
    alias: post
permalink: 'posts/{{ post.title | slug }}/'
---


<div class="post">
    <h2>
      <a href="#">{{ post.id }}. {{ post.title }}</a>
    </h2>
    <p>{{ post.body }}</p>
</div>

<a href="/tutorials">Back</a>