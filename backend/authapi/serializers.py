from rest_framework import serializers

from authapi.models import CustomUser


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'first_name', 'is_admin', 'is_miner','read_only']


from rest_auth.registration.serializers import RegisterSerializer

class RegistrationSerializer(RegisterSerializer):
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    is_admin = serializers.CharField()
    is_miner = serializers.CharField()
    read_only = serializers.CharField()

    def get_cleaned_data(self):
        return {
            'first_name': self.validated_data.get('first_name', ''),
            'is_admin': self.validated_data.get('is_admin', ''),
            'is_miner': self.validated_data.get('is_miner', ''),
            'read_only': self.validated_data.get('read_only', ''),
            'email': self.validated_data.get('email', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),


        }