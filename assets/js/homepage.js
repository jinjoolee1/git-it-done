var getUserRepos = function() {
    // format the github api url
    fetch("https://api.github.com/users/octocat/repos");
  };
  
    // make a request to the url
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
      });
    });