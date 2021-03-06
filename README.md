# CoreMvcWebpack
April 2017

Simplest possible .NET Core app with MVC, Bootstrap, jQuery, Webpack, and TypeScript debugging. HMR (Hot Module Replacement) enabled in Webpack.

Features:
* F5 debugging of server code
* Auto refresh of TypeScript files (while running project, saving changes to TS files auto-updates the connected browser)
* TS sourcemapping. That is, adding 'debugger' to TS files correctly triggers TS files in browser F12 dev tools.
* TS definition files for VS Intellisense of jQuery.
* Vendor and app JS code split into two files: vendor.js and app.js. Changes to app.ts do not trigger downloading of vendor.js, improving HMR performance.
* Vendor CSS outputed to vendor.css. App CSS uses styles.less, which is sent to browser for enhanced development experience.
* Changes to styles.less appear in browser after F5 refresh.

What it doesn't do:
* No auto refresh (HMR) of cshtml or LESS pages. Must hit F5 in browser to see changes.
* TS breakpoints in VS will not be honored. Must debug using browser dev tools.
* Produces dev versions only of client assets. No minified JS or LESS-compiled CSS.
* No publishing functionality.

Notes:
* TS compiling done solely through webpack. Native compiling disabled by adding &lt;TypeScriptCompileBlocked&gt;true&lt;/TypeScriptCompileBlocked&gt; to csproj file and specifying an emtpy tsconfig.json file.
