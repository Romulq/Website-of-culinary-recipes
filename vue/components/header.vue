<template>
  <nav class="container navbar navbar-expand-lg navbar-light">
    <h1 class="navbar-brand title" href="#">
      <img src="{% static 'image/logo.png' %}" alt="logo" />
      RecipeForAll
    </h1>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse justify-content-md-center"
      id="navbarNavAltMarkup"
    >
      <div class="navbar-nav header-link">
        <a class="nav-item nav-link" href="{% url 'home' %}">Главная</a>
        <a class="nav-item nav-link" href="{% url 'kitchen' slug='all' %}"
          >Кухни</a
        >
        <a class="nav-item nav-link" href="{% url 'recipe' slug='all' %}"
          >Рецепты</a
        >
        <a class="nav-item nav-link" href="{% url 'recipe' recipeOfDay.id %}"
          >Рецепт дня</a
        >
      </div>
    </div>
    <div class="sign">
      {% if request.user.is_authenticated %}
      <a id="navbarDropdown" role="button" data-toggle="dropdown">
        <img src="{% static 'image/sign2.png' %}" alt="sign" />
      </a>
      <div
        class="dropdown-menu"
        style="position: static"
        aria-labelledby="navbarDropdown"
      >
        <a class="dropdown-item" href="{% url 'profile' %}">Профиль</a>
        <a class="dropdown-item" href="{% url 'sign_out' %}">Выход</a>
      </div>
      {% else %}
      <a href="{% url 'sign_in' %}">
        <img src="{% static 'image/sign.png' %}" alt="sign" />
      </a>
      {% endif %}
    </div>
  </nav>
</template>
    
<script>
export default {
  name: "Header",
};
</script>