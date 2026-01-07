from django.shortcuts import render
from apps.posts.models import Post
from .serializers import CommentSerializer, UpdateCommentSerializer
from .models import Comment
from rest_framework import generics, exceptions, permissions


class CreateComment(generics.CreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        try:
            post = Post.objects.get(slug=self.kwargs["slug"])
        except BaseException:
            raise exceptions.APIException("Post not found!")
        return Post.objects.filter(slug=post.slug)

    def perform_create(self, serializer):
        if self.get_queryset().exists():
            user = self.request.user
            serializer.save(user_name=user, post=Post.objects.get(slug=self.kwargs["slug"]))


class UpdateCommentView(generics.UpdateAPIView):
    serializer_class = UpdateCommentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        try:
            post = Post.objects.get(pk=self.kwargs["pi"])
        # ie this particular comment that belong to
        # this particular post id(pi) & that belong to the current user
        except BaseException:
            raise exceptions.APIException("No post found!")
        return Comment.objects.filter(post=post, user_name=user)

    def perform_update(self, serializer):
        serializer.save()
