{% if site.toggle_color_scheme != "nil" %}
  const theme = localStorage.getItem('theme');
  if (theme === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  else
  {
    document.documentElement.setAttribute('data-theme', 'light');
  }
{% endif %}
