
function generateHTML(team) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
    
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
        <link rel="stylesheet" href = "./style.css">
    </head>
    <body>
        <div class="jumbotron">
            <h1 class="display-4">Team Generator</h1>
            <p class="lead">Here is your team for your upcoming project</p>
    
      
          </div>
        <div class = "container">
         <div class = "row jusify-content-center">
         ${team.map((member) => {
        return `<div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${member}</li>
              <li class="list-group-item">${member.getRole()}</li>
              <li class="list-group-item">${member.id}</li>
              <li class="list-group-item">${member.email}</li>
            </ul>`
    }).join("")}
          </div>
          </div>
          </div>
          <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous"></script>
    </body>
    </html>`;
}

module.exports = generateHTML;