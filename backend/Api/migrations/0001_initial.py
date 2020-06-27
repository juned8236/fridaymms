# Generated by Django 2.2 on 2020-06-27 09:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Megapod',
            fields=[
                ('Megapod_id', models.AutoField(primary_key=True, serialize=False)),
                ('Megapod_Description', models.CharField(blank=True, max_length=100, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Serverpod_2',
            fields=[
                ('Serverpod_2_id', models.AutoField(primary_key=True, serialize=False)),
                ('Serverpod2_Description', models.CharField(blank=True, max_length=100, null=True)),
                ('ef_rat', models.FloatField(blank=True, null=True)),
                ('sf_sat', models.FloatField(blank=True, null=True)),
                ('sf_amps', models.FloatField(blank=True, null=True)),
                ('ef_amps', models.FloatField(blank=True, null=True)),
                ('left_rt', models.FloatField(blank=True, null=True)),
                ('right_rt', models.FloatField(blank=True, null=True)),
                ('sf_ss', models.CharField(blank=True, max_length=255, null=True)),
                ('ef_ss', models.CharField(blank=True, max_length=255, null=True)),
                ('oad', models.FloatField(blank=True, null=True)),
                ('mad', models.FloatField(blank=True, null=True)),
                ('ead', models.FloatField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('megapods', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='Serverpod_2', to='Api.Megapod')),
            ],
        ),
        migrations.CreateModel(
            name='Serverpod_1',
            fields=[
                ('Serverpod_1_id', models.AutoField(primary_key=True, serialize=False)),
                ('Serverpod1_Description', models.CharField(blank=True, max_length=100, null=True)),
                ('oat', models.FloatField(blank=True, null=True)),
                ('ef_rat', models.FloatField(blank=True, null=True)),
                ('sf_sat', models.FloatField(blank=True, null=True)),
                ('sf_amps', models.FloatField(blank=True, null=True)),
                ('ef_amps', models.FloatField(blank=True, null=True)),
                ('left_rt', models.FloatField(blank=True, null=True)),
                ('right_rt', models.FloatField(blank=True, null=True)),
                ('sf_ss', models.CharField(blank=True, max_length=255, null=True)),
                ('ef_ss', models.CharField(blank=True, max_length=255, null=True)),
                ('oad', models.FloatField(blank=True, null=True)),
                ('mad', models.FloatField(blank=True, null=True)),
                ('ead', models.FloatField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('megapods', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='Serverpod_1', to='Api.Megapod')),
            ],
        ),
        migrations.CreateModel(
            name='Miners',
            fields=[
                ('Miners_id', models.AutoField(primary_key=True, serialize=False)),
                ('Miner_Description', models.CharField(blank=True, max_length=100, null=True)),
                ('ip_addr', models.CharField(blank=True, max_length=255, null=True)),
                ('temp_c_mean', models.IntegerField(blank=True, null=True)),
                ('temp_c_max', models.IntegerField(blank=True, null=True)),
                ('temp_p_max', models.IntegerField(blank=True, null=True)),
                ('total_rate', models.FloatField(blank=True, null=True)),
                ('ghs_30m', models.FloatField(blank=True, null=True)),
                ('ghs_5s', models.FloatField(blank=True, null=True)),
                ('fan1', models.IntegerField(blank=True, null=True)),
                ('fan2', models.IntegerField(blank=True, null=True)),
                ('fan3', models.IntegerField(blank=True, null=True)),
                ('fan4', models.IntegerField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('megapods', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='Megapod', to='Api.Megapod')),
                ('serverpod_1', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='Miners', to='Api.Serverpod_1')),
                ('serverpod_2', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='Miners', to='Api.Serverpod_2')),
            ],
        ),
    ]
