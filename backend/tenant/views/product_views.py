from tenant.models import Product
from tenant.utilities import get_tenant
from rest_framework.response import Response
from rest_framework.decorators import api_view
from tenant.serializers import ProductSerializer


@api_view(["GET"])
def get_products(request) -> Response:
    tenant = get_tenant(request)
    products = Product.objects.filter(tenant=tenant)
    serializer = ProductSerializer(products, many=True, context={"request": request})
    return Response(serializer.data)
