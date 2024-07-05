from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefeshToken
from django.contrib.auth import authenticate


class LoginView(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(username=username, password=password)

        refresh = RefeshToken.for_user(user)

        return Response({"refresh": str(refresh), "access": str(refresh.access_token)})
