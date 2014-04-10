define(["views/list"], function(List) {
	function run() {
		var users = JSON.parse(localStorage.users);

		List.render({users: users});
	}

	return {
		run: run
	}
});