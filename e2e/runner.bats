#!/usr/bin/env bats

EXPECTED_FILE_CONTENTS=$(cat <<-EOF
1. This is a new task
EOF
)

EMPTY_FILE=$(cat <<-EOF

EOF
)

TEST_FILENAME="./e2e/test.txt"

@test "Run application" {
  rm -rf $TEST_FILENAME
  touch "./src/shared/tasks.txt"

  eval "tasq --add '1. Hello'"
  [[ "$status" -eq 0 ]]

  eval "ls ./src/shared/tasks.txt"
  [[ "$status" -eq 0 ]]

  eval "tasq --current"
  [[ "$result" == $EXPECTED_FILE_CONTENTS ]]

  eval "tasq --delete 1"
  [[ "$result" == $EMPTY_FILE ]]

  eval "tasq --add '1. Hello'"
  [[ "$status" -eq 0 ]]

  eval "tasq --update 1 '1. This is a new task'"
  [[ "$status" -eq 0 ]]

  eval "tasq --help"
  [[ "$status" -eq 0 ]]

  result="$(cat ./src/shared/tasks.txt)"
  [[ "$result" == $EXPECTED_FILE_CONTENTS ]]

  eval "tasq --complete 1"
  [[ "$status" -eq 0 ]]

  rm -rf "./src/shared/tasks.txt"
}