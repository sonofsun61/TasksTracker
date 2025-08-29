from django.db import models
from django.contrib.auth.models import User

class Tasks(models.Model):
    priority_choices = [
        ('low', 'Низкий'),
        ('medium', 'Средний'),
        ('high', 'Высокий'),
    ]
    task = models.CharField('Название', max_length=50, default='Новая задача')
    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        verbose_name='Автор',
        default=1
    )
    details = models.TextField('Детали', max_length=200)
    priority = models.CharField(
        max_length=10,
        choices=priority_choices,
        default='low',
        verbose_name='Приоритет'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    deadline = models.DateTimeField('Дедлайн задачи')
    done = models.BooleanField('Задача выполнена', default=False)

    def __str__(self):
        return self.task
    
    def priority_class(self):
        return f'priority-{self.priority}'
    
    class Meta:
        verbose_name = 'Задача'
        verbose_name_plural = 'Задачи'