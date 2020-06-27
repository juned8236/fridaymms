"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from allauth.account.views import confirm_email
from django.conf.urls import url
from django.contrib import admin
from django.urls import path,include,re_path
from django.views.generic import TemplateView
from django.views import generic
from authapi.views import thanks
from allauth.account.views import ConfirmEmailView
from rest_framework_jwt.views import obtain_jwt_token
from django.contrib.auth import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('thanks/', thanks, name='thanks'),
    path('password-change/', views.PasswordChangeView.as_view(), name='password_change'),
    path('password-change/done/', views.PasswordChangeDoneView.as_view(), name='password_change_done'),
    path('password-reset/', views.PasswordResetView.as_view(html_email_template_name='registration/password_reset_html_email.html'), name='password_reset'),    path('password-reset/done/', views.PasswordResetDoneView.as_view(), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', views.PasswordResetConfirmView.as_view(),{'template_name': 'thanks.html'}, name='password_reset_confirm'),
    path('reset/done/', views.PasswordResetCompleteView.as_view(), name='password_reset_complete'),
    path('', TemplateView.as_view(template_name='index.html'),name='signin'),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
    url(r'^account/', include('allauth.urls')),
    path("", include("Api.urls")),
    url(r'^api-token-auth/', obtain_jwt_token),
  

]
# Handling React Router Navigation
urlpatterns += [
    re_path(r'.*',TemplateView.as_view(template_name='index.html'),name='signin'),
]
