{% if site.has_language_tags? %}
  <div class="tags">
    <nav class="menu-tags menu-sub">
      <ul class="menu">
        <li class="menu-item">
          <a class="menu-link js-tags-all" href="{{ site.url }}{{ site.blogs.first.page.path }}">{{ 'all_posts' | lc }}</a>
        </li>
        {% for tag in site.language_tags %}
          {% assign activestr = "" %}
          {% for tmptag in tags %}
            {% if tmptag.name == tag.name %}
              {% assign activestr = " active" %}
            {% endif %}
          {% endfor %}
          <li class="menu-item">
            <a class="menu-link{{ activestr }}" href="{{ site.url }}{{ site.blogs.first.page.path }}/tagged/{{ tag.path }}">{{ tag.name }}</a>
          </li>
        {% endfor %}
      </ul>
    </nav>
  </div>
{% endif %}
