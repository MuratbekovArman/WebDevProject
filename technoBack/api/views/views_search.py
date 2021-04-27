import json

from django.db.models import Q
from django.http.response import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from api.models import Product

from api.serializers import ProductSerializer

def test(request, search_request):
	return HttpResponse("123")


def get_needed_products(request, search_request):
	if request.method == "GET":
		products = Product.objects.filter(Q(name__contains = search_request) | Q(description__contains = search_request))
		serializer = ProductSerializer(products, many = True)
		return JsonResponse(serializer.data, safe = False)