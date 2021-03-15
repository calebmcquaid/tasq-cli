#!/usr/bin/env bats

@test "Current tasks" {
  touch "./src/shared/tasks.txt"

  eval "tasq --add 'Hello'"
  [[ "$status" -eq 0 ]]

  eval "ls ./src/shared/tasks.txt"
  [[ "$status" -eq 0 ]]

  result="$(cat ./src/shared/tasks.txt)"
  [[ "$status" -eq 0 ]]

  eval "tasq --current"
  [[ "$result" == $EXPECTED_FILE_CONTENTS ]]

  eval "tasq --delete 1"
  [[ "$status" -eq 0 ]]

  rm -rf "./src/shared/tasks.txt"
}