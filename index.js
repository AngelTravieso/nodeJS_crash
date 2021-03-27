const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
	// if(req.url === '/') {
	// 	fs.readFile(path.join(__dirname, 'public', 'index.html'), (error, content) => {
	// 		if (error) throw error;
	// 		res.writeHead(200, {
	// 			'Content-Type': 'text/html'
	// 		});
	// 		res.end(content);	
	// 	})
	// }

	// if(req.url === '/api/users') {
	// 	const users = [
	// 		{ name: 'Angel Travieso', age: 21 },
	// 		{ name: 'John Doe', age: 30 },
	// 	];
	// 	res.writeHead(200, {
	// 		'Content-Type': 'application/json'
	// 	});
	// 	res.end(JSON.stringify(users));
	// }

	// Build file path
	let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

	// Extension of file
	let extName = path.extname(filePath);

	// Initial content type
	let contentType = 'text/html';

	// Check extension an set content type
	switch(extName) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
		case '.json':
			contentType = 'application/json';
			break;
		case '.png':
			contentType = 'image/png';
			break;
		case '.jpg':
			contentType = 'image/jpg';
			break;
	}

	// Read File

	fs.readFile(filePath, (error, content) => {
		if(error) {
			if(error.code == 'ENOENT') {
				// Page not found
				fs.readFile(path.join(__dirname, 'public', '404.html'), (error, content) => {
					res.writeHead(200, {
						'Content-Type': 'text/html'
					});
					res.end(content, 'utf8');
				})
			} else {
				// Some server error
				res.writeHead(500);
				res.end(`Server Error: ${error.code}`);
			}
		} else {
			// Sucess
			res.writeHead(200, {
				'Content-Type': contentType
			});
			res.end(content, 'utf8');
		}
	});

});

const PORT = process.env.PORT || 5000 ;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));