define(function() {
	function render(args) {
		var appDiv = document.getElementById("app");
		appDiv.innerHTML = "<input type='text' id='user-name' />&nbsp;<button class='btn btn-primary btn-sm' id='add'>Add this user</button>";
	}

	return {
		render: render
	}
});