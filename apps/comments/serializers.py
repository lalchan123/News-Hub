from rest_framework import serializers
from . models import Comment


class CommentSerializer(serializers.ModelSerializer):
   
    user_name = serializers.SerializerMethodField()

  
    class Meta:
        model = Comment
        fields = ['user_name','text', 'post']

    def get_user_name(self, obj):
        return obj.user_name.username


class UpdateCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['text']
