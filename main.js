require(["models/user", "routes"], function(User, Route) {
	var users = [new User("Barney"), new User("Ted"), new User("Robin"), new User("Marshal")];

    localStorage.users = JSON.stringify(users);

    Route.startRouting();
});