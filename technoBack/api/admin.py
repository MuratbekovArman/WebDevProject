from django.contrib import admin
from api.models import Product, Sub_category, Category
# Register your models here.

admin.site.register(Product)
admin.site.register(Sub_category)
admin.site.register(Category)