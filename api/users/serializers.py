from rest_framework import serializers

from api.users.models import User


class UserSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

    class Meta:
        model = User
        fields = (
            'id', 'email', 'mobile_number', 'password', 'username',
            'business_name', 'business_address', 'gst_number', 'sales_history'
        )
        extra_kwargs = {
            'password': {
                'write_only': True
            }
        }
