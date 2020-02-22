from rest_framework import serializers

from api.fileupload.models import File


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = ('id', 'file')
