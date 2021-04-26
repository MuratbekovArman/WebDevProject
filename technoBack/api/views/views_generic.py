from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from api.models.models import Category, Sale
from api.serializers.serializers import CategorySerializer, SaleSerializer


class CategoryListAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated]


class SaleListAPIView(generics.ListCreateAPIView):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer
    permission_classes = [IsAuthenticated]