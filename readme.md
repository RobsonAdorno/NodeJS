# Documentação

## Estrutura do projeto

<div class="highlight">
    <pre class="highlight markdown">
        <code>  

src<font></font>
  │   app.js          # App entry point<font></font>
  └───api             # Express route controllers for all the endpoints of the app<font></font>
  └───config          # Environment variables and configuration related stuff<font></font>
  └───jobs            # Jobs definitions for agenda.js<font></font>
  └───loaders         # Split the startup process into modules<font></font>
  └───models          # Database models<font></font>
  └───services        # All the business logic is here<font></font>
  └───subscribers     # Event handlers for async task<font></font>
  └───types           # Type declaration files (d.ts) for Typescript<font></font>
</code>
</pre>
</div>