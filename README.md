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
> yarn add -W bulma

9. Create .env file insde of React project root and add this:
> SKIP_PREFLIGHT_CHECK=true

10. Modify `package.json` of every project of the mono-repo like `@project-name/app-name` :
> "name": "@example/vue-tabs"

> "name": "@example/react-tabs"

> "name": "@example/angular-tabs"

### For further reading:

#### Vue

1. https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/
2. https://vuejs.org/v2/guide/comparison.html
3. https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
4. https://medium.com/binarcode/understanding-scoped-slots-in-vue-js-db5315a42391
5. https://dev.to/alexmourer/sharing-data-between-components-invuejs-48me
4. https://frontendmasters.com/courses/vue/ (a course)

#### Angular

1. https://angular.io/guide/inputs-outputs
2. https://ultimatecourses.com/blog/angular-decorators
3. https://blog.angular-university.io/angular-ng-template-ng-container-ngtemplateoutlet/
4. https://ultimatecourses.com/blog/angular-dependency-injection
5. https://www.pluralsight.com/courses/angular-fundamentals  (a course)

#### React

1. https://reactjs.org/docs/hooks-intro.html
2. https://reactjs.org/docs/hooks-reference.html
3. https://reactjs.org/docs/introducing-jsx.html
4. https://dev.to/yazanaabed/five-ways-to-advanced-react-patterns-2bai
5. https://frontendmasters.com/courses/complete-react-v5/ (a course)
