Input tasks into the cli
Interactivity -- listening to commands (jest test)
- key-up, key-down
Complete todo, mark as completed
Delete completed/incomplete todos
Visuals -- color-code todos
Share/send todo list -- backend needed
Log in/log out, identify user, generate private key -- backend needed

(should [REACTION] when [ACTION])
STORIES
As a user, I should have a description of how to get started with the cli -- CLI
 -TODO: write a README

As a cli user, I should be able to start and quit the application
 -it(should display a welcome message after the application is started) 
 -it(should gracefully quit the application when the "q" key is pressed)

As a user, I should be able to add a new task using the cli -- INPUT
- it(should display a menu of options for the user to pick from)
- it(should navigate to the "add task screen" when add menu number is pressed)
-it(should accept input in the command line) -- Mock stdin
-it(should save the input when the enter key is pressed)
-it(should display the tasks when content is available)
-it(should not accept empty todos on submit)

As a user, I should be able to delete completed todos -- INPUT
-it(should remove the todo from the inactive list when the todo is deleted)

As a user, I should be able to delete incomplete todos -- INPUT
-it(should remove the todo from the active list when the todo is deleted)

As a user, I should be able to mark tasks as completed -- INPUT
-it(should move the todo from the active list to the inactive list upon completion)

As a user, I should be able to have a colorful cli todo app -- INTERACTIVITY
--Tough to test for...

As a user, I should be able to interact with the app while it is running it's processes -- INTERACTIVITY


As a user, I should be able to log in to my todo app via a magic link -- BACKEND
-it(should send a magic link when the user logs in)

As a user, I should be able to send my todo list to another user -- BACKEND
-it(should email the todo list when the user shares the todos)
-it(should open the email with the subject and body populated when the todos are shared)

EPICS
- CLI
- INPUT
- INTERACTIVITY
- BACKEND