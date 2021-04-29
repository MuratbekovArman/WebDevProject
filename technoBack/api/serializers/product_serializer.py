from rest_framework import serializers

from api.models import Product


class ProductSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    price = serializers.FloatField()
    description = serializers.CharField()
    image = serializers.CharField(read_only=True)
    rating = serializers.FloatField(read_only=True)
    sub_category_id = serializers.IntegerField(read_only=True)

    def create(self, data):
        product = Product.objects.create(name=data.get('name'))
        return product

    def update(self, instance, data):
        instance.name = data.get('name')
        instance.price = data.get('price')
        instance.description = data.get('description')
        instance.save()
        return instance
