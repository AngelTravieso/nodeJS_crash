const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, error => {
// 	if (error) throw error;
// 	console.log('Folder created...');
// });

// Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', error => {
// 	if (error) throw error;
// 	console.log('File written to...');

// 	// File append
// 	fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love Node.js!', error => {
// 		if (error) throw error;
// 		console.log('File written to...');
// 	});

// });

// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (error, data) => {
// 	if (error) throw error;
// 	console.log(data);
// });

// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), error => {
	if (error) throw error;
	console.log('File renamed...');
});