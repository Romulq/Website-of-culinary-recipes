from django.conf import settings
from django.conf.urls.static import static
from django.urls import path

from .views import HomeView, KitchenView, RecipeView, ProfileView, LoginView, RegistrationView, LogoutView, Test

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('kitchen/<slug:slug>', KitchenView.as_view(), name='kitchen'),
    path('recipe/<slug:slug>', RecipeView.as_view(), name='recipe'),
    
    path('test-vue', Test.as_view(), name='test'),

    path('profile/', ProfileView.as_view(), name='profile'),

    path('login/', LoginView.as_view(), name="sign_in"),
    path('logout/', LogoutView.as_view(), name="sign_out"),
    path('registration/', RegistrationView.as_view(), name="sign_up"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)