from __future__ import unicode_literals
from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import generics


def thanks(request):  
    return render(request, 'thanks.html', )


from rest_framework import viewsets
from rest_framework.mixins import (
    CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin
)
from rest_framework.viewsets import GenericViewSet

class MegpapodListView(GenericViewSet,  # generic view functionality
                     CreateModelMixin,  # handles POSTs
                     RetrieveModelMixin,  # handles GETs for 1 Company
                     UpdateModelMixin,  # handles PUTs and PATCHes
                     ListModelMixin):  # handles GETs for many Companies

      serializer_class = MegapodDetailsSerializer
      queryset = Megapod.objects.all()



class ServerPodListView_1(GenericViewSet,  # generic view functionality
                     CreateModelMixin,  # handles POSTs
                     RetrieveModelMixin,  # handles GETs for 1 Company
                     UpdateModelMixin,  # handles PUTs and PATCHes
                     ListModelMixin):  # handles GETs for many Companies

      serializer_class = Serverpod_1Serializer
      queryset = Serverpod_1.objects.all()

class MinersListView(GenericViewSet,  # generic view functionality
                     CreateModelMixin,  # handles POSTs
                     RetrieveModelMixin,  # handles GETs for 1 Company
                     UpdateModelMixin,  # handles PUTs and PATCHes
                     ListModelMixin):  # handles GETs for many Companies

      serializer_class = MinerSerializer
      queryset = Miners.objects.all()





# #MegapodList View
# class MegpapodListView(generics.ListCreateAPIView,):
#     queryset = Megapod.objects.all()
#     serializer_class = MegapodDetailsSerializer
    


# class MegapodView(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = MegapodDetailsSerializer
#     queryset = Megapod.objects.all()


# # #ServerPod_1
# class ServerPodListView_1(generics.ListCreateAPIView):
#     queryset = Serverpod_1.objects.all()
#     serializer_class = Serverpod_1Serializer


# class ServerPodView_1(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = Serverpod_1Serializer
#     queryset = Serverpod_1.objects.all()

# # #Miners
# class MinersListView_5(generics.ListCreateAPIView):
#     queryset = Miners.objects.all()
#     serializer_class = MinerSerializer


# class MinersPodView_5(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = MinerSerializer
#     queryset = Miners.objects.all()


# # #ServerPod_2
class ServerPodListView_2(generics.ListCreateAPIView):
    queryset = Serverpod_2.objects.all()
    serializer_class = Serverpod_2Serializer


class ServerPodView_2(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = Serverpod_2Serializer
    queryset = Serverpod_2.objects.all()

# # #ServerPod_3
# class ServerPodListView_3(generics.ListCreateAPIView):
#     queryset = ServerPod_3.objects.all()
#     serializer_class = Serverpod_3Serializer


# class ServerPodView_3(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = Serverpod_3Serializer
#     queryset = ServerPod_3.objects.all()


# # #ServerPod_4
# class ServerPodListView_4(generics.ListCreateAPIView):
#     queryset = ServerPod_4.objects.all()
#     serializer_class = Serverpod_4Serializer


# class ServerPodView_4(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = Serverpod_4Serializer
#     queryset = ServerPod_4.objects.all()


# # #ServerPod_5
# class ServerPodListView_5(generics.ListCreateAPIView):
#     queryset = ServerPod_5.objects.all()
#     serializer_class = Serverpod_5Serializer


# class ServerPodView_5(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = Serverpod_5Serializer
#     queryset = ServerPod_5.objects.all()


