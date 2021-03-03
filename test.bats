#!/usr/bin/env bats

@test "craftutil build should compile SCSS to CSS" {
  # Setup

  # Execution
  run node runner.js
  [ "$status" -eq 0 ]
}