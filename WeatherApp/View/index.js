<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Weatherly</title>
    <link rel="stylesheet" type="text/css" href="/css/style.css" />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300"
      rel="stylesheet"
      type="text/css"
    />
  </head>
  <body>
    <div class="container">
      <fieldset>
        <form action="/" method="post">
          <input
            name="city"
            type="text"
            class="ghost-input"
            placeholder="Enter a City"
            required
          />
          <input
            id="submit"
            type="submit"
            class="ghost-button"
            value="Get Weather"
          />
        </form>
        /* This is an if statement that checks if the weather is not null. If it is not null, it will
        print the weather. If it is null, it will print the error. */
        <% if(weather !== null){ %>
        <p><%= weather %></p>
        <% } %> <% if(error !== null){ %>
        <p><%= error %&gt;</p>
        <% } %{">"}
      </fieldset>
    </div>
  </body>
</html>