from django.urls import path
from . import views

urlpatterns = [
    path('comment/post/<str:slug>/', views.CreateComment.as_view(), name='post_comment'),
    path('comment/<int:pk>/<int:pi>/update/', views.UpdateCommentView.as_view(), name='update-comment'),
]


