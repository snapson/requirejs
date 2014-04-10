define(function() {
	function render(args) {
		var appDiv = document.getElementById("app");
		var users = args.users;
		var html = "<ul class='list-unstyled'>";

		for (var i = 0, len = users.length; i < len; i++){
            html += '<li>' + users[i].name + '</li>';
        }

        html += '</ul>';
        appDiv.innerHTML = html;
	}

	return {
        render:render
    };
});