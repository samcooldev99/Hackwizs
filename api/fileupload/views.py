from rest_framework.parsers import FileUploadParser, MultiPartParser
from rest_framework.response import Response
from rest_framework.views import APIView
import requests

from api.fileupload.serializers import FileSerializer


class FileUploadView(APIView):
    parser_classes = (MultiPartParser, )

    def post(self, request, *args, **kwargs):
        file_serializer = FileSerializer(data=request.data)
        if file_serializer.is_valid():
            file_serializer.save()
        response = requests.post("https://hackwizsvision.cognitiveservices.azure.com/vision/v2.0/ocr?detectOrientation=true&language=en", json={
            "url": "http://157.56.177.45/{}".format(file_serializer.data["file"])
        }, headers={
            "Ocp-Apim-Subscription-Key": "fde694ab4b164dc3b019f05b9ec9ed17",
            "Content-Type": "application/json"
        })
        return Response({
            "image_url": "http://157.56.177.45/{}".format(file_serializer.data["file"]),
            "response": response.json()
        })
