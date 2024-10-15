exports.send = function (body, statusCode = 200) {
	return {
		statusCode,
		body: JSON.stringify(body)
	};
}