from django import forms
from django.contrib.auth.models import User

from .models import Comment


class CommentForm(forms.ModelForm):

    text = forms.CharField(required=True, label=False, widget=forms.Textarea(
                                                        attrs={'class': 'col', 'placeholder': 'Оставьте ваш отзыв.....'}))

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    class Meta:
        model = Comment
        fields = ['text']


class LoginForm(forms.ModelForm):

    password = forms.CharField(widget=forms.PasswordInput)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['username'].label = 'Логин'
        self.fields['password'].label = 'Пароль'

    def clean(self):
        username = self.cleaned_data['username']
        password = self.cleaned_data['password']
        if not User.objects.filter(username=username).exists():
            raise forms.ValidationError(f'Пользователь {username} не найден')
        user = User.objects.filter(username=username).first()
        if user:
            if not user.check_password(password):
                raise forms.ValidationError("Неверный пароль")
        return self.cleaned_data

    class Meta:
        model = User
        fields = ['username', 'password']


class RegistrationForm(forms.ModelForm):

    email = forms.EmailField(required=True, label=False, widget=forms.TextInput(attrs={'class': 'mb-4', 'placeholder': 'Почта'}))
    username = forms.CharField(required=True, label=False, widget=forms.TextInput(attrs={'class': 'mb-4', 'placeholder': 'Логин'}))
    password = forms.CharField(label=False, widget=forms.PasswordInput(attrs={'class': 'mb-4', 'placeholder': 'Пароль'}))
    check_password = forms.CharField(label=False, widget=forms.PasswordInput(attrs={'class': 'mb-4', 'placeholder': 'Повторите пароль'}))

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def clean_email(self):
        email = self.cleaned_data['email']
        if User.objects.filter(email=email).exists():
            raise forms.ValidationError(f'Пользователь с таким почтовым адресом уже зарегистрирован')
        return email

    def clean_name(self):
        username = self.cleaned_data['username']
        if User.objects.filter(username=username).exists():
            raise forms.ValidationError(f'Такое имя уже занято')
        return username

    def clean(self):
        password = self.cleaned_data['password']
        check_password = self.cleaned_data['check_password']
        if password != check_password:
            raise forms.ValidationError(f'Пароли не совпадают!')
        return self.cleaned_data

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'check_password']