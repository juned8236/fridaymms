from Api.views import *
from django.contrib import admin
from django.urls import path,include
from django.conf.urls import url

from rest_framework_swagger.views import get_swagger_view
schema_view = get_swagger_view(title='Iris Energy API')


# urlpatterns = [
#         url(r'^api/megapod$', MegpapodListView.as_view()),
#         url(r'^api/megapod/(?P<pk>\d+)$', MegapodView.as_view()),
#         url(r'^api/megapod/hvac1$', ServerPodListView_1.as_view()),
#         url(r'^api/megapod/hvac1/(?P<pk>\d+)$', ServerPodView_1.as_view()),
#         url(r'^api/megapod/hvac2/$', ServerPodListView_2.as_view()),
#         url(r'^api/megapod/hvac2/(?P<pk>\d+)$', ServerPodView_2.as_view()),
#         # url(r'^api/megapod/hvac3/$', ServerPodListView_3.as_view()),
#         # url(r'^api/megapod/hvac3/(?P<pk>\d+)$', ServerPodView_3.as_view()),
#         # url(r'^api/megapod/hvac4$', ServerPodListView_4.as_view()),
#         # url(r'^api/megapod/hvac4/(?P<pk>\d+)$', ServerPodView_4.as_view()),
#         # url(r'^api/megapod/hvac5$', ServerPodListView_5.as_view()),
#         # url(r'^api/megapod/hvac5/(?P<pk>\d+)$', ServerPodView_5.as_view()),
#         url(r'^api/megapod/miner$', MinersListView_5.as_view()),
#         url(r'^api/megapod/miner/(?P<pk>\d+)$', MinersPodView_5.as_view()),
#         url(r'^api/schema$', schema_view),

# ]


from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'megapod',MegpapodListView, basename='Megapod')
router.register(r'serverpod',ServerPodListView_1, basename='serverpod')
router.register(r'miner',MinersListView, basename='miner')

from django.conf.urls import include, re_path
urlpatterns = router.urls


urlpatterns = [
    re_path('^', include(router.urls)),
    url(r'^api/schema$', schema_view),

]