@echo off
echo Building all apps for production...

cd todo-remote
call npm run build
start cmd /k "npm run preview"
cd ..

cd todo-stat
call npm run build
start cmd /k "npm run preview"
cd ..

cd todo-host
call npm run build
start cmd /k "npm run dev"
cd ..

echo All apps are built and running in production preview mode!
echo.
echo Backend:     http://localhost:3000
echo Host:        http://localhost:5000
echo Remote:      http://localhost:5001
echo Statistics:  http://localhost:5002
pause