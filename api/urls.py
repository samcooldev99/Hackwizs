from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include, re_path, reverse_lazy
from django.views.generic import RedirectView
from rest_framework.routers import DefaultRouter

from api import settings
from api.fileupload.views import FileUploadView
from api.users.views import UserViewSet, CustomAuthToken

router = DefaultRouter()
router.register(r'users', UserViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(router.urls)),
    path('api/auth/', CustomAuthToken.as_view(), name='api_auth'),
    path('api/v1/upload/', FileUploadView.as_view()),
    re_path(r'^$', RedirectView.as_view(url=reverse_lazy('api-root'), permanent=False)),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
