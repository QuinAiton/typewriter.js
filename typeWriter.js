const typeWriter = (string) => {
  let timeout = 0
  for (const letter of string) {
    setTimeout(() => {
      process.stdout.write(letter)
    }, timeout += 50)
  }
  setTimeout(() => {
    process.stdout.write('\n')
  }, string.length * 50);
}

console.log(typeWriter('hello there from lighthouse labs'))