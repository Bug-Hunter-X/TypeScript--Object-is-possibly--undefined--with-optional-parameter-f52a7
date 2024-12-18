# TypeScript Bug: Object is possibly 'undefined' with optional parameter

This repository demonstrates a common TypeScript error: "Object is possibly 'undefined'".  This occurs when using optional parameters and TypeScript's type system cannot guarantee the parameter will always have a value, even if you've added a check for `null` or `undefined`.

## The Bug
The `bug.ts` file contains a function `printName` that takes an optional string parameter.  While the code includes a check for `null`, it still produces a TypeScript error when `undefined` is passed. This happens because `undefined` and `null` are distinct types in TypeScript.