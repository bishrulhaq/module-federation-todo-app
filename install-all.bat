@echo off
echo Installing dependencies for Module Federation Todo App...

:: Clean existing node_modules and package-lock.json
echo Cleaning existing node_modules and package-lock.json...
if exist backend\node_modules rmdir /s /q backend\node_modules
if exist backend\package-lock.json del /f /q backend\package-lock.json
if exist todo-host\node_modules rmdir /s /q todo-host\node_modules
if exist todo-host\package-lock.json del /f /q todo-host\package-lock.json
if exist todo-remote\node_modules rmdir /s /q todo-remote\node_modules
if exist todo-remote\package-lock.json del /f /q todo-remote\package-lock.json
if exist todo-stat\node_modules rmdir /s /q todo-stat\node_modules
if exist todo-stat\package-lock.json del /f /q todo-stat\package-lock.json

:: Install Backend dependencies
echo Installing Backend dependencies...
cd backend
call npm install
cd ..

:: Install Host dependencies
echo Installing Host dependencies...
cd todo-host
call npm install
cd ..

:: Install Remote dependencies
echo Installing Remote dependencies...
cd todo-remote
call npm install
cd ..

:: Install Statistics dependencies
echo Installing Statistics dependencies...
cd todo-stat
call npm install
cd ..

echo.
echo All dependencies have been installed!
echo.
echo To start the application, run 'start-all.bat'
echo.
pause 