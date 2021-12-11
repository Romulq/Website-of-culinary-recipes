from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django.views import View
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import login, authenticate
from django.contrib.auth import logout as auth_logout

from .forms import LoginForm, RegistrationForm, CommentForm
from .models import Category, Kitchen, Stage, Recipe, Comment, Ingredient


class Test(View):

    def get(self, request):

        recipeOfDay = Recipe.objects.first()
        stages = Stage.objects.filter(recipe=recipeOfDay.id)

        context = {
            "stages": stages, "recipeOfDay": recipeOfDay
        }

        return JsonResponse(request, context)

class HomeView(View):

    def get(self, request):

        kitchens = Kitchen.objects.all()[:6]
        recipeOfDay = Recipe.objects.first()
        stages = Stage.objects.filter(recipe=recipeOfDay.id)
        ingredients = Ingredient.objects.all()

        context = {
            "kitchens": kitchens, "ingredients": ingredients,
            "stages": stages, "recipeOfDay": recipeOfDay
        }

        return render(request, 'recept/home.html', context)


class KitchenView(View):

    def get(self, request, slug):

        if slug != 'all':

            categorys = Category.objects.all()
            kitchen = Kitchen.objects.get(slugKitchen=slug)
            recipes = Recipe.objects.filter(kitchen=kitchen.id)
            recipeOfDay = Recipe.objects.first()

            context = {
                "categorys": categorys, "kitchen": kitchen, "recipes": recipes, "recipeOfDay": recipeOfDay
            }

            return render(request, 'recept/kitchen.html', context)

        else:

            kitchens = Kitchen.objects.all()
            recipeOfDay = Recipe.objects.first()

            context = {
                "kitchens": kitchens, "recipeOfDay": recipeOfDay
            }

            return render(request, 'recept/kitchens.html', context)


class RecipeView(View):

    def get(self, request, slug):

        if slug != 'all':
            
            form = CommentForm(request.POST or None)
            categorys = Category.objects.all()
            kitchens = Kitchen.objects.all()
            stages = Stage.objects.filter(recipe=slug)
            recipeOfDay = Recipe.objects.first()
            recipe = Recipe.objects.get(id=slug)
            comments = Comment.objects.filter(recipe=slug)
            ingredients = Ingredient.objects.filter(recipe=slug)

            context = {
                'form': form, "categorys": categorys, "kitchens": kitchens, "comments": comments,
                "ingredients": ingredients, "stages": stages, "recipe": recipe, "recipeOfDay": recipeOfDay
            }

            return render(request, 'recept/recipe.html', context)

        else:

            kitchens = Kitchen.objects.all()
            categorys = Category.objects.all()
            recipeOfDay = Recipe.objects.first()
            recipes = Recipe.objects.all()

            context = {
                "categorys": categorys, "recipes": recipes, "recipeOfDay": recipeOfDay, "kitchens": kitchens
            }

            return render(request, 'recept/recipes.html', context)

    def post(self, request, slug):

        form = CommentForm(request.POST or None)
        recipeOfDay = Recipe.objects.first()

        if form.is_valid():
            
            print('hello22')

            new_comment = form.save(commit=False)
            new_comment.recipe = Recipe.objects.get(id=slug)
            new_comment.user = request.user
            new_comment.text = form.cleaned_data['text']
            new_comment.save()

            return HttpResponseRedirect(f'/recipe/{slug}')
        else:
            messages.add_message(request, messages.ERROR, 'Поле отзыва пустое...')
        
        context = {'form': form, "recipeOfDay": recipeOfDay, 'slug': slug}
        return render(request, 'recept/recipe.html', context)


class ProfileView(View):

    def get(self, request):

        recipeOfDay = Recipe.objects.first()
        comments = Comment.objects.filter(user=request.user)
        recipes = Recipe.objects.all()

        context = {
            "recipeOfDay": recipeOfDay, "comments": comments, 'recipes': recipes
        }

        return render(request, 'recept/profile.html', context)


class LoginView(View):

    def get(self, request):

        recipeOfDay = Recipe.objects.first()

        context = {
            "recipeOfDay": recipeOfDay
        }

        return render(request, 'recept/signIn.html',context)

    def post(self, request):
        form = LoginForm(request.POST or None)

        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(username=username, password=password)
            if user:
                login(request, user)
                return HttpResponseRedirect('/')
        context = {'form': form}
        return render(request, 'recept/signIn.html', context)


class LogoutView(View):

    def get(self, request):
        auth_logout(request)
        return redirect('/')


class RegistrationView(View):

    def get(self, request):

        recipeOfDay = Recipe.objects.first()
        form = RegistrationForm(request.POST or None)

        context = {
            "recipeOfDay": recipeOfDay, "form": form
        }

        return render(request, 'recept/signUp.html', context)

    def post(self, request):

        form = RegistrationForm(request.POST or None)
        recipeOfDay = Recipe.objects.first()

        if form.is_valid():
            new_user = form.save(commit=False)
            new_user.username = form.cleaned_data['username']
            new_user.email = form.cleaned_data['email']
            new_user.save()
            new_user.set_password(form.cleaned_data['password'])
            new_user.save()

            # User.objects.create_user(new_user)

            user = authenticate(username=form.cleaned_data['username'], password=form.cleaned_data['password'])
            login(request, user)
            return HttpResponseRedirect('/')
        context = {'form': form, "recipeOfDay": recipeOfDay}
        return render(request, 'recept/signUp.html', context)
