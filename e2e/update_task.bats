#!/usr/bin/env bats

EXPECTED_FILE_CONTENTS=$(cat <<-EOF
1. This is a new task
EOF
)

EMPTY_FILE=$(cat <<-EOF

EOF
)

FILENAME="../../shared/tasks.txt"

@test "Update task" {
  touch "./src/shared/tasks.txt"
  
  eval "tasq --add 'Hello'"
  [[ "$status" -eq 0 ]]

  eval "tasq --update 1 'This is a new task'"
  [[ "$status" -eq 0 ]]

  result="$(cat './src/shared/tasks.txt')"
  [[ "$result" == $EXPECTED_FILE_CONTENTS ]]

  rm -rf "./src/shared/tasks.txt"
}