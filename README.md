# Project: "Difference checker"
## "Difference Checker" compares data structures to find the difference between two files.
### Actual tests and linter status:
[![Actions Status](https://github.com/newTimesNewRoman/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/newTimesNewRoman/frontend-project-46/actions)
[![Tests & Linter](https://github.com/newTimesNewRoman/frontend-project-46/actions/workflows/self-check.yml/badge.svg)](https://github.com/newTimesNewRoman/frontend-project-46/actions/workflows/self-check.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/b89907afb1e51757a0d1/maintainability)](https://codeclimate.com/github/newTimesNewRoman/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b89907afb1e51757a0d1/test_coverage)](https://codeclimate.com/github/newTimesNewRoman/frontend-project-46/test_coverage)

## Program features:
- Support for input formats: json, yaml, yml.
- Output reports in the form of stylish, plain or json.

## Installation

"Difference checker" requires [Node.js](https://nodejs.org/) v18+ to run.

Copy repository and install the dependencies.

```sh
git clone https://github.com/newTimesNewRoman/frontend-project-46.git
cd frontend-project-46/
make install
```

For help, you can use the --help (-h) command:

```sh
gendiff --help
```

Example:
[![asciicast](https://asciinema.org/a/thDdPRSS2O1e4AQzlbgQeRuGQ.svg)](https://asciinema.org/a/thDdPRSS2O1e4AQzlbgQeRuGQ)

## Comparing .json and .yml files with stylish output format (default)

```sh
gendiff ./__fixtures__/file1.json ./__fixtures__/file2.yml
```

[![asciicast](https://asciinema.org/a/qWTCMmGkP0u1z7RDWeg4b8Kj2.svg)](https://asciinema.org/a/qWTCMmGkP0u1z7RDWeg4b8Kj2)

## Comparing .json and .yml files with plain output format

```sh
gendiff -f plain ./__fixtures__/file1.yml ./__fixtures__/file2.json
```

[![asciicast](https://asciinema.org/a/OSbEg7ELU8RJUNgs9aKy9WID4.svg)](https://asciinema.org/a/OSbEg7ELU8RJUNgs9aKy9WID4)

## Comparing .json and .yaml files with plain output format

```sh
gendiff -f json ./__fixtures__/file1.json ./__fixtures__/file2.yaml
```

[![asciicast](https://asciinema.org/a/TkdLAzGhA7lwsjZgImT52NQTJ.svg)](https://asciinema.org/a/TkdLAzGhA7lwsjZgImT52NQTJ)

## License

MIT
