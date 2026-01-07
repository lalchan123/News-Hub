from django.shortcuts import render
from apps.category.models import Category
from .pagination import PostPagination
from .models import Post, PostViews
from .serializers import PostSerializer
from rest_framework.response import Response
from rest_framework import generics, permissions, status, filters
#from rest_framework.exceptions import APIException
from rest_framework.views import APIView
import django_filters
from django_filters.rest_framework import DjangoFilterBackend


class PostFilter(django_filters.FilterSet):
    post_category = django_filters.CharFilter(
        field_name = "category__category_name", lookup_expr="iexact"
    )
    keyword = django_filters.CharFilter(
        field_name = "title", lookup_expr="icontains"
    )  
    popular_posts = django_filters.NumberFilter(field_name="views", lookup_expr="gt")
    recent_posts = django_filters.NumberFilter(field_name="views", lookup_expr="lt") 
  
   
    class Meta:
        model = Post
        fields = ["category", "views", "title"]


class PostListView(generics.ListAPIView):
    queryset = Post.objects.all().order_by("-date_created")
    serializer_class = PostSerializer
    permission_classes = [permissions.AllowAny]
    pagination_class = PostPagination
    filter_backends = [
        DjangoFilterBackend,
        filters.SearchFilter,
        filters.OrderingFilter,
    ]
    filterset_class = PostFilter
    search_fields = ["category", "views", "title"]
    ordering_fields = ["date_created"]


class PostDetailView(APIView):
    def get(self, request, slug):
        post = Post.objects.get(slug=slug)
        user_ip_address = request.META.get("HTTP_X_FORWARDED_FOR")  # store ip address of the user
        if user_ip_address:
            ip = user_ip_address.split(",")[0]
        else:
            ip = request.META.get("REMOTE_ADDR")  # server ip address
        if not PostViews.objects.filter(post=post, ip=ip).exists():
            PostViews.objects.create(post=post, ip=ip)
            post.views += 1
            post.save()
        serializer = PostSerializer(post, context={"request": request})
        return Response(serializer.data, status=status.HTTP_200_OK)

