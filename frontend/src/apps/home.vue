<template>
    <body id="main">


        <header>
            <Header />
        </header>

<!-- 
        <div class="container offer">
            <div class="row offer">
                <div class="col-md-6 offer-text align-self-center">
                    <h1 class="mb-0">Кулинарные рецепты</h1>
                    <h1 class="subtitle mb-0">на любой вкус и цвет</h1>
                    <div class="col-md-6 px-0 text-left">
                        <a class="btn btn-warning button-text px-5 py-3 mt-3" href="{% url 'recipe' slug='all' %}">
                            Список рецептов</a>
                    </div>
                </div>
                <div class="col-md-6 offer-image">
                    <img class="img-fluid rounded" src="{% static 'image/offer-image2.png' %}" alt="offer-image">
                </div>
            </div>
        </div>
         -->
        
        
        
        <!-- <div class="razdel py-6 bg-light">
            <div class="container">
                <h2 class="text-center mb-6">Подборки</h2>
                <div class="row">
                    {% for kitchen in kitchens %}
                    <div class="col-md-4">
                        <div class="card mb-4">
                            <img class="card-img-top" src="{{ kitchen.imageKitchen.url }}" alt="{{ kitchen.slugKitchen }}"
                                height="261">
                            <div class="card-body text-center">
                                <div class="card-title">
                                    <h4>{{ kitchen.nameKitchen }}</h4>
                                </div>
                                <a href="{% url 'kitchen' kitchen.slugKitchen %}" class="btn btn-outline-primary">Посмотреть</a>
                            </div>
                        </div>
                    </div>
                    {% endfor %}
                </div>
            </div>
        </div> -->
        
        
        
        
        <div class="razdel-2">
            <Carousel   :recipeOfDay="recipeOfDay"
                        :stage="stage"/>
        </div>
        
        
        
        
        <div class="razdel bg-light">
            <div class="container">
                <h2 class="text-center mb-6">О нас</h2>
                <div class="row text-center">
                    <div class="col-md-4">
                        <div class="card">
                            <div class="mt-5"><img src="{% static 'image/time.png' %}" alt="time"></div>
                            <h4 class="mb-5 mt-5 mx-4">Список рецептов пополняется каждый день</h4>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="mt-5"><img src="{% static 'image/talk.png' %}" alt="talk"></div>
                            <h4 class="mb-5 mt-5 mx-4">Множество отзывов о каждом рецепте</h4>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="mt-5"><img src="{% static 'image/help.png' %}" alt="help"></div>
                            <h4 class="mb-5 mt-5 mx-4">Пошаговые инструкции для каждого рецепта</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <footer class="bg-dark">
            <Footer />
        </footer>


    </body>
</template>


<script>
    import Header from '../components/header.vue'
    import Footer from '../components/footer.vue'
    import Carousel from '../components/home/carousel.vue'

    export default {
        name: 'Home',
        components: {
            Header,
            Footer,
            Carousel
        },
        data() {
            return {
                recipeOfDay: this.$root.$data.recipeOfDay,
                stage: this.$root.$data.stage,
            }
        }
    }
</script>