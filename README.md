## Demonstrating main differences between Vue, Angular and React

## Demonstrating main differences between Vue, Angular and React

1. Creating a directory and a project with:
> mkdir [name] && cd [name]
> yarn init
2. Make “packages” directory which will contain our apps
> mkdir packages && cd packages
3. Creating Vue and React apps with the help of npx command
> npx vue create [name]
> npx create-react-app [name]
4. Angular must be installed locally:
> yarn global add @angular/cli
5. And then we can create angular app with it’s CLI tool
> ng new [name]
6. From the root of the project, install `concurrently` package
> yarn add -W concurrently
7. Edit `package.json` from the root of the mono-repo to look like this:
```
{
  "name": "example",
  "version": "1.0.0",
  "main": "index.js",
  "author": "Olja Ivkovic",
  "license": "MIT",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "start:all": "concurrently \"yarn start:react\" \"yarn start:vue\" \"yarn start:ng\"",
    "start:react": "yarn workspace @example/react-tabs start",
    "start:vue": "yarn workspace @example/vue-tabs serve",
    "start:ng": "yarn workspace @example/angular-tabs start"
  },
  "dependencies": {
    "concurrently": "^5.2.0"
  }
}
```

8. From the packages folder, install `Bulma`
> yarn add- W bulma
9. Create .env file insde of React pr oject root and add this:
> SKIP_PREFLIGHT_CHECK=true
10. Modify `package.json` of every project of the mono-repo like this:
> name: @project-name/vue-app-name
> name: @project-name/react-app-name
> name: @project-name/angular-app-name