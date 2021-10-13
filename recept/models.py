from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    nameCategory = models.CharField(max_length=255, verbose_name='Название')
    slugCategory = models.SlugField(unique=True, default=None)

    def __str__(self):
        return self.nameCategory

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'


class Kitchen(models.Model):
    nameKitchen = models.CharField(max_length=255, verbose_name='Наименование')
    imageKitchen = models.ImageField(upload_to='images/kitchen/', verbose_name='Изображение')
    slugKitchen = models.SlugField(unique=True, default=None)

    def __str__(self):
        return self.nameKitchen

    class Meta:
        verbose_name = 'Кухня'
        verbose_name_plural = 'Кухни'


class Stage(models.Model):  # INLINE
    recipe = models.ForeignKey("Recipe", on_delete=models.CASCADE)
    titleStage = models.CharField(max_length=255, verbose_name='Заголовок')
    discription = models.TextField(blank=True, verbose_name='Описание')
    imageStage = models.ImageField(upload_to='images/stage/', verbose_name='Изображение')
    slugStage = models.PositiveIntegerField(default=1, verbose_name='Шаг')
    
    def __str__(self):
        return str(self.slugStage)

    class Meta:
        verbose_name = 'Этап'
        verbose_name_plural = 'Этапы'


class Recipe(models.Model):
    date = models.DateTimeField(auto_now_add=True, verbose_name='Время создания рецепта')
    kitchen = models.ForeignKey(Kitchen, on_delete=models.CASCADE, verbose_name='Кухня')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name='Категория')
    nameRecipe = models.CharField(max_length=255, verbose_name='Название')
    description = models.TextField(blank=True, verbose_name='Описание')
    timeofCreation = models.TimeField(auto_now_add=False, verbose_name='Время готовки')
    count = models.SmallIntegerField(verbose_name='Количество порций')
    imageRecipe = models.ImageField(upload_to='images/recipe/', verbose_name='Изображение готового блюда')

    def __str__(self):
        return self.nameRecipe

    class Meta:
        verbose_name = 'Рецепт'
        verbose_name_plural = 'Рецепты'


class Comment(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, verbose_name='Рецепт')
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='Пользователь')
    text = models.TextField(blank=False, verbose_name='Комментарий')
    time = models.DateTimeField(auto_now_add=True, verbose_name='Время создания')

    def __str__(self):
        return self.recipe.nameRecipe

    class Meta:
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'
    

class Ingredient(models.Model): # INLINE
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    nameIngredient = models.CharField(max_length=255, verbose_name='Название')
    count = models.CharField(max_length=255, verbose_name='Количество/текст')

    def __str__(self):
        return self.nameIngredient

    class Meta:
        verbose_name = 'Ингредиент'
        verbose_name_plural = 'Ингредиенты'
