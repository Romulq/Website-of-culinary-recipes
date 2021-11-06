from rest_framework import serializers

from django.contrib.auth.models import User
from ..models import Category, Kitchen, Stage, Recipe, Comment, Ingredient


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'


class KitchenSerializer(serializers.ModelSerializer):

    class Meta:
        model = Kitchen
        fields = '__all__'


class StageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Stage
        fields = '__all__'


class IngredientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ingredient
        fields = '__all__'


class RecipeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Recipe
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username',)


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = '__all__'


class CommentListRetrieveSerializer(serializers.ModelSerializer):

    user = UserSerializer()

    class Meta:
        model = Comment
        fields = '__all__'


class RecipeListRetrieveSerializer(serializers.ModelSerializer):

    kitchen = KitchenSerializer()
    category = CategorySerializer()
 
    stages = StageSerializer(many=True)
    ingredients = IngredientSerializer(many=True)
    comments = CommentListRetrieveSerializer(many=True)

    class Meta:
        model = Recipe
        fields = '__all__'