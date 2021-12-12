<template>
    
<div class="row">
                <div class="col-md-2 align-self-center but-left text-right">
                    <a class="mr-3" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <img src="{% static 'image/arrow-left.png' %}" alt="arrow-left">
                    </a>
                </div>
                <div class="col-md-8">
                    <h2 class="text-center mb-6">Рецепт дня - "{{ recipeOfDay.nameRecipe }}"</h2>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="false">
                        <div class="carousel-inner">
                            {% for stage in stages %}
                            {% if stage.slugStage == 1 %}
                            <div class="rowcarousel-item active">
                                <div class="row">
                                    <div class="col-md-5 px-5">
                                        <img class="d-block w-100 br-10" src="{{ stage.imageStage.url }}"
                                            alt="Slide {{ stage.slugStage }}" height="260">
                                    </div>
                                    <div class="col-md-7 text-center">
                                        <h3 class="mb-4">{{ stage.titleStage }}</h3>
                                        <p>{{ stage.discription }}</p>
                                    </div>
                                </div>
                            </div>
                            {% else %}
                            <div class="row carousel-item">
                                <div class="row">
                                    <div class="col-md-5 px-5">
                                        <img class="d-block w-100 br-10" src="{{ stage.imageStage.url }}"
                                            alt="Slide {{ stage.slugStage }}" height="260">
                                    </div>
                                    <div class="col-md-7 text-center">
                                        <h3 class="mb-4">{{ stage.titleStage }}</h3>
                                        <p>{{ stage.discription }}</p>
                                    </div>
                                </div>
                            </div>
                            {% endif %}
                            {% endfor %}
                        </div>
                        <ol class="carousel-indicators my-4" style="position: static;">
                            {% for stage in stages %}
                            {% if stage.slugStage == 1 %}
                            <li data-target="#carouselExampleIndicators" data-slide-to="{{ stage.slugStage }}"
                                class="point active mx-1">
                                <img src="{% static 'image/pointActive.png'%}" alt="pointActive" class="w-100">
                            </li>
                            {% else %}
                            <li data-target="#carouselExampleIndicators" data-slide-to="{{ stage.slugStage }}"
                                class="point mx-1">
                                <img src="{% static 'image/point.png'%}" alt="point" class="w-100">
                            </li>
                            {% endif %}
                            {% endfor %}
                        </ol>
                    </div>
                </div>
                <div class="col-md-2 align-self-center but-right text-left">
                    <a class="ml-3" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <img src="{% static 'image/arrow-right.png' %}" alt="arrow-right">
                    </a>
                </div>
            </div>

</template>

<script>
    export default {
        name: 'Carousel',
        props: {
            recipeOfDay: Array,
            stage: Array
        }
    }
</script>