from django.http import JsonResponse

from api.models import Sub_category, Category

from api.serializers import SubCategorySerializer


def subcategory_list(request, id):
    try:
        cat = Category.objects.get(id=id)
    except Sub_category.DoesNotExist as e:
        return JsonResponse({'message:': str(e)}, status=400)
    if request.method == "GET":
        subcategories = Sub_category.objects.filter(category=cat)
        serializer = SubCategorySerializer(subcategories, many=True)
        return JsonResponse(serializer.data, safe=False)


def getSubcategory(request, id):
    subcategory = Sub_category.objects.get(id= id)
    serializer = SubCategorySerializer(subcategory)
    return JsonResponse(serializer.data)
