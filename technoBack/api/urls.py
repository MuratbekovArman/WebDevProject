from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

from api.views import *

urlpatterns = [
    path('categories/', CategoryListAPIView.as_view()),
    path('sales/', SaleListAPIView.as_view()),
    path('login/', obtain_jwt_token),
    path('search/<search_request>/', get_needed_products),
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:pk>/', ProductDetailAPIView.as_view()),
    path('subcategories/<int:id>/products', subcat_products),
    path('subcategories/', subcategory_list)
]
