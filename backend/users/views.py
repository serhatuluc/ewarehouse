from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import CustomUserSerializer


class LoginView(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(username=username, password=password)

        refresh = RefreshToken.for_user(user)

        return Response({"refresh": str(refresh), "access": str(refresh.access_token)})


class RegisterView(APIView):
    def post(self, request):
        request.data["tenant"] = request.tenant.pk
        request.data["password"] = make_password(request.data.get("password"))
        request.data["gln"] = (
            request.data.get("gln") if request.data.get("gln") != "" else None
        )
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "Kayıt başarılı."}, status=status.HTTP_201_CREATED
            )
        else:
            if serializer.errors.get("email"):
                if (
                    str(serializer.errors.get("email")[0])
                    == "user with this email address already exists."
                ):
                    return Response(
                        {"error": "E-posta zaten kayıtlı."},
                        status=status.HTTP_400_BAD_REQUEST,
                    )

            if serializer.errors.get("gln"):
                if (
                    str(serializer.errors.get("gln")[0])
                    == "user with this gln already exists."
                ):
                    return Response(
                        {"error": "GLN zaten kayıtlı."},
                        status=status.HTTP_400_BAD_REQUEST,
                    )
