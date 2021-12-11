<template>
  <div class="container footer">
    <div class="row justify-content-md-center">
      <div class="col-md-3 text-light align-self-center">
        <h1 class="navbar-brand title">
          <img src="{% static 'image/logo.png' %}" alt="logo" />
          RecipeForAll
        </h1>
      </div>
      <div class="col-md-2 nav flex-column">
        <a class="nav-item nav-link text-light" href="{% url 'home' %}"
          >Главная</a
        >
        <a
          class="nav-item nav-link text-light"
          href="{% url 'kitchen' slug='all' %}"
          >Кухни</a
        >
        <a
          class="nav-item nav-link text-light"
          href="{% url 'recipe' slug='all' %}"
          >Рецепты</a
        >
        <a
          class="nav-item nav-link text-light"
          href="{% url 'recipe' recipeOfDay.id %}"
          >Рецепт дня</a
        >
      </div>
      <div class="col align-self-center text-center">
        <a href="#">
          <img src="{% static 'image/up.png' %}" alt="up" />
        </a>
      </div>
      <div class="col-md-3 align-self-center text-light text-center">
        <div class="row justify-content-md-center">
          <a class="mx-1" href="#">
            <img src="{% static 'image/vk.png' %}" alt="vk" />
          </a>
          <a class="mx-1" href="#">
            <img src="{% static 'image/yt.png' %}" alt="yt" />
          </a>
          <a class="mx-1" href="#">
            <img src="{% static 'image/inst.png' %}" alt="inst" />
          </a>
        </div>
        <h4 class="mt-1">email@email.com</h4>
      </div>
    </div>
  </div>
</template>>



<script>
export default {
  name: "Footer",
};
</script>