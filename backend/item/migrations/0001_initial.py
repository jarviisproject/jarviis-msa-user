# Generated by Django 3.2.7 on 2021-11-10 05:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('item_id', models.AutoField(primary_key=True, serialize=False)),
                ('price', models.TextField()),
            ],
            options={
                'db_table': 'items',
            },
        ),
    ]
