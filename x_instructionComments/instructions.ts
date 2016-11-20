/*
npm commands:
    npm install babel --save-dev
    npm install babel-cli --save-dev
    npm install babel-core --save-dev
    npm install babel-loader --save-dev 
    npm install babel-preset-es2015 --save-dev
    npm install commonjs --save-dev 
    npm install typescript --save-dev
    npm install typescript -g               (needed for tsc command)  
    npm install rimraf
    npm install tslint --save-dev
    npm install webpack --save-dev  
    npm install uglifyjs --save-dev




package.json - scripts:

    1 npm run build:
        prebuild
            npm run tslint
                uses tslint to lint the app/greeter.ts file. If any errors found, it will terminate

            npm run rimraf
                deletes all files in app/js (ts to js), app/build (ES6 to ES5) and app/dist (bundled and minified)

        build
            tsc 
                - runs the typescript compiler
                - takes the files in the tsconfig.json, transpiles into js, and places them in the app/js folder

            npm run babel 
                - runs the babel compiler used for es2015 syntax (import export). 
                - This takes all the js transpiled files in the app/js folder and 
                  transpiles it into ECMAScript2015 code. This puts ES6 code into the app/build folder

        postbuild
            npm run bundle
                - uses the webpack.config.js file for the config settings
                - uses index.js file as an entry point.
                - because index.js file has many dependencies it bundles these altogether 
                - dependencies include the es5 js files which have been transpiled: (ts to js, jsES6 to jsES5) and stored in the app/build
                - this means all dependencies for the index.js file and the index.js file itself are bundled into one clean file
                - it spits the file into the output: path: /app/dist, file: bundle.js
            
            npm run uglifyjs
                - minifies the file in the app/dist/bundle.js
                - uses the -m (mangle) and -c (compress)
                - finally -o outputs it to creates a new min.js file

    2 npm run start
        this finds the app/dist/min.js file in the app/dist directory. 
        It then uses the node command to run the file




To make the app run
    npm run build
    npm run start



typescript:
    .vscode/tasks.json
        settings for the ts compiler eg:
        to run the typescript compiler use the command: tsc. This is specified in the command attribute

    tsconfig.json
        Once tasks.json is set up, we use the tsconfig.json file to add settings for the tsc command
        This includes:
            ECMAScript version
            outDir specifies where to put the transpiled js code - in the app/js folder
            module loader = commonjs
            specifies a js sourceMap
            all the files that the compiler should transpile
    
    tslint.json
        config file for tslint. To create this file, need to run the command:
            npm run tslintInitial
        "tslintInitial": "tslint --init" only ever needs to be run once to create a tslint.json file
        This sets all the default settings
    
    webpack.config.js
        this is the configuration file for webpack.
        specifies the entry (index.js). This index.js at the top of the file explicitly says where to import it's dependencies
        in this case, they are the es5 files in the build directory.
        specifies where to put the output bundle.js file - app/dist/bundle.js
        specifies the babel module loader that is used
            the presets is very important for the babel to work. without this, we would have to have a require statement in our entry point:
            require('babel-register')({ "presets": ["es2015"]}); and have a npm install babel-register --save-dev







//todo - less, bower, angular2, typings









add a .gitignore to the root directory
    go to: https://www.gitignore.io/
    type in node and generate
    this generates a .gitignore file for you...
    copy and paste this into the .gitignore file in your root directory.
    this ignores stuff like node_modules folder which is useless...


go to github and sign in.
create a new repository.

Run these commands:
    git init
    git status (notice everything in red)
    git add --all
    git status (notice everything in green)
    git commit -m "description"
    git status (notice now says nothing to commit - your code is safe)
    (the next step depends on the generated url)
    git remote add origin https://github.com/lbelfield/typescript.git
    git push -u origin master



*/