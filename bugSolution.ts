function printName(name?: string): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('No name provided');
  }
}

printName(); // Works fine
printName(undefined); // Works fine
printName('John'); // Works fine