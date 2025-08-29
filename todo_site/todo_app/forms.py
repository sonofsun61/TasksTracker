from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError

class CustomUserCreationForm(UserCreationForm):
    username = forms.CharField(
        label='Логин',
        widget=forms.TextInput(attrs={
            'placeholder': 'Введите логин',
            'class': 'form-control'
        }),
        error_messages={
            'required': 'Логин'
        }
    )
    password1 = forms.CharField(
        label='Пароль',
        strip=False,
        widget=forms.PasswordInput(attrs={
            'placeholder': 'Введите пароль',
            'class': 'form-control'
        }),
        error_messages={
            'required': 'Пароль',
        }
    )
    password2 = forms.CharField(
        label='Подтверждение пароля',
        strip=False,
        widget=forms.PasswordInput(attrs={
            'placeholder': 'Повторите пароль',
            'class': 'form-control'
        }),
        error_messages={
            'required': 'Подтвердите пароль',
        }
    )

    class Meta:
        model = User
        fields = ('username', 'password1', 'password2')
    
    def clean_login(self):
        login = self.cleaned_data.get('login')
        if User.objects.filter('login').exists():
            raise ValidationError('Пользователь с таким логином уже существует')
        return login
    
    def clean_password2(self):
        password1 = self.cleaned_data.get('password1')
        password2 = self.cleaned_data.get('password2')
        if password1 and password2 and (password1 != password2):
            raise ValidationError('Пароли не совпадают')
        return password2