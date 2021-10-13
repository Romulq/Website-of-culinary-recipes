from django.contrib import admin

from .models import Category, Kitchen, Stage, Recipe, Comment, Ingredient

class StageInline(admin.StackedInline):
    model = Stage
    max_num = 10
    extra = 1


class IngredientInline(admin.StackedInline):
    model = Ingredient
    max_num = 20
    extra = 4


class RecipeAdmin(admin.ModelAdmin):
    model = Recipe
    list_display = ('nameRecipe', 'timeofCreation', 'category', 'date')
    search_fields = ['nameRecipe', 'date']

    inlines = [IngredientInline, StageInline]


class CategoryAdmin(admin.ModelAdmin):
    model = Category
    list_display = ('nameCategory',)
    search_fields = ['nameCategory',]


class KitchenAdmin(admin.ModelAdmin):
    model = Kitchen
    list_display = ('nameKitchen',)
    search_fields = ['nameKitchen',]


class CommentAdmin(admin.ModelAdmin):
    model = Comment
    list_display = ('user', 'time', 'recipe',)
    search_fields = ['user', 'recipe']


admin.site.register(Recipe, RecipeAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Kitchen, KitchenAdmin)
admin.site.register(Comment, CommentAdmin)
