from django.db import models
from api.models.models import Category

class Sub_category(models.Model):
    name = models.CharField(max_length=200, null=True)
    image = models.CharField(max_length=200, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)
    class Meta:
        verbose_name = 'Sub_category'
        verbose_name_plural = 'Sub_categories'

    def __str__(self):
        return {
            'id': self.id,
            'name': self.name,
            'image' : self.image,
            'category_id' : self.category.id
        }
