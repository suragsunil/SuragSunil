from django.urls import path
from .import views

urlpatterns = [
    path('',views.expense,name='expense'),
    path('delete_expense/<int:id>', views.delete_expense, name='delete_expense'),
]
