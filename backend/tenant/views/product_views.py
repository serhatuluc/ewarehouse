from django.http import HttpRequest
from tenant.models import Product, ProductOrderingInformations, ProductSpesifications
from rest_framework.response import Response
from rest_framework.decorators import api_view
from tenant.serializers import (
    ProductOrderingInformationsSerializer,
    ProductSerializer,
    ProductSpesificationsSerializer,
)


@api_view(["GET"])
def get_products(request: HttpRequest) -> Response:
    products = Product.objects.filter(tenant=request.tenant)
    serializer = ProductSerializer(products, many=True, context={"request": request})
    return Response(serializer.data)


@api_view(["GET"])
def get_product(request: HttpRequest, productId: int) -> Response:
    product = Product.objects.filter(id=productId, tenant=request.tenant).first()
    serializer = ProductSerializer(product, many=False, context={"request": request})
    return Response(serializer.data)


@api_view(["GET"])
def get_product_spesifications(request: HttpRequest, productId: int) -> Response:
    try:
        # Assuming productId is the actual ID of the product
        product = Product.objects.get(id=productId)
    except Product.DoesNotExist:
        return Response({"error": "Product not found"}, status=404)

    productSpesifications = ProductSpesifications.objects.filter(product=product)
    serializer = ProductSpesificationsSerializer(
        productSpesifications, many=True, context={"request": productId}
    )
    return Response(serializer.data)


@api_view(["GET"])
def get_product_ordering_informations(request: HttpRequest, productId: int) -> Response:
    try:
        # Assuming productId is the actual ID of the product
        product = Product.objects.get(id=productId)
    except Product.DoesNotExist:
        return Response({"error": "Product not found"}, status=404)

    productOrderingInformations = ProductOrderingInformations.objects.filter(
        product=product
    )
    serializer = ProductOrderingInformationsSerializer(
        productOrderingInformations, many=True, context={"request": productId}
    )
    return Response(serializer.data)
