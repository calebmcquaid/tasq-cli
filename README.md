# tasq-cli

## Description
This is a very simple todo list application that runs in the command line. The tasks are stored in a .txt file on your local machine. Tasks are managed with terminal commands.

## Commands
  - Add a task -- `tasq --add 'TASK_TITLE'`
  
  - Update a task -- `tasq --update TASK_NUMBER 'NEW_TASK_TITLE'`
  
  - Delete a current task -- `tasq --delete TASK_NUMBER`
  
  - See current tasks -- `tasq --current`
  
  - Complete a task -- `tasq --complete TASK_NUMBER`
  
  - See completed tasks -- `tasq --completed`
  
  - Archive a task -- `tasq --archive TASK_NUMBER`
  
  - See all commands -- `tasq --info`
 
## Tests
To run the testing suites, run `npm test` for the unit tests. You will need to `cd` into the `e2e` folder to run the end-to-end tests: `npm run e2e`
