from django.db.models.query import QuerySet
from rest_framework import viewsets

from .serializers import (  CategorySerializer,
                            KitchenSerializer,
                            StageSerializer,
                            RecipeSerializer,
                            RecipeListRetrieveSerializer,
                            UserSerializer,
                            CommentSerializer,
                            CommentListRetrieveSerializer,
                            IngredientSerializer  )

from django.contrib.auth.models import User
from ..models import Category, Kitchen, Stage, Recipe, Comment, Ingredient


class CategoryViewSet(viewsets.ModelViewSet):

    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class KitchenViewSet(viewsets.ModelViewSet):

    queryset = Kitchen.objects.all()
    serializer_class = KitchenSerializer


class StageViewSet(viewsets.ModelViewSet):

    queryset = Stage.objects.all()
    serializer_class = StageSerializer


class RecipeViewSet(viewsets.ModelViewSet):

    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    action_to = {
        "list": RecipeListRetrieveSerializer,
        "retrieve": RecipeListRetrieveSerializer
    }

    def get_serializer_class(self):
        return self.action_to.get(self.action, self.serializer_class)


class UserViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all()
    serializer_class = UserSerializer


class CommentViewSet(viewsets.ModelViewSet):

    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    action_to = {
        "list": CommentListRetrieveSerializer,
        "retrieve": CommentListRetrieveSerializer
    }

    def get_serializer_class(self):
        return self.action_to.get(self.action, self.serializer_class)


class IngredientViewSet(viewsets.ModelViewSet):

    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
