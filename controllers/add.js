define(["views/add", "models/user"], function(Add, User) {
	function run() {
		Add.render();
		binder();
	}

	function binder() {
		document.getElementById('add').addEventListener('click', function(){
            var users = JSON.parse(localStorage.users);
            var userName = document.getElementById('user-name').value;
            
            users.push(new User(userName));
            localStorage.users = JSON.stringify(users);
            window.location.hash = '#list';
        }, false);
	}

	return {
		run: run
	}
});