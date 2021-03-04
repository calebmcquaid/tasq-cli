#!/usr/bin/env bats

@test "Run application" {
  # Arrange

  # Act
  run node runner.js

  # Assertion
  [ "$status" -eq 0 ]

  # Annihilate
}