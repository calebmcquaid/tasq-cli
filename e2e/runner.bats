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

  eval "ls test.txt"
  [[ "$status" -eq 0 ]]

  result="$(cat test.txt)"
  [[ "$result" == $EXPECTED_FILE_CONTENTS ]]
}