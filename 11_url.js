const myURL = new URL('http://example.org:8080/foo?username=choi#bar');
console.log('1',myURL.search);
console.log('2',myURL.searchParams.get("username"));
console.log('3',myURL.protocol);
console.log('4',myURL.pathname);
console.log('5',myURL.hash);
console.log('6',myURL.host)
console.log('7',myURL.hostname)
console.log('8',myURL.href)
console.log('8',myURL.origin)
console.log('8',myURL.password)