#!/usr/bin/env bats

EXPECTED_FILE_CONTENTS=$(cat <<-EOF
hello
EOF
)

TEST_FILENAME="./e2e/test.txt"

@test "Run application" {
  rm -rf $TEST_FILENAME

  eval "add 'hello'"
  [[ "$status" -eq 0 ]]

  eval "ls ./src/shared/tasks.txt"
  [[ "$status" -eq 0 ]]

  eval "todo --current"
  [[ "$result" == $EXPECTED_FILE_CONTENTS ]]

  result="$(cat ./src/shared/tasks.txt)"
  [[ "$result" == $EXPECTED_FILE_CONTENTS ]]
}