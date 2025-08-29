from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tasks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('task', models.CharField(default='Новая задача', max_length=50, verbose_name='Название')),
                ('details', models.TextField(max_length=200, verbose_name='Детали')),
                ('created_at', models.DateTimeField(verbose_name='Дата добавления задачи')),
                ('deadline', models.DateTimeField(verbose_name='Дедлайн задачи')),
            ],
        ),
    ]
