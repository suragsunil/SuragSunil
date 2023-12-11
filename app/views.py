from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import *
from django.contrib import messages

# Create your views here.

def expense(request):
    e ={
        'ex':Expenses.objects.all()
    }
    if request.method == 'POST':
        c = request.POST.get('text')
        a = request.POST.get('amount')
        d = request.POST.get('date')

        try:
            obj = Expenses(Category=c, Amount=a, Date=d)
            obj.save()
            messages.success(request, 'Successfully added')
        except:
            messages.error(request, 'Failed to add entry')

    return render(request, 'index.html',e)

def delete_expense(request,id):
    expense = Expenses.objects.get(id=id)
    expense.delete()
    return redirect('expense')
