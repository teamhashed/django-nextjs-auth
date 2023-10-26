from dj_rest_auth.serializers import \
    TokenSerializer as DefaultTokenSerializer, \
    UserDetailsSerializer as DefaultUserDetailSerializer
from rest_framework import serializers



class UserDetailSerializer(DefaultUserDetailSerializer):
    groups = serializers.StringRelatedField(many=True)
    class Meta(DefaultUserDetailSerializer.Meta):
        fields = ('username', 'email', 'first_name', 'last_name', 'groups')



class TokenSerializer(DefaultTokenSerializer):
    user = UserDetailSerializer(read_only=True)
    class Meta(DefaultTokenSerializer.Meta):
        fields = ('key', 'user')