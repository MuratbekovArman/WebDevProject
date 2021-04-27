from django.http import JsonResponse

from api.models import Sub_category

from api.serializers import SubCategorySerializer

def subcategory_list(request,category_id ):
   try:
        subcat = Sub_category.objects.get(category_id=category_id)
    except Sub_category.DoesNotExist as e:
        return JsonResponse({'message:': str(e)}, status=400)
    if request.method=="GET":
        subcategories = Sub_category.objects.filter(category_id=subcat)
        serializer = SubCategorySerializer(subcategories, many=True)
        return JsonResponse(serializer.data, safe=False)