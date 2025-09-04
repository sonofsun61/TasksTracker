from django.urls import path
from django.contrib import admin
from todo_app import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.start_page, name='start_page'),
    path('admin/', admin.site.urls),
    path('login/', views.user_login, name='login'),
    # path('logout/', views.logout, name='logout'),
    path('signup/', views.signup, name='signup'),
    path('home/', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('completed_tasks/', views.completed_tasks, name='completed_tasks'),
    path('complete-task/<int:task_id>/', views.complete_task_ajax, name='complete_task_ajax'),
    path('today/', views.today, name='today'),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)