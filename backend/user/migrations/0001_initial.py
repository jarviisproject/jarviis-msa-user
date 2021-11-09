# Generated by Django 3.2.9 on 2021-11-09 07:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('username', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('password', models.CharField(max_length=10)),
                ('name', models.TextField()),
                ('email', models.TextField()),
                ('birth', models.TextField()),
                ('address', models.TextField()),
            ],
            options={
                'db_table': 'users',
            },
        ),
    ]