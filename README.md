# Project: "Difference checker"
## "Difference Checker" compares data structures to find the difference between two files.
### Actual tests and linter status:
[![Actions Status](https://github.com/newTimesNewRoman/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/newTimesNewRoman/frontend-project-46/actions)
[![Tests & Linter](https://github.com/newTimesNewRoman/frontend-project-46/actions/workflows/self-check.yml/badge.svg)](https://github.com/newTimesNewRoman/frontend-project-46/actions/workflows/self-check.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/b89907afb1e51757a0d1/maintainability)](https://codeclimate.com/github/newTimesNewRoman/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b89907afb1e51757a0d1/test_coverage)](https://codeclimate.com/github/newTimesNewRoman/frontend-project-46/test_coverage)

## Program features:
- Support for input formats: json, yml.
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
[![asciicast](https://asciinema.org/a/9hsCeadJBYXBuUC9AtZpISzqf.svg)](https://asciinema.org/a/9hsCeadJBYXBuUC9AtZpISzqf)

## Comparing .json and .yml files with stylish output format (default)

```sh
gendiff ./__fixtures__/file1.json ./__fixtures__/file2.json
```
[![asciicast](https://asciinema.org/a/PnBxcLL9BhMDaRs2AmHDe7Cw9.svg)](https://asciinema.org/a/PnBxcLL9BhMDaRs2AmHDe7Cw9)
```sh
gendiff ./__fixtures__/filepath1.yml ./__fixtures__/filepath2.yml
```
[![asciicast](https://asciinema.org/a/vynWhHpm0z0JmAliamubCg4Rr.svg)](https://asciinema.org/a/vynWhHpm0z0JmAliamubCg4Rr)

## Comparing .json and .yml files with plain output format

```sh
gendiff -f plain ./__fixtures__/file1.json ./__fixtures__/file2.json
```
[![asciicast](https://asciinema.org/a/GhR1v9yVR4tL7DsZ9dgGVVIly.svg)](https://asciinema.org/a/GhR1v9yVR4tL7DsZ9dgGVVIly)
```sh
gendiff -f plain ./__fixtures__/filepath1.yml ./__fixtures__/filepath2.yml
```
[![asciicast](https://asciinema.org/a/hSskSBAuPISLzojpOKCFL8Etj.svg)](https://asciinema.org/a/hSskSBAuPISLzojpOKCFL8Etj)

## Comparing .json and .yml files with plain output format

```sh
gendiff -f json ./__fixtures__/file1.json ./__fixtures__/file2.json
```
[![asciicast](https://asciinema.org/a/Y8FYWpJCyo0j2bHEyGwxGTE1s.svg)](https://asciinema.org/a/Y8FYWpJCyo0j2bHEyGwxGTE1s)
```sh
gendiff -f json ./__fixtures__/filepath1.yml ./__fixtures__/filepath2.yml
```
[![asciicast](https://asciinema.org/a/e8UadKmhujgm6hG5ekqodz9Rh.svg)](https://asciinema.org/a/e8UadKmhujgm6hG5ekqodz9Rh)