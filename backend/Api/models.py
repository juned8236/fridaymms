from django.db import models

class Megapod(models.Model):
    Megapod_id=models.AutoField(primary_key=True)
    Megapod_Description = models.CharField(max_length=100,blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True)
    
    def __str__(self):
        return self.Megapod_Description    


class Serverpod_1(models.Model):
    Serverpod_1_id=models.AutoField(primary_key=True)
    Serverpod1_Description = models.CharField(max_length=100,blank=True, null=True)
    megapods = models.OneToOneField(Megapod,  on_delete =models.CASCADE,related_name='Serverpod_1',blank=True, null=True)
    oat = models.FloatField(blank=True, null=True)
    ef_rat = models.FloatField(blank=True, null=True)
    sf_sat = models.FloatField(blank=True, null=True)
    sf_amps = models.FloatField(blank=True, null=True)
    ef_amps = models.FloatField(blank=True, null=True)
    left_rt = models.FloatField(blank=True, null=True)
    right_rt = models.FloatField(blank=True, null=True)
    sf_ss = models.CharField(max_length=255, blank=True, null=True)
    ef_ss = models.CharField(max_length=255, blank=True, null=True)
    oad = models.FloatField(blank=True, null=True)
    mad = models.FloatField(blank=True, null=True)
    ead = models.FloatField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True)
    
    def __str__(self):
        return self.Serverpod1_Description  


        
class Serverpod_2(models.Model):
    Serverpod_2_id=models.AutoField(primary_key=True)
    Serverpod2_Description = models.CharField(max_length=100,blank=True, null=True)
    megapods = models.OneToOneField(Megapod,  on_delete =models.CASCADE,related_name='Serverpod_2',blank=True, null=True)
    ef_rat = models.FloatField(blank=True, null=True)
    sf_sat = models.FloatField(blank=True, null=True)
    sf_amps = models.FloatField(blank=True, null=True)
    ef_amps = models.FloatField(blank=True, null=True)
    left_rt = models.FloatField(blank=True, null=True)
    right_rt = models.FloatField(blank=True, null=True)
    sf_ss = models.CharField(max_length=255, blank=True, null=True)
    ef_ss = models.CharField(max_length=255, blank=True, null=True)
    oad = models.FloatField(blank=True, null=True)
    mad = models.FloatField(blank=True, null=True)
    ead = models.FloatField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True)

    def __str__(self):
        return self.Serverpod2_Description  
class Miners(models.Model):
    Miners_id = models.AutoField(primary_key=True)
    Miner_Description = models.CharField(max_length=100,blank=True, null=True)
    megapods = models.ForeignKey(Megapod, on_delete =models.CASCADE ,related_name='Megapod',blank=True, null=True)
    serverpod_1 = models.ForeignKey(Serverpod_1,  on_delete =models.CASCADE,related_name='Miners',blank=True, null=True)
    serverpod_2 = models.ForeignKey(Serverpod_2,  on_delete =models.CASCADE,related_name='Miners',blank=True, null=True)
    ip_addr = models.CharField(max_length=255,blank=True, null=True)
    temp_c_mean = models.IntegerField(blank=True, null=True)
    temp_c_max = models.IntegerField(blank=True, null=True)
    temp_p_max = models.IntegerField(blank=True, null=True)
    temp_p_max = models.IntegerField(blank=True, null=True)
    total_rate = models.FloatField(blank=True, null=True)
    ghs_30m = models.FloatField(blank=True, null=True)
    ghs_5s = models.FloatField(blank=True, null=True)
    fan1 = models.IntegerField(blank=True, null=True)
    fan2 = models.IntegerField(blank=True, null=True)
    fan3 = models.IntegerField(blank=True, null=True)
    fan4 = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True,  )

    def __str__(self):
        return self.Miner_Description  


# class ServerPod_3(models.Model):
#     megapods = models.ForeignKey(Profile,  on_delete =models.CASCADE,related_name='Serverpod_3')
#     ef_rat = models.FloatField(blank=True, null=True)
#     sf_sat = models.FloatField(blank=True, null=True)
#     sf_amps = models.FloatField(blank=True, null=True)
#     ef_amps = models.FloatField(blank=True, null=True)
#     left_rt = models.FloatField(blank=True, null=True)
#     right_rt = models.FloatField(blank=True, null=True)
#     sf_ss = models.CharField(max_length=255, blank=True, null=True)
#     ef_ss = models.CharField(max_length=255, blank=True, null=True)
#     oad = models.FloatField(blank=True, null=True)
#     mad = models.FloatField(blank=True, null=True)
#     ead = models.FloatField(blank=True, null=True)


# class ServerPod_4(models.Model):
#     megapods = models.ForeignKey(Profile,  on_delete =models.CASCADE,related_name='Serverpod_4')
#     ef_rat = models.FloatField(blank=True, null=True)
#     sf_sat = models.FloatField(blank=True, null=True)
#     sf_amps = models.FloatField(blank=True, null=True)
#     ef_amps = models.FloatField(blank=True, null=True)
#     left_rt = models.FloatField(blank=True, null=True)
#     right_rt = models.FloatField(blank=True, null=True)
#     sf_ss = models.CharField(max_length=255, blank=True, null=True)
#     ef_ss = models.CharField(max_length=255, blank=True, null=True)
#     oad = models.FloatField(blank=True, null=True)
#     mad = models.FloatField(blank=True, null=True)
#     ead = models.FloatField(blank=True, null=True)

# class ServerPod_5(models.Model):
#     megapods = models.ForeignKey(Profile,  on_delete =models.CASCADE,related_name='Serverpod_5')
#     ef_rat = models.FloatField(blank=True, null=True)
#     sf_sat = models.FloatField(blank=True, null=True)
#     sf_amps = models.FloatField(blank=True, null=True)
#     ef_amps = models.FloatField(blank=True, null=True)
#     left_rt = models.FloatField(blank=True, null=True)
#     right_rt = models.FloatField(blank=True, null=True)
#     sf_ss = models.CharField(max_length=255, blank=True, null=True)
#     ef_ss = models.CharField(max_length=255, blank=True, null=True)
#     oad = models.FloatField(blank=True, null=True)
#     mad = models.FloatField(blank=True, null=True)
#     ead = models.FloatField(blank=True, null=True)
  



# 