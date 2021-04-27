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

class Product(models.Model):
        name = models.CharField(max_length=200, null=True)
        price=models.FloatField(max_length=200, null=True)
        description = models.CharField(max_length=200, null=True)
        image = models.CharField(max_length=200, null=True)
        rating=models.FloatField(max_length=200, null=True)
        sub_category=models.ForeignKey(Sub_category, related_name="products",on_delete=models.CASCADE")
    
    def __str__(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Sub_category(models.Model):
    name = models.CharField(max_length=200, null=True)
    image = models.CharField(max_length=200, null=True)
    category_id=models.AutoField(max_length=200, null=True)
    def __str__(self):
        return {
            'id': self.id,
            'name': self.name
        }
    class Meta:
        verbose_name = 'Subcategory'
        verbose_name_plural = 'Subcategories'



    