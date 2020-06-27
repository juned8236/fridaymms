from rest_framework import serializers
from drf_writable_nested.serializers import WritableNestedModelSerializer
from .models import *


# class Serverpod_5Serializer(serializers.ModelSerializer):
#     ef_rat = serializers.FloatField()
#     sf_sat = serializers.FloatField()
#     sf_amps = serializers.FloatField()
#     ef_amps = serializers.FloatField()
#     left_rt = serializers.FloatField()
#     right_rt = serializers.FloatField()
#     sf_ss = serializers.CharField()
#     ef_ss = serializers.CharField()
#     oad = serializers.FloatField()
#     mad = serializers.FloatField()
#     ead = serializers.FloatField()
 
#     class Meta:
#         model = ServerPod_5
#         fields = '__all__'

# class Serverpod_4Serializer(serializers.ModelSerializer):
#     ef_rat = serializers.FloatField()
#     sf_sat = serializers.FloatField()
#     sf_amps = serializers.FloatField()
#     ef_amps = serializers.FloatField()
#     left_rt = serializers.FloatField()
#     right_rt = serializers.FloatField()
#     sf_ss = serializers.CharField()
#     ef_ss = serializers.CharField()
#     oad = serializers.FloatField()
#     mad = serializers.FloatField()
#     ead = serializers.FloatField()

#     class Meta:
#         model = ServerPod_4
#         fields = '__all__'



# class Serverpod_3Serializer(serializers.ModelSerializer):
#     ef_rat = serializers.FloatField()
#     sf_sat = serializers.FloatField()
#     sf_amps = serializers.FloatField()
#     ef_amps = serializers.FloatField()
#     left_rt = serializers.FloatField()
#     right_rt = serializers.FloatField()
#     sf_ss = serializers.CharField( )
#     ef_ss = serializers.CharField( )
#     oad = serializers.FloatField()
#     mad = serializers.FloatField()
#     ead = serializers.FloatField()

#     class Meta:
#         model = ServerPod_3
#         fields = '__all__'

class MinerSerializer(serializers.ModelSerializer):
    ip_addr = serializers.CharField(required = False)
    temp_c_mean = serializers.IntegerField(required = False)
    temp_c_max = serializers.IntegerField(required = False)
    temp_p_max = serializers.IntegerField(required = False)
    temp_p_max = serializers.IntegerField(required = False)
    total_rate = serializers.FloatField(required = False)
    ghs_30m = serializers.FloatField(required = False)
    ghs_5s = serializers.FloatField(required = False)
    fan1 = serializers.IntegerField(required = False)
    fan2 = serializers.IntegerField(required = False)
    fan3 = serializers.IntegerField(required = False)
    fan4 = serializers.IntegerField(required = False)

    class Meta:
        model = Miners
        fields = '__all__'

class Serverpod_2Serializer(WritableNestedModelSerializer):
    ef_rat = serializers.FloatField(required = False)
    sf_sat = serializers.FloatField(required = False)
    sf_amps = serializers.FloatField(required = False)
    ef_amps = serializers.FloatField(required = False)
    left_rt = serializers.FloatField(required = False)
    right_rt = serializers.FloatField(required = False)
    sf_ss = serializers.CharField(required = False )
    ef_ss = serializers.CharField(required = False )
    oad = serializers.FloatField(required = False)
    mad = serializers.FloatField(required = False)
    ead = serializers.FloatField(required = False)
    Miners = MinerSerializer(many=True, required = False)

 
    class Meta:
        model = Serverpod_2
        # fields = '__all__'
        fields = ('Serverpod_2_id','created_at','updated_at',
        'ef_rat','sf_sat','sf_amps','ef_amps','left_rt','right_rt','sf_ss','ef_ss','oad','mad','ead','Miners')



class Serverpod_1Serializer(WritableNestedModelSerializer):
    oat = serializers.FloatField(required = False)
    ef_rat = serializers.FloatField(required = False)
    sf_sat = serializers.FloatField(required = False)
    sf_amps = serializers.FloatField(required = False)
    ef_amps = serializers.FloatField(required = False)
    left_rt = serializers.FloatField(required = False)
    right_rt = serializers.FloatField(required = False)
    sf_ss = serializers.CharField(required = False)
    ef_ss = serializers.CharField(required = False)
    oad = serializers.FloatField(required = False)
    mad = serializers.FloatField(required = False)
    ead = serializers.FloatField(required = False)

    Miners = MinerSerializer(many=True, required = False)


    class Meta:
        model = Serverpod_1
        fields = ('Serverpod_1_id','created_at','updated_at','oat',
        'ef_rat','sf_sat','sf_amps','ef_amps','left_rt','right_rt','sf_ss','ef_ss','oad','mad','ead','Miners')

class MegapodDetailsSerializer(WritableNestedModelSerializer):
    Serverpod_1 = Serverpod_1Serializer(required = False)
    Serverpod_2 = Serverpod_2Serializer(required = False)
    # Serverpod_3 = Serverpod_3Serializer(many=True)
    # Serverpod_4 = Serverpod_4Serializer(many=True)
    # Serverpod_5 = Serverpod_5Serializer(many=True)
    class Meta:
        model = Megapod
        fields = ('Megapod_id','created_at','updated_at', 'Megapod_Description', 'Serverpod_1', 'Serverpod_2')
        # extra_kwargs = {'Serverpod_1': {'required': False,'read_only': True,},'Serverpod_2':{'required': False}}
        # validators = []  #

        # fields = ('id','Miners','Serverpod_1', 'Serverpod_2', 'Serverpod_3', 'Serverpod_4', 'Serverpod_5')


class MegapodSerializer(WritableNestedModelSerializer):
    Megapod_Description = MegapodDetailsSerializer()
    class Meta:
        model = Megapod
        fields = ('Megapod_id','created_at','updated_at', 'Megapod_Description', 'Serverpod_1', 'Serverpod_2')
