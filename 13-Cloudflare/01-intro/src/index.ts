export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		
		if (request.method === "GET") {
			return Response.json({
				message: "This is a GET request",
				method: request.method,
				url: request.url,
			});
		} 
		else {
			return Response.json({
				message: "This is not a GET request",
				method: request.method,
			});
		}
	},
};