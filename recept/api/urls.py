from django.urls import path
from rest_framework import routers

from .views import (CategoryViewSet,
                    KitchenViewSet,
                    StageViewSet,
                    RecipeViewSet,
                    CommentViewSet,
                    IngredientViewSet)

router = routers.SimpleRouter()
router.register('category', CategoryViewSet, basename='category')
router.register('kitchen', KitchenViewSet, basename='kitchen')
router.register('stage', StageViewSet, basename='stage')
router.register('recipe', RecipeViewSet, basename='recipe')
router.register('comment', CommentViewSet, basename='comment')
router.register('ingredient', IngredientViewSet, basename='ingredient')

urlpatterns = []
urlpatterns += router.urls
