from rest_framework import serializers
from .models import Post, PostViews
from apps.comments.serializers import CommentSerializer


class PostSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source="author.username")
    category = serializers.SerializerMethodField(read_only=True)
    comments = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ['title', 'slug', 'photo1', 'photo2', 'photo3', 'excerpt', 'content', 'views',
                  'date_created', 'last_updated', 'author', 'category', 'comments']

    def get_category(self, obj):
        return obj.category.category_name

    def get_comments(self, obj):
        comments = obj.comment_set.all()
        serializers = CommentSerializer(comments, many=True)
        return serializers.data


class PostUpdateSerializer(serializers.ModelSerializer):  # should not update title

    class Meta:
        model = Post
        exclude = ['photo1', 'photo2', 'photo3', 'excerpt', 'content',
                   'date_created', 'last_updated', 'author', 'category']
