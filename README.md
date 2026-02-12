# Jest Testing Practice

A small JavaScript project to practice unit testing with Jest. The goal is to write tests first, then implement code until everything passes.

## Functions/modules covered

- capitalize(string) – capitalizes the first character
- reverseString(string) – returns the reversed string
- calculator – add, subtract, multiply, divide
- caesarCipher(string, shift) – shifts letters while preserving case/punctuation
- analyzeArray(array) – returns { average, min, max, length }

## Tech Stack

- JavaScript
- Jest
- Babel (to allow ESM import/export in Jest)

## Install

- npm install

## Run Test

- npm test

## What I Practiced / Learned

- Writing tests with Jest matchers (toBe, toEqual, etc.)
- Structuring simple modules and testing public APIs
- Thinking in edge cases (wrap-around ciphers, punctuation, divide-by-zero, etc.)
