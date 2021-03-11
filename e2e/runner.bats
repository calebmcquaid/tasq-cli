#!/usr/bin/env bats

EXPECTED_FILE_CONTENTS=$(cat <<-EOF
1. Hello
EOF
)

EMPTY_FILE=$(cat <<-EOF

EOF
)

TEST_FILENAME="./e2e/test.txt"

@test "Run application" {
  rm -rf $TEST_FILENAME

  eval "task --add '1. Hello'"
  [[ "$status" -eq 0 ]]

  eval "ls ./src/shared/tasks.txt"
  [[ "$status" -eq 0 ]]

  eval "task --current"
  [[ "$result" == $EXPECTED_FILE_CONTENTS ]]

  eval "task --delete 1"
  [[ "$result" == $EMPTY_FILE ]]

  eval "task --add '1. Hello'"
  [[ "$status" -eq 0 ]]

  eval "task --help"
  [[ "$status" -eq 0 ]]

  result="$(cat ./src/shared/tasks.txt)"
  [[ "$result" == $EXPECTED_FILE_CONTENTS ]]

  eval "task --complete 1"
  [[ "$status" -eq 0 ]]
}