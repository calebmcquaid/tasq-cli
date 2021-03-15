#!/usr/bin/env bats

EXPECTED_FILE_CONTENTS=$(cat <<-EOF
1. Hello
EOF
)

TEST_FILENAME="./e2e/test.txt"

@test "Archive task" {
  touch "./src/shared/tasks.txt"

  eval "tasq --add 'Hello'"
  [[ "$status" -eq 0 ]]

  eval "ls ./src/shared/tasks.txt"
  [[ "$status" -eq 0 ]]

  result="$(cat ./src/shared/tasks.txt)"
  [[ "$result" == $EXPECTED_FILE_CONTENTS ]]

  eval "tasq --complete 1"
  [[ "$status" -eq 0 ]]

  eval "tasq --archive 1"
  [[ "$status" -eq 0 ]]

  rm -rf "./src/shared/tasks.txt"
}