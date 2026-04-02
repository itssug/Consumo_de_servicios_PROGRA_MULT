from django.urls import path
from . import views

urlpatterns = [
    path('trivia/', views.obtener_preguntas),
]