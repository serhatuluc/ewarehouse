from rest_framework import serializers
from .models import Product, ProductOrderingInformations, ProductSpesifications

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

class ProductSpesificationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductSpesifications
        fields = "__all__"

class ProductOrderingInformationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductOrderingInformations
        fields = "__all__"
