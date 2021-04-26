from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=200, null=True)
    image = models.CharField(max_length=200, null=True)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Sale(models.Model):
    name = models.CharField(max_length=200, null=True)
    description = models.CharField(max_length=200, null=True)
    date = models.DateTimeField(null=True)
    image = models.CharField(max_length=200, null=True)

    def __str__(self):
        return {
            'id': self.id,
            'name': self.name
        }