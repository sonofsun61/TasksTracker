from django.shortcuts import render, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
from .forms import CustomUserCreationForm
from .models import Tasks
from django.contrib.auth.decorators import login_required

def start_page(request):
    return render(request, 'todo_app/start_page.html')

@login_required
def home(request):
    if request.method == 'POST':
        task = request.POST['task-name']
        author = request.user
        details = request.POST['task-details']
        deadline = request.POST['task-deadline']
        priority = request.POST['task-priority']

        Tasks.objects.create(
            task = task,
            author = author,
            details = details,
            deadline = deadline,
            priority = priority
        )
        return redirect('home')

    user_tasks = Tasks.objects.filter(author=request.user, done=False)
    return render(request, 'todo_app/home.html', {'tasks': user_tasks})

@login_required
def about(request):
    return render(request, 'todo_app/about.html')

def user_login(request):
    if request.POST:
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user=user)
            return redirect('home')
    return render(request, 'todo_app/login.html')

def signup(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')
    else:
        form = CustomUserCreationForm()
    return render(request, 'todo_app/signup.html', {'form': form})

@login_required
def complete_task_ajax(request, task_id):
    if request.method == 'POST':
        task = get_object_or_404(Tasks, id=task_id, author=request.user)
        task.done = True
        task.save()
        return JsonResponse({'status': 'success', 'message': 'Task completed'})
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'})