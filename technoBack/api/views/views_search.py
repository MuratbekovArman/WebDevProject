import json

from django.http.response import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from api.models import Product

def test(request, search_request):
	return HttpResponse("123")


def get_needed_products(request, search_request):
	if request.method == "GET":
		data = json.load(request)
		products = Product.objects.all()

		return JsonResponse(products, safe = False)