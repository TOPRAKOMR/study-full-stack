# Generated by Django 4.0.4 on 2022-05-27 18:10

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('fscohort', '0002_alter_student_options_student_about_student_avatar'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='register_date',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='student',
            name='update_date',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='student',
            name='year_in_school',
            field=models.CharField(choices=[('FR', 'Freshman'), ('SP', 'Sophomore'), ('JR', 'Junior'), ('SR', 'Senior'), ('GRD', 'Graduate')], default='FR', max_length=3),
        ),
    ]
