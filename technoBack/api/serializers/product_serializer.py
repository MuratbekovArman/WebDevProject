from rest_framework import serializers

from api.models import Product

class ProductSerializer(serializers.Serializer):
	id = serializers.IntegerField()
	name = serializers.CharField()
    price=serializers.FloatField()
    description=serializers.CharField()
	image = serializers.CharField()
    rating=serializers.FloatField()
    sub_category =serializers.IntegerField()
	
    def create(self, data):
		product = Product.objects.create(name = data.get(['name']))
		return product

	def update(self, instance, data):
		instance.name = data.get['name']
		instance.save()
		return instance