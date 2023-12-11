from django.db import models

TYPE = (
    ('Food','Food'),
    ('Rent','Rent'),
    ('Transport','Transport'),
    ('Relaxing','Relaxing')
    )

class Expenses(models.Model):
    Category = models.CharField(max_length=100 , choices=TYPE)
    Amount = models.FloatField()
    Date = models.DateField()