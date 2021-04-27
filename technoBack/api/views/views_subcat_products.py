from django.http import JsonResponse

from api.models import Sub_category, Product
from api.serializers import ProductSerializer


def subcat_products(request, id):
    try:
        subcat = Sub_category.objects.get(id=id)
    except Sub_category.DoesNotExist as e:
        return JsonResponse({'message:': str(e)}, status=400)
    products = Product.objects.filter(sub_category=subcat)
    serializer = ProductSerializer(products, many=True)
    return JsonResponse(serializer.data, safe=False)
