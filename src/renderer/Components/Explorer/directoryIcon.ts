/* eslint-disable global-require */
/* eslint-disable prettier/prettier */
export interface IconDefinitionsSubObj {
  iconPath: any;
}
export interface IconDefinitions {
  [key: string]: IconDefinitionsSubObj;
}
export interface DirectoryIcon {
  iconDefinitions: IconDefinitions;
  folderNames: { [key: string]: string };
  folderNamesExpanded: { [key: string]: string };
  fileExtensions: { [key: string]: string};
  fileNames: { [key: string]: string };
  languageIds: { [key: string]: string };
  light: {
    fileExtensions: { [key: string]: string },
    fileNames: { [key: string]: string },
    folderNames: { [key: string]: string },
    folderNamesExpanded: { [key: string]: string },
  };
  options: { [key: string]: string | object | boolean | number };
  file: string;
  hidesExplorerArrows: boolean;
  folder: string;
  folderExpanded: string;
  rootFolder: string;
  rootFolderExpanded: string;
}
const data: DirectoryIcon = {
  "iconDefinitions": {
    "git": {
      "iconPath": require('../../../../assets/directoryIcon/icons/git.svg')
    },
    "c": {
      "iconPath": require('../../../../assets/directoryIcon/icons/c.svg')
    },
    "yaml": {
      "iconPath": require('../../../../assets/directoryIcon/icons/yaml.svg')
    },
    "xml": {
      "iconPath": require('../../../../assets/directoryIcon/icons/xml.svg')
    },
    "matlab": {
      "iconPath": require('../../../../assets/directoryIcon/icons/matlab.svg')
    },
    "settings": {
      "iconPath": require('../../../../assets/directoryIcon/icons/settings.svg')
    },
    "shaderlab": {
      "iconPath": require('../../../../assets/directoryIcon/icons/shaderlab.svg')
    },
    "diff": {
      "iconPath": require('../../../../assets/directoryIcon/icons/diff.svg')
    },
    "json": {
      "iconPath": require('../../../../assets/directoryIcon/icons/json.svg')
    },
    "blink": {
      "iconPath": require('../../../../assets/directoryIcon/icons/blink.svg')
    },
    "java": {
      "iconPath": require('../../../../assets/directoryIcon/icons/java.svg')
    },
    "razor": {
      "iconPath": require('../../../../assets/directoryIcon/icons/razor.svg')
    },
    "python": {
      "iconPath": require('../../../../assets/directoryIcon/icons/python.svg')
    },
    "javascript": {
      "iconPath": require('../../../../assets/directoryIcon/icons/javascript.svg')
    },
    "typescript": {
      "iconPath": require('../../../../assets/directoryIcon/icons/typescript.svg')
    },
    "scala": {
      "iconPath": require('../../../../assets/directoryIcon/icons/scala.svg')
    },
    "handlebars": {
      "iconPath": require('../../../../assets/directoryIcon/icons/handlebars.svg')
    },
    "perl": {
      "iconPath": require('../../../../assets/directoryIcon/icons/perl.svg')
    },
    "haxe": {
      "iconPath": require('../../../../assets/directoryIcon/icons/haxe.svg')
    },
    "puppet": {
      "iconPath": require('../../../../assets/directoryIcon/icons/puppet.svg')
    },
    "elixir": {
      "iconPath": require('../../../../assets/directoryIcon/icons/elixir.svg')
    },
    "livescript": {
      "iconPath": require('../../../../assets/directoryIcon/icons/livescript.svg')
    },
    "erlang": {
      "iconPath": require('../../../../assets/directoryIcon/icons/erlang.svg')
    },
    "twig": {
      "iconPath": require('../../../../assets/directoryIcon/icons/twig.svg')
    },
    "julia": {
      "iconPath": require('../../../../assets/directoryIcon/icons/julia.svg')
    },
    "elm": {
      "iconPath": require('../../../../assets/directoryIcon/icons/elm.svg')
    },
    "purescript": {
      "iconPath": require('../../../../assets/directoryIcon/icons/purescript.svg')
    },
    "stylus": {
      "iconPath": require('../../../../assets/directoryIcon/icons/stylus.svg')
    },
    "nunjucks": {
      "iconPath": require('../../../../assets/directoryIcon/icons/nunjucks.svg')
    },
    "pug": {
      "iconPath": require('../../../../assets/directoryIcon/icons/pug.svg')
    },
    "robot": {
      "iconPath": require('../../../../assets/directoryIcon/icons/robot.svg')
    },
    "sass": {
      "iconPath": require('../../../../assets/directoryIcon/icons/sass.svg')
    },
    "less": {
      "iconPath": require('../../../../assets/directoryIcon/icons/less.svg')
    },
    "css": {
      "iconPath": require('../../../../assets/directoryIcon/icons/css.svg')
    },
    "visualstudio": {
      "iconPath": require('../../../../assets/directoryIcon/icons/visualstudio.svg')
    },
    "angular": {
      "iconPath": require('../../../../assets/directoryIcon/icons/angular.svg')
    },
    "graphql": {
      "iconPath": require('../../../../assets/directoryIcon/icons/graphql.svg')
    },
    "solidity": {
      "iconPath": require('../../../../assets/directoryIcon/icons/solidity.svg')
    },
    "autoit": {
      "iconPath": require('../../../../assets/directoryIcon/icons/autoit.svg')
    },
    "haml": {
      "iconPath": require('../../../../assets/directoryIcon/icons/haml.svg')
    },
    "yang": {
      "iconPath": require('../../../../assets/directoryIcon/icons/yang.svg')
    },
    "terraform": {
      "iconPath": require('../../../../assets/directoryIcon/icons/terraform.svg')
    },
    "applescript": {
      "iconPath": require('../../../../assets/directoryIcon/icons/applescript.svg')
    },
    "cake": {
      "iconPath": require('../../../../assets/directoryIcon/icons/cake.svg')
    },
    "cucumber": {
      "iconPath": require('../../../../assets/directoryIcon/icons/cucumber.svg')
    },
    "nim": {
      "iconPath": require('../../../../assets/directoryIcon/icons/nim.svg')
    },
    "apiblueprint": {
      "iconPath": require('../../../../assets/directoryIcon/icons/apiblueprint.svg')
    },
    "riot": {
      "iconPath": require('../../../../assets/directoryIcon/icons/riot.svg')
    },
    "postcss": {
      "iconPath": require('../../../../assets/directoryIcon/icons/postcss.svg')
    },
    "coldfusion": {
      "iconPath": require('../../../../assets/directoryIcon/icons/coldfusion.svg')
    },
    "haskell": {
      "iconPath": require('../../../../assets/directoryIcon/icons/haskell.svg')
    },
    "dhall": {
      "iconPath": require('../../../../assets/directoryIcon/icons/dhall.svg')
    },
    "cabal": {
      "iconPath": require('../../../../assets/directoryIcon/icons/cabal.svg')
    },
    "nix": {
      "iconPath": require('../../../../assets/directoryIcon/icons/nix.svg')
    },
    "ruby": {
      "iconPath": require('../../../../assets/directoryIcon/icons/ruby.svg')
    },
    "slim": {
      "iconPath": require('../../../../assets/directoryIcon/icons/slim.svg')
    },
    "php": {
      "iconPath": require('../../../../assets/directoryIcon/icons/php.svg')
    },
    "php_elephant": {
      "iconPath": require('../../../../assets/directoryIcon/icons/php_elephant.svg')
    },
    "php_elephant_pink": {
      "iconPath": require('../../../../assets/directoryIcon/icons/php_elephant_pink.svg')
    },
    "hack": {
      "iconPath": require('../../../../assets/directoryIcon/icons/hack.svg')
    },
    "react": {
      "iconPath": require('../../../../assets/directoryIcon/icons/react.svg')
    },
    "mjml": {
      "iconPath": require('../../../../assets/directoryIcon/icons/mjml.svg')
    },
    "processing": {
      "iconPath": require('../../../../assets/directoryIcon/icons/processing.svg')
    },
    "hcl": {
      "iconPath": require('../../../../assets/directoryIcon/icons/hcl.svg')
    },
    "go": {
      "iconPath": require('../../../../assets/directoryIcon/icons/go.svg')
    },
    "go_gopher": {
      "iconPath": require('../../../../assets/directoryIcon/icons/go_gopher.svg')
    },
    "nodejs_alt": {
      "iconPath": require('../../../../assets/directoryIcon/icons/nodejs_alt.svg')
    },
    "django": {
      "iconPath": require('../../../../assets/directoryIcon/icons/django.svg')
    },
    "html": {
      "iconPath": require('../../../../assets/directoryIcon/icons/html.svg')
    },
    "godot": {
      "iconPath": require('../../../../assets/directoryIcon/icons/godot.svg')
    },
    "vim": {
      "iconPath": require('../../../../assets/directoryIcon/icons/vim.svg')
    },
    "silverstripe": {
      "iconPath": require('../../../../assets/directoryIcon/icons/silverstripe.svg')
    },
    "prolog": {
      "iconPath": require('../../../../assets/directoryIcon/icons/prolog.svg')
    },
    "pawn": {
      "iconPath": require('../../../../assets/directoryIcon/icons/pawn.svg')
    },
    "reason": {
      "iconPath": require('../../../../assets/directoryIcon/icons/reason.svg')
    },
    "sml": {
      "iconPath": require('../../../../assets/directoryIcon/icons/sml.svg')
    },
    "tex": {
      "iconPath": require('../../../../assets/directoryIcon/icons/tex.svg')
    },
    "salesforce": {
      "iconPath": require('../../../../assets/directoryIcon/icons/salesforce.svg')
    },
    "sas": {
      "iconPath": require('../../../../assets/directoryIcon/icons/sas.svg')
    },
    "docker": {
      "iconPath": require('../../../../assets/directoryIcon/icons/docker.svg')
    },
    "table": {
      "iconPath": require('../../../../assets/directoryIcon/icons/table.svg')
    },
    "csharp": {
      "iconPath": require('../../../../assets/directoryIcon/icons/csharp.svg')
    },
    "console": {
      "iconPath": require('../../../../assets/directoryIcon/icons/console.svg')
    },
    "cpp": {
      "iconPath": require('../../../../assets/directoryIcon/icons/cpp.svg')
    },
    "coffee": {
      "iconPath": require('../../../../assets/directoryIcon/icons/coffee.svg')
    },
    "fsharp": {
      "iconPath": require('../../../../assets/directoryIcon/icons/fsharp.svg')
    },
    "editorconfig": {
      "iconPath": require('../../../../assets/directoryIcon/icons/editorconfig.svg')
    },
    "clojure": {
      "iconPath": require('../../../../assets/directoryIcon/icons/clojure.svg')
    },
    "groovy": {
      "iconPath": require('../../../../assets/directoryIcon/icons/groovy.svg')
    },
    "markdown": {
      "iconPath": require('../../../../assets/directoryIcon/icons/markdown.svg')
    },
    "jinja": {
      "iconPath": require('../../../../assets/directoryIcon/icons/jinja.svg')
    },
    "proto": {
      "iconPath": require('../../../../assets/directoryIcon/icons/proto.svg')
    },
    "python-misc": {
      "iconPath": require('../../../../assets/directoryIcon/icons/python-misc.svg')
    },
    "vue": {
      "iconPath": require('../../../../assets/directoryIcon/icons/vue.svg')
    },
    "lua": {
      "iconPath": require('../../../../assets/directoryIcon/icons/lua.svg')
    },
    "lib": {
      "iconPath": require('../../../../assets/directoryIcon/icons/lib.svg')
    },
    "log": {
      "iconPath": require('../../../../assets/directoryIcon/icons/log.svg')
    },
    "jupyter": {
      "iconPath": require('../../../../assets/directoryIcon/icons/jupyter.svg')
    },
    "document": {
      "iconPath": require('../../../../assets/directoryIcon/icons/document.svg')
    },
    "pdf": {
      "iconPath": require('../../../../assets/directoryIcon/icons/pdf.svg')
    },
    "powershell": {
      "iconPath": require('../../../../assets/directoryIcon/icons/powershell.svg')
    },
    "r": {
      "iconPath": require('../../../../assets/directoryIcon/icons/r.svg')
    },
    "rust": {
      "iconPath": require('../../../../assets/directoryIcon/icons/rust.svg')
    },
    "database": {
      "iconPath": require('../../../../assets/directoryIcon/icons/database.svg')
    },
    "kusto": {
      "iconPath": require('../../../../assets/directoryIcon/icons/kusto.svg')
    },
    "lock": {
      "iconPath": require('../../../../assets/directoryIcon/icons/lock.svg')
    },
    "svg": {
      "iconPath": require('../../../../assets/directoryIcon/icons/svg.svg')
    },
    "swift": {
      "iconPath": require('../../../../assets/directoryIcon/icons/swift.svg')
    },
    "react_ts": {
      "iconPath": require('../../../../assets/directoryIcon/icons/react_ts.svg')
    },
    "search": {
      "iconPath": require('../../../../assets/directoryIcon/icons/search.svg')
    },
    "minecraft": {
      "iconPath": require('../../../../assets/directoryIcon/icons/minecraft.svg')
    },
    "rescript": {
      "iconPath": require('../../../../assets/directoryIcon/icons/rescript.svg')
    },
    "twine": {
      "iconPath": require('../../../../assets/directoryIcon/icons/twine.svg')
    },
    "grain": {
      "iconPath": require('../../../../assets/directoryIcon/icons/grain.svg')
    },
    "lolcode": {
      "iconPath": require('../../../../assets/directoryIcon/icons/lolcode.svg')
    },
    "idris": {
      "iconPath": require('../../../../assets/directoryIcon/icons/idris.svg')
    },
    "chess": {
      "iconPath": require('../../../../assets/directoryIcon/icons/chess.svg')
    },
    "gemini": {
      "iconPath": require('../../../../assets/directoryIcon/icons/gemini.svg')
    },
    "vlang": {
      "iconPath": require('../../../../assets/directoryIcon/icons/vlang.svg')
    },
    "wolframlanguage": {
      "iconPath": require('../../../../assets/directoryIcon/icons/wolframlanguage.svg')
    },
    "blink_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/blink_light.svg')
    },
    "jinja_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/jinja_light.svg')
    },
    "playwright": {
      "iconPath": require('../../../../assets/directoryIcon/icons/playwright.svg')
    },
    "sublime": {
      "iconPath": require('../../../../assets/directoryIcon/icons/sublime.svg')
    },
    "image": {
      "iconPath": require('../../../../assets/directoryIcon/icons/image.svg')
    },
    "routing": {
      "iconPath": require('../../../../assets/directoryIcon/icons/routing.svg')
    },
    "typescript-def": {
      "iconPath": require('../../../../assets/directoryIcon/icons/typescript-def.svg')
    },
    "markojs": {
      "iconPath": require('../../../../assets/directoryIcon/icons/markojs.svg')
    },
    "astro": {
      "iconPath": require('../../../../assets/directoryIcon/icons/astro.svg')
    },
    "vscode": {
      "iconPath": require('../../../../assets/directoryIcon/icons/vscode.svg')
    },
    "qsharp": {
      "iconPath": require('../../../../assets/directoryIcon/icons/qsharp.svg')
    },
    "zip": {
      "iconPath": require('../../../../assets/directoryIcon/icons/zip.svg')
    },
    "vala": {
      "iconPath": require('../../../../assets/directoryIcon/icons/vala.svg')
    },
    "zig": {
      "iconPath": require('../../../../assets/directoryIcon/icons/zig.svg')
    },
    "exe": {
      "iconPath": require('../../../../assets/directoryIcon/icons/exe.svg')
    },
    "hex": {
      "iconPath": require('../../../../assets/directoryIcon/icons/hex.svg')
    },
    "jar": {
      "iconPath": require('../../../../assets/directoryIcon/icons/jar.svg')
    },
    "javaclass": {
      "iconPath": require('../../../../assets/directoryIcon/icons/javaclass.svg')
    },
    "h": {
      "iconPath": require('../../../../assets/directoryIcon/icons/h.svg')
    },
    "hpp": {
      "iconPath": require('../../../../assets/directoryIcon/icons/hpp.svg')
    },
    "go-mod": {
      "iconPath": require('../../../../assets/directoryIcon/icons/go-mod.svg')
    },
    "url": {
      "iconPath": require('../../../../assets/directoryIcon/icons/url.svg')
    },
    "gradle": {
      "iconPath": require('../../../../assets/directoryIcon/icons/gradle.svg')
    },
    "word": {
      "iconPath": require('../../../../assets/directoryIcon/icons/word.svg')
    },
    "certificate": {
      "iconPath": require('../../../../assets/directoryIcon/icons/certificate.svg')
    },
    "key": {
      "iconPath": require('../../../../assets/directoryIcon/icons/key.svg')
    },
    "font": {
      "iconPath": require('../../../../assets/directoryIcon/icons/font.svg')
    },
    "gemfile": {
      "iconPath": require('../../../../assets/directoryIcon/icons/gemfile.svg')
    },
    "rubocop": {
      "iconPath": require('../../../../assets/directoryIcon/icons/rubocop.svg')
    },
    "rubocop_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/rubocop_light.svg')
    },
    "arduino": {
      "iconPath": require('../../../../assets/directoryIcon/icons/arduino.svg')
    },
    "powerpoint": {
      "iconPath": require('../../../../assets/directoryIcon/icons/powerpoint.svg')
    },
    "video": {
      "iconPath": require('../../../../assets/directoryIcon/icons/video.svg')
    },
    "virtual": {
      "iconPath": require('../../../../assets/directoryIcon/icons/virtual.svg')
    },
    "email": {
      "iconPath": require('../../../../assets/directoryIcon/icons/email.svg')
    },
    "audio": {
      "iconPath": require('../../../../assets/directoryIcon/icons/audio.svg')
    },
    "raml": {
      "iconPath": require('../../../../assets/directoryIcon/icons/raml.svg')
    },
    "xaml": {
      "iconPath": require('../../../../assets/directoryIcon/icons/xaml.svg')
    },
    "kotlin": {
      "iconPath": require('../../../../assets/directoryIcon/icons/kotlin.svg')
    },
    "dart": {
      "iconPath": require('../../../../assets/directoryIcon/icons/dart.svg')
    },
    "actionscript": {
      "iconPath": require('../../../../assets/directoryIcon/icons/actionscript.svg')
    },
    "mxml": {
      "iconPath": require('../../../../assets/directoryIcon/icons/mxml.svg')
    },
    "autohotkey": {
      "iconPath": require('../../../../assets/directoryIcon/icons/autohotkey.svg')
    },
    "flash": {
      "iconPath": require('../../../../assets/directoryIcon/icons/flash.svg')
    },
    "swc": {
      "iconPath": require('../../../../assets/directoryIcon/icons/swc.svg')
    },
    "cmake": {
      "iconPath": require('../../../../assets/directoryIcon/icons/cmake.svg')
    },
    "assembly": {
      "iconPath": require('../../../../assets/directoryIcon/icons/assembly.svg')
    },
    "vue-config": {
      "iconPath": require('../../../../assets/directoryIcon/icons/vue-config.svg')
    },
    "nuxt": {
      "iconPath": require('../../../../assets/directoryIcon/icons/nuxt.svg')
    },
    "nuxt_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/nuxt_light.svg')
    },
    "ocaml": {
      "iconPath": require('../../../../assets/directoryIcon/icons/ocaml.svg')
    },
    "odin": {
      "iconPath": require('../../../../assets/directoryIcon/icons/odin.svg')
    },
    "javascript-map": {
      "iconPath": require('../../../../assets/directoryIcon/icons/javascript-map.svg')
    },
    "css-map": {
      "iconPath": require('../../../../assets/directoryIcon/icons/css-map.svg')
    },
    "test-ts": {
      "iconPath": require('../../../../assets/directoryIcon/icons/test-ts.svg')
    },
    "test-jsx": {
      "iconPath": require('../../../../assets/directoryIcon/icons/test-jsx.svg')
    },
    "test-js": {
      "iconPath": require('../../../../assets/directoryIcon/icons/test-js.svg')
    },
    "angular-component": {
      "iconPath": require('../../../../assets/directoryIcon/icons/angular-component.svg')
    },
    "angular-guard": {
      "iconPath": require('../../../../assets/directoryIcon/icons/angular-guard.svg')
    },
    "angular-service": {
      "iconPath": require('../../../../assets/directoryIcon/icons/angular-service.svg')
    },
    "angular-pipe": {
      "iconPath": require('../../../../assets/directoryIcon/icons/angular-pipe.svg')
    },
    "angular-directive": {
      "iconPath": require('../../../../assets/directoryIcon/icons/angular-directive.svg')
    },
    "angular-resolver": {
      "iconPath": require('../../../../assets/directoryIcon/icons/angular-resolver.svg')
    },
    "smarty": {
      "iconPath": require('../../../../assets/directoryIcon/icons/smarty.svg')
    },
    "bucklescript": {
      "iconPath": require('../../../../assets/directoryIcon/icons/bucklescript.svg')
    },
    "merlin": {
      "iconPath": require('../../../../assets/directoryIcon/icons/merlin.svg')
    },
    "verilog": {
      "iconPath": require('../../../../assets/directoryIcon/icons/verilog.svg')
    },
    "mathematica": {
      "iconPath": require('../../../../assets/directoryIcon/icons/mathematica.svg')
    },
    "vercel": {
      "iconPath": require('../../../../assets/directoryIcon/icons/vercel.svg')
    },
    "vercel_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/vercel_light.svg')
    },
    "next": {
      "iconPath": require('../../../../assets/directoryIcon/icons/next.svg')
    },
    "next_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/next_light.svg')
    },
    "remix": {
      "iconPath": require('../../../../assets/directoryIcon/icons/remix.svg')
    },
    "remix_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/remix_light.svg')
    },
    "laravel": {
      "iconPath": require('../../../../assets/directoryIcon/icons/laravel.svg')
    },
    "vfl": {
      "iconPath": require('../../../../assets/directoryIcon/icons/vfl.svg')
    },
    "kl": {
      "iconPath": require('../../../../assets/directoryIcon/icons/kl.svg')
    },
    "posthtml": {
      "iconPath": require('../../../../assets/directoryIcon/icons/posthtml.svg')
    },
    "todo": {
      "iconPath": require('../../../../assets/directoryIcon/icons/todo.svg')
    },
    "http": {
      "iconPath": require('../../../../assets/directoryIcon/icons/http.svg')
    },
    "restql": {
      "iconPath": require('../../../../assets/directoryIcon/icons/restql.svg')
    },
    "kivy": {
      "iconPath": require('../../../../assets/directoryIcon/icons/kivy.svg')
    },
    "graphcool": {
      "iconPath": require('../../../../assets/directoryIcon/icons/graphcool.svg')
    },
    "sbt": {
      "iconPath": require('../../../../assets/directoryIcon/icons/sbt.svg')
    },
    "webpack": {
      "iconPath": require('../../../../assets/directoryIcon/icons/webpack.svg')
    },
    "ionic": {
      "iconPath": require('../../../../assets/directoryIcon/icons/ionic.svg')
    },
    "gulp": {
      "iconPath": require('../../../../assets/directoryIcon/icons/gulp.svg')
    },
    "nodejs": {
      "iconPath": require('../../../../assets/directoryIcon/icons/nodejs.svg')
    },
    "npm": {
      "iconPath": require('../../../../assets/directoryIcon/icons/npm.svg')
    },
    "yarn": {
      "iconPath": require('../../../../assets/directoryIcon/icons/yarn.svg')
    },
    "android": {
      "iconPath": require('../../../../assets/directoryIcon/icons/android.svg')
    },
    "tune": {
      "iconPath": require('../../../../assets/directoryIcon/icons/tune.svg')
    },
    "babel": {
      "iconPath": require('../../../../assets/directoryIcon/icons/babel.svg')
    },
    "blitz": {
      "iconPath": require('../../../../assets/directoryIcon/icons/blitz.svg')
    },
    "contributing": {
      "iconPath": require('../../../../assets/directoryIcon/icons/contributing.svg')
    },
    "readme": {
      "iconPath": require('../../../../assets/directoryIcon/icons/readme.svg')
    },
    "changelog": {
      "iconPath": require('../../../../assets/directoryIcon/icons/changelog.svg')
    },
    "credits": {
      "iconPath": require('../../../../assets/directoryIcon/icons/credits.svg')
    },
    "authors": {
      "iconPath": require('../../../../assets/directoryIcon/icons/authors.svg')
    },
    "flow": {
      "iconPath": require('../../../../assets/directoryIcon/icons/flow.svg')
    },
    "favicon": {
      "iconPath": require('../../../../assets/directoryIcon/icons/favicon.svg')
    },
    "karma": {
      "iconPath": require('../../../../assets/directoryIcon/icons/karma.svg')
    },
    "bithound": {
      "iconPath": require('../../../../assets/directoryIcon/icons/bithound.svg')
    },
    "svgo": {
      "iconPath": require('../../../../assets/directoryIcon/icons/svgo.svg')
    },
    "appveyor": {
      "iconPath": require('../../../../assets/directoryIcon/icons/appveyor.svg')
    },
    "travis": {
      "iconPath": require('../../../../assets/directoryIcon/icons/travis.svg')
    },
    "codecov": {
      "iconPath": require('../../../../assets/directoryIcon/icons/codecov.svg')
    },
    "protractor": {
      "iconPath": require('../../../../assets/directoryIcon/icons/protractor.svg')
    },
    "fusebox": {
      "iconPath": require('../../../../assets/directoryIcon/icons/fusebox.svg')
    },
    "heroku": {
      "iconPath": require('../../../../assets/directoryIcon/icons/heroku.svg')
    },
    "gitlab": {
      "iconPath": require('../../../../assets/directoryIcon/icons/gitlab.svg')
    },
    "bower": {
      "iconPath": require('../../../../assets/directoryIcon/icons/bower.svg')
    },
    "eslint": {
      "iconPath": require('../../../../assets/directoryIcon/icons/eslint.svg')
    },
    "conduct": {
      "iconPath": require('../../../../assets/directoryIcon/icons/conduct.svg')
    },
    "watchman": {
      "iconPath": require('../../../../assets/directoryIcon/icons/watchman.svg')
    },
    "aurelia": {
      "iconPath": require('../../../../assets/directoryIcon/icons/aurelia.svg')
    },
    "mocha": {
      "iconPath": require('../../../../assets/directoryIcon/icons/mocha.svg')
    },
    "jenkins": {
      "iconPath": require('../../../../assets/directoryIcon/icons/jenkins.svg')
    },
    "firebase": {
      "iconPath": require('../../../../assets/directoryIcon/icons/firebase.svg')
    },
    "figma": {
      "iconPath": require('../../../../assets/directoryIcon/icons/figma.svg')
    },
    "rollup": {
      "iconPath": require('../../../../assets/directoryIcon/icons/rollup.svg')
    },
    "hardhat": {
      "iconPath": require('../../../../assets/directoryIcon/icons/hardhat.svg')
    },
    "stylelint": {
      "iconPath": require('../../../../assets/directoryIcon/icons/stylelint.svg')
    },
    "stylelint_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/stylelint_light.svg')
    },
    "code-climate": {
      "iconPath": require('../../../../assets/directoryIcon/icons/code-climate.svg')
    },
    "code-climate_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/code-climate_light.svg')
    },
    "prettier": {
      "iconPath": require('../../../../assets/directoryIcon/icons/prettier.svg')
    },
    "renovate": {
      "iconPath": require('../../../../assets/directoryIcon/icons/renovate.svg')
    },
    "apollo": {
      "iconPath": require('../../../../assets/directoryIcon/icons/apollo.svg')
    },
    "nodemon": {
      "iconPath": require('../../../../assets/directoryIcon/icons/nodemon.svg')
    },
    "webhint": {
      "iconPath": require('../../../../assets/directoryIcon/icons/webhint.svg')
    },
    "browserlist": {
      "iconPath": require('../../../../assets/directoryIcon/icons/browserlist.svg')
    },
    "browserlist_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/browserlist_light.svg')
    },
    "crystal": {
      "iconPath": require('../../../../assets/directoryIcon/icons/crystal.svg')
    },
    "crystal_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/crystal_light.svg')
    },
    "snyk": {
      "iconPath": require('../../../../assets/directoryIcon/icons/snyk.svg')
    },
    "drone": {
      "iconPath": require('../../../../assets/directoryIcon/icons/drone.svg')
    },
    "drone_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/drone_light.svg')
    },
    "cuda": {
      "iconPath": require('../../../../assets/directoryIcon/icons/cuda.svg')
    },
    "dotjs": {
      "iconPath": require('../../../../assets/directoryIcon/icons/dotjs.svg')
    },
    "ejs": {
      "iconPath": require('../../../../assets/directoryIcon/icons/ejs.svg')
    },
    "sequelize": {
      "iconPath": require('../../../../assets/directoryIcon/icons/sequelize.svg')
    },
    "gatsby": {
      "iconPath": require('../../../../assets/directoryIcon/icons/gatsby.svg')
    },
    "wakatime": {
      "iconPath": require('../../../../assets/directoryIcon/icons/wakatime.svg')
    },
    "wakatime_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/wakatime_light.svg')
    },
    "circleci": {
      "iconPath": require('../../../../assets/directoryIcon/icons/circleci.svg')
    },
    "circleci_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/circleci_light.svg')
    },
    "cloudfoundry": {
      "iconPath": require('../../../../assets/directoryIcon/icons/cloudfoundry.svg')
    },
    "grunt": {
      "iconPath": require('../../../../assets/directoryIcon/icons/grunt.svg')
    },
    "jest": {
      "iconPath": require('../../../../assets/directoryIcon/icons/jest.svg')
    },
    "storybook": {
      "iconPath": require('../../../../assets/directoryIcon/icons/storybook.svg')
    },
    "wepy": {
      "iconPath": require('../../../../assets/directoryIcon/icons/wepy.svg')
    },
    "fastlane": {
      "iconPath": require('../../../../assets/directoryIcon/icons/fastlane.svg')
    },
    "hcl_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/hcl_light.svg')
    },
    "helm": {
      "iconPath": require('../../../../assets/directoryIcon/icons/helm.svg')
    },
    "san": {
      "iconPath": require('../../../../assets/directoryIcon/icons/san.svg')
    },
    "wallaby": {
      "iconPath": require('../../../../assets/directoryIcon/icons/wallaby.svg')
    },
    "stencil": {
      "iconPath": require('../../../../assets/directoryIcon/icons/stencil.svg')
    },
    "red": {
      "iconPath": require('../../../../assets/directoryIcon/icons/red.svg')
    },
    "makefile": {
      "iconPath": require('../../../../assets/directoryIcon/icons/makefile.svg')
    },
    "foxpro": {
      "iconPath": require('../../../../assets/directoryIcon/icons/foxpro.svg')
    },
    "i18n": {
      "iconPath": require('../../../../assets/directoryIcon/icons/i18n.svg')
    },
    "webassembly": {
      "iconPath": require('../../../../assets/directoryIcon/icons/webassembly.svg')
    },
    "semantic-release": {
      "iconPath": require('../../../../assets/directoryIcon/icons/semantic-release.svg')
    },
    "semantic-release_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/semantic-release_light.svg')
    },
    "bitbucket": {
      "iconPath": require('../../../../assets/directoryIcon/icons/bitbucket.svg')
    },
    "d": {
      "iconPath": require('../../../../assets/directoryIcon/icons/d.svg')
    },
    "mdx": {
      "iconPath": require('../../../../assets/directoryIcon/icons/mdx.svg')
    },
    "ballerina": {
      "iconPath": require('../../../../assets/directoryIcon/icons/ballerina.svg')
    },
    "racket": {
      "iconPath": require('../../../../assets/directoryIcon/icons/racket.svg')
    },
    "bazel": {
      "iconPath": require('../../../../assets/directoryIcon/icons/bazel.svg')
    },
    "mint": {
      "iconPath": require('../../../../assets/directoryIcon/icons/mint.svg')
    },
    "velocity": {
      "iconPath": require('../../../../assets/directoryIcon/icons/velocity.svg')
    },
    "godot-assets": {
      "iconPath": require('../../../../assets/directoryIcon/icons/godot-assets.svg')
    },
    "azure-pipelines": {
      "iconPath": require('../../../../assets/directoryIcon/icons/azure-pipelines.svg')
    },
    "azure": {
      "iconPath": require('../../../../assets/directoryIcon/icons/azure.svg')
    },
    "vagrant": {
      "iconPath": require('../../../../assets/directoryIcon/icons/vagrant.svg')
    },
    "prisma": {
      "iconPath": require('../../../../assets/directoryIcon/icons/prisma.svg')
    },
    "abc": {
      "iconPath": require('../../../../assets/directoryIcon/icons/abc.svg')
    },
    "asciidoc": {
      "iconPath": require('../../../../assets/directoryIcon/icons/asciidoc.svg')
    },
    "istanbul": {
      "iconPath": require('../../../../assets/directoryIcon/icons/istanbul.svg')
    },
    "edge": {
      "iconPath": require('../../../../assets/directoryIcon/icons/edge.svg')
    },
    "scheme": {
      "iconPath": require('../../../../assets/directoryIcon/icons/scheme.svg')
    },
    "lisp": {
      "iconPath": require('../../../../assets/directoryIcon/icons/lisp.svg')
    },
    "tailwindcss": {
      "iconPath": require('../../../../assets/directoryIcon/icons/tailwindcss.svg')
    },
    "3d": {
      "iconPath": require('../../../../assets/directoryIcon/icons/3d.svg')
    },
    "buildkite": {
      "iconPath": require('../../../../assets/directoryIcon/icons/buildkite.svg')
    },
    "netlify": {
      "iconPath": require('../../../../assets/directoryIcon/icons/netlify.svg')
    },
    "svelte": {
      "iconPath": require('../../../../assets/directoryIcon/icons/svelte.svg')
    },
    "nest": {
      "iconPath": require('../../../../assets/directoryIcon/icons/nest.svg')
    },
    "moonscript": {
      "iconPath": require('../../../../assets/directoryIcon/icons/moonscript.svg')
    },
    "percy": {
      "iconPath": require('../../../../assets/directoryIcon/icons/percy.svg')
    },
    "gitpod": {
      "iconPath": require('../../../../assets/directoryIcon/icons/gitpod.svg')
    },
    "advpl_prw": {
      "iconPath": require('../../../../assets/directoryIcon/icons/advpl_prw.svg')
    },
    "advpl_ptm": {
      "iconPath": require('../../../../assets/directoryIcon/icons/advpl_ptm.svg')
    },
    "advpl_tlpp": {
      "iconPath": require('../../../../assets/directoryIcon/icons/advpl_tlpp.svg')
    },
    "advpl_include": {
      "iconPath": require('../../../../assets/directoryIcon/icons/advpl_include.svg')
    },
    "codeowners": {
      "iconPath": require('../../../../assets/directoryIcon/icons/codeowners.svg')
    },
    "gcp": {
      "iconPath": require('../../../../assets/directoryIcon/icons/gcp.svg')
    },
    "disc": {
      "iconPath": require('../../../../assets/directoryIcon/icons/disc.svg')
    },
    "fortran": {
      "iconPath": require('../../../../assets/directoryIcon/icons/fortran.svg')
    },
    "tcl": {
      "iconPath": require('../../../../assets/directoryIcon/icons/tcl.svg')
    },
    "liquid": {
      "iconPath": require('../../../../assets/directoryIcon/icons/liquid.svg')
    },
    "husky": {
      "iconPath": require('../../../../assets/directoryIcon/icons/husky.svg')
    },
    "coconut": {
      "iconPath": require('../../../../assets/directoryIcon/icons/coconut.svg')
    },
    "tilt": {
      "iconPath": require('../../../../assets/directoryIcon/icons/tilt.svg')
    },
    "capacitor": {
      "iconPath": require('../../../../assets/directoryIcon/icons/capacitor.svg')
    },
    "sketch": {
      "iconPath": require('../../../../assets/directoryIcon/icons/sketch.svg')
    },
    "adonis": {
      "iconPath": require('../../../../assets/directoryIcon/icons/adonis.svg')
    },
    "forth": {
      "iconPath": require('../../../../assets/directoryIcon/icons/forth.svg')
    },
    "uml": {
      "iconPath": require('../../../../assets/directoryIcon/icons/uml.svg')
    },
    "uml_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/uml_light.svg')
    },
    "meson": {
      "iconPath": require('../../../../assets/directoryIcon/icons/meson.svg')
    },
    "commitlint": {
      "iconPath": require('../../../../assets/directoryIcon/icons/commitlint.svg')
    },
    "buck": {
      "iconPath": require('../../../../assets/directoryIcon/icons/buck.svg')
    },
    "nrwl": {
      "iconPath": require('../../../../assets/directoryIcon/icons/nrwl.svg')
    },
    "opam": {
      "iconPath": require('../../../../assets/directoryIcon/icons/opam.svg')
    },
    "dune": {
      "iconPath": require('../../../../assets/directoryIcon/icons/dune.svg')
    },
    "imba": {
      "iconPath": require('../../../../assets/directoryIcon/icons/imba.svg')
    },
    "drawio": {
      "iconPath": require('../../../../assets/directoryIcon/icons/drawio.svg')
    },
    "pascal": {
      "iconPath": require('../../../../assets/directoryIcon/icons/pascal.svg')
    },
    "roadmap": {
      "iconPath": require('../../../../assets/directoryIcon/icons/roadmap.svg')
    },
    "nuget": {
      "iconPath": require('../../../../assets/directoryIcon/icons/nuget.svg')
    },
    "command": {
      "iconPath": require('../../../../assets/directoryIcon/icons/command.svg')
    },
    "stryker": {
      "iconPath": require('../../../../assets/directoryIcon/icons/stryker.svg')
    },
    "denizenscript": {
      "iconPath": require('../../../../assets/directoryIcon/icons/denizenscript.svg')
    },
    "modernizr": {
      "iconPath": require('../../../../assets/directoryIcon/icons/modernizr.svg')
    },
    "slug": {
      "iconPath": require('../../../../assets/directoryIcon/icons/slug.svg')
    },
    "stitches": {
      "iconPath": require('../../../../assets/directoryIcon/icons/stitches.svg')
    },
    "stitches_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/stitches_light.svg')
    },
    "nginx": {
      "iconPath": require('../../../../assets/directoryIcon/icons/nginx.svg')
    },
    "replit": {
      "iconPath": require('../../../../assets/directoryIcon/icons/replit.svg')
    },
    "snowpack": {
      "iconPath": require('../../../../assets/directoryIcon/icons/snowpack.svg')
    },
    "snowpack_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/snowpack_light.svg')
    },
    "brainfuck": {
      "iconPath": require('../../../../assets/directoryIcon/icons/brainfuck.svg')
    },
    "bicep": {
      "iconPath": require('../../../../assets/directoryIcon/icons/bicep.svg')
    },
    "cobol": {
      "iconPath": require('../../../../assets/directoryIcon/icons/cobol.svg')
    },
    "quasar": {
      "iconPath": require('../../../../assets/directoryIcon/icons/quasar.svg')
    },
    "dependabot": {
      "iconPath": require('../../../../assets/directoryIcon/icons/dependabot.svg')
    },
    "pipeline": {
      "iconPath": require('../../../../assets/directoryIcon/icons/pipeline.svg')
    },
    "vite": {
      "iconPath": require('../../../../assets/directoryIcon/icons/vite.svg')
    },
    "opa": {
      "iconPath": require('../../../../assets/directoryIcon/icons/opa.svg')
    },
    "lerna": {
      "iconPath": require('../../../../assets/directoryIcon/icons/lerna.svg')
    },
    "windicss": {
      "iconPath": require('../../../../assets/directoryIcon/icons/windicss.svg')
    },
    "textlint": {
      "iconPath": require('../../../../assets/directoryIcon/icons/textlint.svg')
    },
    "lilypond": {
      "iconPath": require('../../../../assets/directoryIcon/icons/lilypond.svg')
    },
    "chess_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/chess_light.svg')
    },
    "sentry": {
      "iconPath": require('../../../../assets/directoryIcon/icons/sentry.svg')
    },
    "phpunit": {
      "iconPath": require('../../../../assets/directoryIcon/icons/phpunit.svg')
    },
    "php-cs-fixer": {
      "iconPath": require('../../../../assets/directoryIcon/icons/php-cs-fixer.svg')
    },
    "robots": {
      "iconPath": require('../../../../assets/directoryIcon/icons/robots.svg')
    },
    "tsconfig": {
      "iconPath": require('../../../../assets/directoryIcon/icons/tsconfig.svg')
    },
    "tauri": {
      "iconPath": require('../../../../assets/directoryIcon/icons/tauri.svg')
    },
    "jsconfig": {
      "iconPath": require('../../../../assets/directoryIcon/icons/jsconfig.svg')
    },
    "maven": {
      "iconPath": require('../../../../assets/directoryIcon/icons/maven.svg')
    },
    "ada": {
      "iconPath": require('../../../../assets/directoryIcon/icons/ada.svg')
    },
    "serverless": {
      "iconPath": require('../../../../assets/directoryIcon/icons/serverless.svg')
    },
    "ember": {
      "iconPath": require('../../../../assets/directoryIcon/icons/ember.svg')
    },
    "horusec": {
      "iconPath": require('../../../../assets/directoryIcon/icons/horusec.svg')
    },
    "coala": {
      "iconPath": require('../../../../assets/directoryIcon/icons/coala.svg')
    },
    "parcel": {
      "iconPath": require('../../../../assets/directoryIcon/icons/parcel.svg')
    },
    "dinophp": {
      "iconPath": require('../../../../assets/directoryIcon/icons/dinophp.svg')
    },
    "teal": {
      "iconPath": require('../../../../assets/directoryIcon/icons/teal.svg')
    },
    "template": {
      "iconPath": require('../../../../assets/directoryIcon/icons/template.svg')
    },
    "astyle": {
      "iconPath": require('../../../../assets/directoryIcon/icons/astyle.svg')
    },
    "lighthouse": {
      "iconPath": require('../../../../assets/directoryIcon/icons/lighthouse.svg')
    },
    "svgr": {
      "iconPath": require('../../../../assets/directoryIcon/icons/svgr.svg')
    },
    "rome": {
      "iconPath": require('../../../../assets/directoryIcon/icons/rome.svg')
    },
    "cypress": {
      "iconPath": require('../../../../assets/directoryIcon/icons/cypress.svg')
    },
    "siyuan": {
      "iconPath": require('../../../../assets/directoryIcon/icons/siyuan.svg')
    },
    "ndst": {
      "iconPath": require('../../../../assets/directoryIcon/icons/ndst.svg')
    },
    "tobi": {
      "iconPath": require('../../../../assets/directoryIcon/icons/tobi.svg')
    },
    "tobimake": {
      "iconPath": require('../../../../assets/directoryIcon/icons/tobimake.svg')
    },
    "gleam": {
      "iconPath": require('../../../../assets/directoryIcon/icons/gleam.svg')
    },
    "pnpm": {
      "iconPath": require('../../../../assets/directoryIcon/icons/pnpm.svg')
    },
    "pnpm_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/pnpm_light.svg')
    },
    "gridsome": {
      "iconPath": require('../../../../assets/directoryIcon/icons/gridsome.svg')
    },
    "file": {
      "iconPath": require('../../../../assets/directoryIcon/icons/file.svg')
    },
    "folder-src": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-src.svg')
    },
    "folder-src-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-src-open.svg')
    },
    "folder-dist": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-dist.svg')
    },
    "folder-dist-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-dist-open.svg')
    },
    "folder-css": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-css.svg')
    },
    "folder-css-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-css-open.svg')
    },
    "folder-sass": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-sass.svg')
    },
    "folder-sass-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-sass-open.svg')
    },
    "folder-images": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-images.svg')
    },
    "folder-images-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-images-open.svg')
    },
    "folder-scripts": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-scripts.svg')
    },
    "folder-scripts-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-scripts-open.svg')
    },
    "folder-node": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-node.svg')
    },
    "folder-node-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-node-open.svg')
    },
    "folder-javascript": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-javascript.svg')
    },
    "folder-javascript-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-javascript-open.svg')
    },
    "folder-json": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-json.svg')
    },
    "folder-json-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-json-open.svg')
    },
    "folder-font": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-font.svg')
    },
    "folder-font-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-font-open.svg')
    },
    "folder-bower": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-bower.svg')
    },
    "folder-bower-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-bower-open.svg')
    },
    "folder-test": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-test.svg')
    },
    "folder-test-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-test-open.svg')
    },
    "folder-jinja": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-jinja.svg')
    },
    "folder-jinja-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-jinja-open.svg')
    },
    "folder-jinja_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-jinja_light.svg')
    },
    "folder-jinja-open_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-jinja-open_light.svg')
    },
    "folder-markdown": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-markdown.svg')
    },
    "folder-markdown-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-markdown-open.svg')
    },
    "folder-php": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-php.svg')
    },
    "folder-php-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-php-open.svg')
    },
    "folder-phpmailer": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-phpmailer.svg')
    },
    "folder-phpmailer-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-phpmailer-open.svg')
    },
    "folder-sublime": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-sublime.svg')
    },
    "folder-sublime-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-sublime-open.svg')
    },
    "folder-docs": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-docs.svg')
    },
    "folder-docs-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-docs-open.svg')
    },
    "folder-git": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-git.svg')
    },
    "folder-git-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-git-open.svg')
    },
    "folder-github": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-github.svg')
    },
    "folder-github-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-github-open.svg')
    },
    "folder-gitlab": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-gitlab.svg')
    },
    "folder-gitlab-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-gitlab-open.svg')
    },
    "folder-vscode": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-vscode.svg')
    },
    "folder-vscode-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-vscode-open.svg')
    },
    "folder-views": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-views.svg')
    },
    "folder-views-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-views-open.svg')
    },
    "folder-vue": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-vue.svg')
    },
    "folder-vue-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-vue-open.svg')
    },
    "folder-vuepress": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-vuepress.svg')
    },
    "folder-vuepress-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-vuepress-open.svg')
    },
    "folder-expo": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-expo.svg')
    },
    "folder-expo-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-expo-open.svg')
    },
    "folder-config": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-config.svg')
    },
    "folder-config-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-config-open.svg')
    },
    "folder-i18n": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-i18n.svg')
    },
    "folder-i18n-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-i18n-open.svg')
    },
    "folder-components": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-components.svg')
    },
    "folder-components-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-components-open.svg')
    },
    "folder-aurelia": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-aurelia.svg')
    },
    "folder-aurelia-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-aurelia-open.svg')
    },
    "folder-resource": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-resource.svg')
    },
    "folder-resource-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-resource-open.svg')
    },
    "folder-lib": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-lib.svg')
    },
    "folder-lib-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-lib-open.svg')
    },
    "folder-theme": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-theme.svg')
    },
    "folder-theme-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-theme-open.svg')
    },
    "folder-webpack": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-webpack.svg')
    },
    "folder-webpack-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-webpack-open.svg')
    },
    "folder-global": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-global.svg')
    },
    "folder-global-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-global-open.svg')
    },
    "folder-public": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-public.svg')
    },
    "folder-public-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-public-open.svg')
    },
    "folder-include": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-include.svg')
    },
    "folder-include-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-include-open.svg')
    },
    "folder-docker": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-docker.svg')
    },
    "folder-docker-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-docker-open.svg')
    },
    "folder-database": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-database.svg')
    },
    "folder-database-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-database-open.svg')
    },
    "folder-log": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-log.svg')
    },
    "folder-log-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-log-open.svg')
    },
    "folder-target": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-target.svg')
    },
    "folder-target-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-target-open.svg')
    },
    "folder-temp": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-temp.svg')
    },
    "folder-temp-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-temp-open.svg')
    },
    "folder-aws": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-aws.svg')
    },
    "folder-aws-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-aws-open.svg')
    },
    "folder-audio": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-audio.svg')
    },
    "folder-audio-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-audio-open.svg')
    },
    "folder-video": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-video.svg')
    },
    "folder-video-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-video-open.svg')
    },
    "folder-kubernetes": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-kubernetes.svg')
    },
    "folder-kubernetes-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-kubernetes-open.svg')
    },
    "folder-import": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-import.svg')
    },
    "folder-import-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-import-open.svg')
    },
    "folder-export": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-export.svg')
    },
    "folder-export-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-export-open.svg')
    },
    "folder-wakatime": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-wakatime.svg')
    },
    "folder-wakatime-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-wakatime-open.svg')
    },
    "folder-circleci": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-circleci.svg')
    },
    "folder-circleci-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-circleci-open.svg')
    },
    "folder-wordpress": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-wordpress.svg')
    },
    "folder-wordpress-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-wordpress-open.svg')
    },
    "folder-gradle": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-gradle.svg')
    },
    "folder-gradle-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-gradle-open.svg')
    },
    "folder-coverage": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-coverage.svg')
    },
    "folder-coverage-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-coverage-open.svg')
    },
    "folder-class": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-class.svg')
    },
    "folder-class-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-class-open.svg')
    },
    "folder-other": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-other.svg')
    },
    "folder-other-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-other-open.svg')
    },
    "folder-typescript": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-typescript.svg')
    },
    "folder-typescript-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-typescript-open.svg')
    },
    "folder-graphql": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-graphql.svg')
    },
    "folder-graphql-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-graphql-open.svg')
    },
    "folder-routes": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-routes.svg')
    },
    "folder-routes-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-routes-open.svg')
    },
    "folder-ci": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-ci.svg')
    },
    "folder-ci-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-ci-open.svg')
    },
    "folder-benchmark": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-benchmark.svg')
    },
    "folder-benchmark-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-benchmark-open.svg')
    },
    "folder-messages": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-messages.svg')
    },
    "folder-messages-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-messages-open.svg')
    },
    "folder-less": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-less.svg')
    },
    "folder-less-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-less-open.svg')
    },
    "folder-gulp": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-gulp.svg')
    },
    "folder-gulp-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-gulp-open.svg')
    },
    "folder-python": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-python.svg')
    },
    "folder-python-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-python-open.svg')
    },
    "folder-debug": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-debug.svg')
    },
    "folder-debug-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-debug-open.svg')
    },
    "folder-fastlane": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-fastlane.svg')
    },
    "folder-fastlane-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-fastlane-open.svg')
    },
    "folder-plugin": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-plugin.svg')
    },
    "folder-plugin-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-plugin-open.svg')
    },
    "folder-middleware": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-middleware.svg')
    },
    "folder-middleware-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-middleware-open.svg')
    },
    "folder-controller": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-controller.svg')
    },
    "folder-controller-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-controller-open.svg')
    },
    "folder-ansible": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-ansible.svg')
    },
    "folder-ansible-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-ansible-open.svg')
    },
    "folder-server": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-server.svg')
    },
    "folder-server-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-server-open.svg')
    },
    "folder-client": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-client.svg')
    },
    "folder-client-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-client-open.svg')
    },
    "folder-tasks": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-tasks.svg')
    },
    "folder-tasks-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-tasks-open.svg')
    },
    "folder-android": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-android.svg')
    },
    "folder-android-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-android-open.svg')
    },
    "folder-ios": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-ios.svg')
    },
    "folder-ios-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-ios-open.svg')
    },
    "folder-upload": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-upload.svg')
    },
    "folder-upload-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-upload-open.svg')
    },
    "folder-download": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-download.svg')
    },
    "folder-download-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-download-open.svg')
    },
    "folder-tools": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-tools.svg')
    },
    "folder-tools-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-tools-open.svg')
    },
    "folder-helper": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-helper.svg')
    },
    "folder-helper-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-helper-open.svg')
    },
    "folder-serverless": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-serverless.svg')
    },
    "folder-serverless-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-serverless-open.svg')
    },
    "folder-api": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-api.svg')
    },
    "folder-api-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-api-open.svg')
    },
    "folder-app": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-app.svg')
    },
    "folder-app-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-app-open.svg')
    },
    "folder-apollo": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-apollo.svg')
    },
    "folder-apollo-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-apollo-open.svg')
    },
    "folder-archive": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-archive.svg')
    },
    "folder-archive-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-archive-open.svg')
    },
    "folder-batch": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-batch.svg')
    },
    "folder-batch-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-batch-open.svg')
    },
    "folder-cluster": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-cluster.svg')
    },
    "folder-cluster-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-cluster-open.svg')
    },
    "folder-command": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-command.svg')
    },
    "folder-command-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-command-open.svg')
    },
    "folder-constant": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-constant.svg')
    },
    "folder-constant-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-constant-open.svg')
    },
    "folder-container": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-container.svg')
    },
    "folder-container-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-container-open.svg')
    },
    "folder-content": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-content.svg')
    },
    "folder-content-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-content-open.svg')
    },
    "folder-context": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-context.svg')
    },
    "folder-context-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-context-open.svg')
    },
    "folder-core": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-core.svg')
    },
    "folder-core-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-core-open.svg')
    },
    "folder-delta": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-delta.svg')
    },
    "folder-delta-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-delta-open.svg')
    },
    "folder-dump": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-dump.svg')
    },
    "folder-dump-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-dump-open.svg')
    },
    "folder-examples": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-examples.svg')
    },
    "folder-examples-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-examples-open.svg')
    },
    "folder-environment": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-environment.svg')
    },
    "folder-environment-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-environment-open.svg')
    },
    "folder-functions": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-functions.svg')
    },
    "folder-functions-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-functions-open.svg')
    },
    "folder-generator": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-generator.svg')
    },
    "folder-generator-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-generator-open.svg')
    },
    "folder-hook": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-hook.svg')
    },
    "folder-hook-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-hook-open.svg')
    },
    "folder-job": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-job.svg')
    },
    "folder-job-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-job-open.svg')
    },
    "folder-keys": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-keys.svg')
    },
    "folder-keys-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-keys-open.svg')
    },
    "folder-layout": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-layout.svg')
    },
    "folder-layout-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-layout-open.svg')
    },
    "folder-mail": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-mail.svg')
    },
    "folder-mail-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-mail-open.svg')
    },
    "folder-mappings": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-mappings.svg')
    },
    "folder-mappings-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-mappings-open.svg')
    },
    "folder-meta": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-meta.svg')
    },
    "folder-meta-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-meta-open.svg')
    },
    "folder-packages": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-packages.svg')
    },
    "folder-packages-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-packages-open.svg')
    },
    "folder-shared": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-shared.svg')
    },
    "folder-shared-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-shared-open.svg')
    },
    "folder-stack": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-stack.svg')
    },
    "folder-stack-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-stack-open.svg')
    },
    "folder-template": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-template.svg')
    },
    "folder-template-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-template-open.svg')
    },
    "folder-utils": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-utils.svg')
    },
    "folder-utils-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-utils-open.svg')
    },
    "folder-private": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-private.svg')
    },
    "folder-private-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-private-open.svg')
    },
    "folder-error": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-error.svg')
    },
    "folder-error-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-error-open.svg')
    },
    "folder-event": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-event.svg')
    },
    "folder-event-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-event-open.svg')
    },
    "folder-secure": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-secure.svg')
    },
    "folder-secure-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-secure-open.svg')
    },
    "folder-custom": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-custom.svg')
    },
    "folder-custom-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-custom-open.svg')
    },
    "folder-mock": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-mock.svg')
    },
    "folder-mock-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-mock-open.svg')
    },
    "folder-syntax": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-syntax.svg')
    },
    "folder-syntax-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-syntax-open.svg')
    },
    "folder-vm": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-vm.svg')
    },
    "folder-vm-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-vm-open.svg')
    },
    "folder-stylus": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-stylus.svg')
    },
    "folder-stylus-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-stylus-open.svg')
    },
    "folder-flow": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-flow.svg')
    },
    "folder-flow-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-flow-open.svg')
    },
    "folder-rules": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-rules.svg')
    },
    "folder-rules-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-rules-open.svg')
    },
    "folder-review": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-review.svg')
    },
    "folder-review-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-review-open.svg')
    },
    "folder-animation": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-animation.svg')
    },
    "folder-animation-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-animation-open.svg')
    },
    "folder-guard": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-guard.svg')
    },
    "folder-guard-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-guard-open.svg')
    },
    "folder-prisma": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-prisma.svg')
    },
    "folder-prisma-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-prisma-open.svg')
    },
    "folder-pipe": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-pipe.svg')
    },
    "folder-pipe-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-pipe-open.svg')
    },
    "folder-svg": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-svg.svg')
    },
    "folder-svg-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-svg-open.svg')
    },
    "folder-terraform": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-terraform.svg')
    },
    "folder-terraform-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-terraform-open.svg')
    },
    "folder-mobile": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-mobile.svg')
    },
    "folder-mobile-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-mobile-open.svg')
    },
    "folder-stencil": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-stencil.svg')
    },
    "folder-stencil-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-stencil-open.svg')
    },
    "folder-firebase": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-firebase.svg')
    },
    "folder-firebase-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-firebase-open.svg')
    },
    "folder-svelte": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-svelte.svg')
    },
    "folder-svelte-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-svelte-open.svg')
    },
    "folder-update": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-update.svg')
    },
    "folder-update-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-update-open.svg')
    },
    "folder-intellij": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-intellij.svg')
    },
    "folder-intellij-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-intellij-open.svg')
    },
    "folder-intellij_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-intellij_light.svg')
    },
    "folder-intellij-open_light": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-intellij-open_light.svg')
    },
    "folder-azure-pipelines": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-azure-pipelines.svg')
    },
    "folder-azure-pipelines-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-azure-pipelines-open.svg')
    },
    "folder-mjml": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-mjml.svg')
    },
    "folder-mjml-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-mjml-open.svg')
    },
    "folder-admin": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-admin.svg')
    },
    "folder-admin-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-admin-open.svg')
    },
    "folder-scala": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-scala.svg')
    },
    "folder-scala-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-scala-open.svg')
    },
    "folder-connection": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-connection.svg')
    },
    "folder-connection-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-connection-open.svg')
    },
    "folder-quasar": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-quasar.svg')
    },
    "folder-quasar-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-quasar-open.svg')
    },
    "folder-next": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-next.svg')
    },
    "folder-next-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-next-open.svg')
    },
    "folder-cobol": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-cobol.svg')
    },
    "folder-cobol-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-cobol-open.svg')
    },
    "folder-yarn": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-yarn.svg')
    },
    "folder-yarn-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-yarn-open.svg')
    },
    "folder-husky": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-husky.svg')
    },
    "folder-husky-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-husky-open.svg')
    },
    "folder-storybook": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-storybook.svg')
    },
    "folder-storybook-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-storybook-open.svg')
    },
    "folder-base": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-base.svg')
    },
    "folder-base-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-base-open.svg')
    },
    "folder-cart": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-cart.svg')
    },
    "folder-cart-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-cart-open.svg')
    },
    "folder-home": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-home.svg')
    },
    "folder-home-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-home-open.svg')
    },
    "folder-project": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-project.svg')
    },
    "folder-project-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-project-open.svg')
    },
    "folder-interface": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-interface.svg')
    },
    "folder-interface-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-interface-open.svg')
    },
    "folder-contract": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-contract.svg')
    },
    "folder-contract-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-contract-open.svg')
    },
    "folder-queue": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-queue.svg')
    },
    "folder-queue-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-queue-open.svg')
    },
    "folder-vercel": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-vercel.svg')
    },
    "folder-vercel-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-vercel-open.svg')
    },
    "folder-cypress": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-cypress.svg')
    },
    "folder-cypress-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-cypress-open.svg')
    },
    "folder-java": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-java.svg')
    },
    "folder-java-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-java-open.svg')
    },
    "folder-resolver": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-resolver.svg')
    },
    "folder-resolver-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-resolver-open.svg')
    },
    "folder-angular": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-angular.svg')
    },
    "folder-angular-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-angular-open.svg')
    },
    "folder": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder.svg')
    },
    "folder-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-open.svg')
    },
    "folder-root": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-root.svg')
    },
    "folder-root-open": {
      "iconPath": require('../../../../assets/directoryIcon/icons/folder-root-open.svg')
    }
  },
  "folderNames": {
    "src": "folder-src",
    "srcs": "folder-src",
    "source": "folder-src",
    "sources": "folder-src",
    "code": "folder-src",
    "dist": "folder-dist",
    "out": "folder-dist",
    "build": "folder-dist",
    "release": "folder-dist",
    "bin": "folder-dist",
    "css": "folder-css",
    "stylesheet": "folder-css",
    "stylesheets": "folder-css",
    "style": "folder-css",
    "styles": "folder-css",
    "sass": "folder-sass",
    "_sass": "folder-sass",
    "scss": "folder-sass",
    "_scss": "folder-sass",
    "images": "folder-images",
    "image": "folder-images",
    "imgs": "folder-images",
    "img": "folder-images",
    "icons": "folder-images",
    "icon": "folder-images",
    "icos": "folder-images",
    "ico": "folder-images",
    "screenshot": "folder-images",
    "screenshots": "folder-images",
    "screengrab": "folder-images",
    "screengrabs": "folder-images",
    "pic": "folder-images",
    "pics": "folder-images",
    "picture": "folder-images",
    "pictures": "folder-images",
    "script": "folder-scripts",
    "scripts": "folder-scripts",
    "node_modules": "folder-node",
    "js": "folder-javascript",
    "javascript": "folder-javascript",
    "javascripts": "folder-javascript",
    "json": "folder-json",
    "jsons": "folder-json",
    "font": "folder-font",
    "fonts": "folder-font",
    "bower_components": "folder-bower",
    "test": "folder-test",
    "tests": "folder-test",
    "testing": "folder-test",
    "__tests__": "folder-test",
    "__snapshots__": "folder-test",
    "__mocks__": "folder-test",
    "__test__": "folder-test",
    "spec": "folder-test",
    "specs": "folder-test",
    "jinja": "folder-jinja",
    "jinja2": "folder-jinja",
    "j2": "folder-jinja",
    "markdown": "folder-markdown",
    "md": "folder-markdown",
    "php": "folder-php",
    "phpmailer": "folder-phpmailer",
    "sublime": "folder-sublime",
    "doc": "folder-docs",
    "docs": "folder-docs",
    "document": "folder-docs",
    "documents": "folder-docs",
    "documentation": "folder-docs",
    "post": "folder-docs",
    "posts": "folder-docs",
    "article": "folder-docs",
    "articles": "folder-docs",
    ".git": "folder-git",
    "patches": "folder-git",
    "githooks": "folder-git",
    ".githooks": "folder-git",
    "submodules": "folder-git",
    ".submodules": "folder-git",
    ".github": "folder-github",
    ".gitlab": "folder-gitlab",
    ".vscode": "folder-vscode",
    ".vscode-test": "folder-vscode",
    "view": "folder-views",
    "views": "folder-views",
    "screen": "folder-views",
    "screens": "folder-views",
    "page": "folder-views",
    "pages": "folder-views",
    "html": "folder-views",
    "vue": "folder-vue",
    ".vuepress": "folder-vuepress",
    ".expo": "folder-expo",
    ".expo-shared": "folder-expo",
    "cfg": "folder-config",
    "cfgs": "folder-config",
    "conf": "folder-config",
    "confs": "folder-config",
    "config": "folder-config",
    "configs": "folder-config",
    "configuration": "folder-config",
    "configurations": "folder-config",
    "setting": "folder-config",
    ".setting": "folder-config",
    "settings": "folder-config",
    ".settings": "folder-config",
    "META-INF": "folder-config",
    "i18n": "folder-i18n",
    "internationalization": "folder-i18n",
    "lang": "folder-i18n",
    "langs": "folder-i18n",
    "language": "folder-i18n",
    "languages": "folder-i18n",
    "locale": "folder-i18n",
    "locales": "folder-i18n",
    "l10n": "folder-i18n",
    "localization": "folder-i18n",
    "translation": "folder-i18n",
    "translate": "folder-i18n",
    "translations": "folder-i18n",
    ".tx": "folder-i18n",
    "components": "folder-components",
    "widget": "folder-components",
    "widgets": "folder-components",
    "aurelia_project": "folder-aurelia",
    "resource": "folder-resource",
    "resources": "folder-resource",
    "res": "folder-resource",
    "asset": "folder-resource",
    "assets": "folder-resource",
    "static": "folder-resource",
    "report": "folder-resource",
    "reports": "folder-resource",
    "lib": "folder-lib",
    "libs": "folder-lib",
    "library": "folder-lib",
    "libraries": "folder-lib",
    "vendor": "folder-lib",
    "vendors": "folder-lib",
    "third-party": "folder-lib",
    "themes": "folder-theme",
    "theme": "folder-theme",
    "color": "folder-theme",
    "colors": "folder-theme",
    "design": "folder-theme",
    "designs": "folder-theme",
    "webpack": "folder-webpack",
    ".webpack": "folder-webpack",
    "global": "folder-global",
    "public": "folder-public",
    "www": "folder-public",
    "wwwroot": "folder-public",
    "web": "folder-public",
    "website": "folder-public",
    "include": "folder-include",
    "includes": "folder-include",
    "_includes": "folder-include",
    "inc": "folder-include",
    "partials": "folder-include",
    "_partials": "folder-include",
    "docker": "folder-docker",
    "dockerfiles": "folder-docker",
    ".docker": "folder-docker",
    "db": "folder-database",
    "database": "folder-database",
    "databases": "folder-database",
    "sql": "folder-database",
    "data": "folder-database",
    "_data": "folder-database",
    "log": "folder-log",
    "logs": "folder-log",
    "target": "folder-target",
    "temp": "folder-temp",
    ".temp": "folder-temp",
    "tmp": "folder-temp",
    ".tmp": "folder-temp",
    "cached": "folder-temp",
    "cache": "folder-temp",
    ".cache": "folder-temp",
    "aws": "folder-aws",
    ".aws": "folder-aws",
    "aud": "folder-audio",
    "auds": "folder-audio",
    "audio": "folder-audio",
    "audios": "folder-audio",
    "music": "folder-audio",
    "sound": "folder-audio",
    "sounds": "folder-audio",
    "vid": "folder-video",
    "vids": "folder-video",
    "video": "folder-video",
    "videos": "folder-video",
    "movie": "folder-video",
    "movies": "folder-video",
    "kubernetes": "folder-kubernetes",
    "k8s": "folder-kubernetes",
    "import": "folder-import",
    "imports": "folder-import",
    "imported": "folder-import",
    "export": "folder-export",
    "exports": "folder-export",
    "exported": "folder-export",
    "wakatime": "folder-wakatime",
    ".circleci": "folder-circleci",
    ".wordpress-org": "folder-wordpress",
    "wp-content": "folder-wordpress",
    "gradle": "folder-gradle",
    ".gradle": "folder-gradle",
    "coverage": "folder-coverage",
    ".nyc-output": "folder-coverage",
    ".nyc_output": "folder-coverage",
    "e2e": "folder-coverage",
    "it": "folder-coverage",
    "integration-test": "folder-coverage",
    "integration-tests": "folder-coverage",
    "class": "folder-class",
    "classes": "folder-class",
    "model": "folder-class",
    "models": "folder-class",
    "schemas": "folder-class",
    "schema": "folder-class",
    "other": "folder-other",
    "others": "folder-other",
    "misc": "folder-other",
    "miscellaneous": "folder-other",
    "extra": "folder-other",
    "extras": "folder-other",
    "typescript": "folder-typescript",
    "ts": "folder-typescript",
    "typings": "folder-typescript",
    "@types": "folder-typescript",
    "types": "folder-typescript",
    "graphql": "folder-graphql",
    "gql": "folder-graphql",
    "routes": "folder-routes",
    "router": "folder-routes",
    "routers": "folder-routes",
    ".ci": "folder-ci",
    "ci": "folder-ci",
    "benchmark": "folder-benchmark",
    "benchmarks": "folder-benchmark",
    "performance": "folder-benchmark",
    "measure": "folder-benchmark",
    "measures": "folder-benchmark",
    "measurement": "folder-benchmark",
    "messages": "folder-messages",
    "messaging": "folder-messages",
    "forum": "folder-messages",
    "chat": "folder-messages",
    "chats": "folder-messages",
    "conversation": "folder-messages",
    "conversations": "folder-messages",
    "less": "folder-less",
    "gulp": "folder-gulp",
    "python": "folder-python",
    "__pycache__": "folder-python",
    ".pytest_cache": "folder-python",
    "debug": "folder-debug",
    "debugging": "folder-debug",
    "fastlane": "folder-fastlane",
    "plugin": "folder-plugin",
    "plugins": "folder-plugin",
    "_plugins": "folder-plugin",
    "extension": "folder-plugin",
    "extensions": "folder-plugin",
    "addon": "folder-plugin",
    "addons": "folder-plugin",
    "module": "folder-plugin",
    "modules": "folder-plugin",
    "middleware": "folder-middleware",
    "middlewares": "folder-middleware",
    "controller": "folder-controller",
    "controllers": "folder-controller",
    "service": "folder-controller",
    "services": "folder-controller",
    "provider": "folder-controller",
    "providers": "folder-controller",
    "handler": "folder-controller",
    "handlers": "folder-controller",
    "ansible": "folder-ansible",
    "server": "folder-server",
    "servers": "folder-server",
    "backend": "folder-server",
    "client": "folder-client",
    "clients": "folder-client",
    "frontend": "folder-client",
    "pwa": "folder-client",
    "tasks": "folder-tasks",
    "tickets": "folder-tasks",
    "android": "folder-android",
    "ios": "folder-ios",
    "uploads": "folder-upload",
    "upload": "folder-upload",
    "downloads": "folder-download",
    "download": "folder-download",
    "tools": "folder-tools",
    "helpers": "folder-helper",
    "helper": "folder-helper",
    ".serverless": "folder-serverless",
    "serverless": "folder-serverless",
    "api": "folder-api",
    "apis": "folder-api",
    "restapi": "folder-api",
    "app": "folder-app",
    "apps": "folder-app",
    "apollo": "folder-apollo",
    "apollo-client": "folder-apollo",
    "apollo-cache": "folder-apollo",
    "apollo-config": "folder-apollo",
    "arc": "folder-archive",
    "arcs": "folder-archive",
    "archive": "folder-archive",
    "archives": "folder-archive",
    "archival": "folder-archive",
    "bkp": "folder-archive",
    "bkps": "folder-archive",
    "bak": "folder-archive",
    "baks": "folder-archive",
    "backup": "folder-archive",
    "backups": "folder-archive",
    "back-up": "folder-archive",
    "back-ups": "folder-archive",
    "batch": "folder-batch",
    "batchs": "folder-batch",
    "batches": "folder-batch",
    "cluster": "folder-cluster",
    "clusters": "folder-cluster",
    "command": "folder-command",
    "commands": "folder-command",
    "cmd": "folder-command",
    "cli": "folder-command",
    "clis": "folder-command",
    "constant": "folder-constant",
    "constants": "folder-constant",
    "container": "folder-container",
    "containers": "folder-container",
    ".devcontainer": "folder-container",
    "content": "folder-content",
    "contents": "folder-content",
    "context": "folder-context",
    "contexts": "folder-context",
    "core": "folder-core",
    "delta": "folder-delta",
    "deltas": "folder-delta",
    "changes": "folder-delta",
    "dump": "folder-dump",
    "dumps": "folder-dump",
    "demo": "folder-examples",
    "demos": "folder-examples",
    "example": "folder-examples",
    "examples": "folder-examples",
    "sample": "folder-examples",
    "samples": "folder-examples",
    "sample-data": "folder-examples",
    ".env": "folder-environment",
    ".environment": "folder-environment",
    "env": "folder-environment",
    "envs": "folder-environment",
    "environment": "folder-environment",
    "environments": "folder-environment",
    ".venv": "folder-environment",
    "func": "folder-functions",
    "funcs": "folder-functions",
    "function": "folder-functions",
    "functions": "folder-functions",
    "lambda": "folder-functions",
    "lambdas": "folder-functions",
    "logic": "folder-functions",
    "math": "folder-functions",
    "maths": "folder-functions",
    "calc": "folder-functions",
    "calcs": "folder-functions",
    "calculation": "folder-functions",
    "calculations": "folder-functions",
    "generator": "folder-generator",
    "generators": "folder-generator",
    "generated": "folder-generator",
    "cfn-gen": "folder-generator",
    "gen": "folder-generator",
    "gens": "folder-generator",
    "auto": "folder-generator",
    "hook": "folder-hook",
    "hooks": "folder-hook",
    "trigger": "folder-hook",
    "triggers": "folder-hook",
    "job": "folder-job",
    "jobs": "folder-job",
    "keys": "folder-keys",
    "key": "folder-keys",
    "token": "folder-keys",
    "tokens": "folder-keys",
    "layout": "folder-layout",
    "layouts": "folder-layout",
    "_layouts": "folder-layout",
    "mail": "folder-mail",
    "mails": "folder-mail",
    "email": "folder-mail",
    "emails": "folder-mail",
    "smtp": "folder-mail",
    "mailers": "folder-mail",
    "mappings": "folder-mappings",
    "mapping": "folder-mappings",
    "meta": "folder-meta",
    "package": "folder-packages",
    "packages": "folder-packages",
    "pkg": "folder-packages",
    "pkgs": "folder-packages",
    "shared": "folder-shared",
    "common": "folder-shared",
    "stack": "folder-stack",
    "stacks": "folder-stack",
    "template": "folder-template",
    "templates": "folder-template",
    "util": "folder-utils",
    "utils": "folder-utils",
    "utility": "folder-utils",
    "utilities": "folder-utils",
    "private": "folder-private",
    ".private": "folder-private",
    "error": "folder-error",
    "errors": "folder-error",
    "err": "folder-error",
    "event": "folder-event",
    "events": "folder-event",
    "auth": "folder-secure",
    "authentication": "folder-secure",
    "secure": "folder-secure",
    "security": "folder-secure",
    "cert": "folder-secure",
    "certs": "folder-secure",
    "certificate": "folder-secure",
    "certificates": "folder-secure",
    "ssl": "folder-secure",
    "custom": "folder-custom",
    "customs": "folder-custom",
    "mock": "folder-mock",
    "mocks": "folder-mock",
    "draft": "folder-mock",
    "drafts": "folder-mock",
    "concept": "folder-mock",
    "concepts": "folder-mock",
    "sketch": "folder-mock",
    "sketches": "folder-mock",
    "syntax": "folder-syntax",
    "syntaxes": "folder-syntax",
    "spellcheck": "folder-syntax",
    "vm": "folder-vm",
    "vms": "folder-vm",
    "stylus": "folder-stylus",
    "flow-typed": "folder-flow",
    "rule": "folder-rules",
    "rules": "folder-rules",
    "validation": "folder-rules",
    "validations": "folder-rules",
    "validator": "folder-rules",
    "validators": "folder-rules",
    "review": "folder-review",
    "reviews": "folder-review",
    "revisal": "folder-review",
    "revisals": "folder-review",
    "reviewed": "folder-review",
    "anim": "folder-animation",
    "anims": "folder-animation",
    "animation": "folder-animation",
    "animations": "folder-animation",
    "animated": "folder-animation",
    "guard": "folder-guard",
    "guards": "folder-guard",
    "prisma": "folder-prisma",
    "pipe": "folder-pipe",
    "pipes": "folder-pipe",
    "svg": "folder.svg",
    "svgs": "folder.svg",
    "terraform": "folder-terraform",
    ".terraform": "folder-terraform",
    "mobile": "folder-mobile",
    "mobiles": "folder-mobile",
    "portable": "folder-mobile",
    "portability": "folder-mobile",
    ".stencil": "folder-stencil",
    "firebase": "folder-firebase",
    ".firebase": "folder-firebase",
    "svelte": "folder-svelte",
    ".svelte-kit": "folder-svelte",
    "update": "folder-update",
    "updates": "folder-update",
    "upgrade": "folder-update",
    "upgrades": "folder-update",
    ".idea": "folder-intellij",
    ".azure-pipelines": "folder-azure-pipelines",
    ".azure-pipelines-ci": "folder-azure-pipelines",
    "mjml": "folder-mjml",
    "admin": "folder-admin",
    "scala": "folder-scala",
    "connection": "folder-connection",
    "connections": "folder-connection",
    "integration": "folder-connection",
    "integrations": "folder-connection",
    ".quasar": "folder-quasar",
    ".next": "folder-next",
    "cobol": "folder-cobol",
    "yarn": "folder-yarn",
    ".yarn": "folder-yarn",
    "husky": "folder-husky",
    ".husky": "folder-husky",
    ".storybook": "folder-storybook",
    "storybook": "folder-storybook",
    "stories": "folder-storybook",
    "__stories__": "folder-storybook",
    "base": "folder-base",
    ".base": "folder-base",
    "cart": "folder-cart",
    "shopping-cart": "folder-cart",
    "shopping": "folder-cart",
    "shop": "folder-cart",
    "home": "folder-home",
    ".home": "folder-home",
    "start": "folder-home",
    ".start": "folder-home",
    "project": "folder-project",
    "projects": "folder-project",
    ".project": "folder-project",
    ".projects": "folder-project",
    "interface": "folder-interface",
    "interfaces": "folder-interface",
    "pact": "folder-contract",
    "pacts": "folder-contract",
    "contract": "folder-contract",
    ".contract": "folder-contract",
    "contracts": "folder-contract",
    "contract-testing": "folder-contract",
    "contract-test": "folder-contract",
    "contract-tests": "folder-contract",
    "queue": "folder-queue",
    "queues": "folder-queue",
    "bull": "folder-queue",
    "mq": "folder-queue",
    "vercel": "folder-vercel",
    ".vercel": "folder-vercel",
    "now": "folder-vercel",
    ".now": "folder-vercel",
    "cypress": "folder-cypress",
    ".cypress": "folder-cypress",
    "java": "folder-java",
    "resolver": "folder-resolver",
    "resolvers": "folder-resolver",
    ".angular": "folder-angular",
    "unity": "folder-unity"
  },
  "folderNamesExpanded": {
    "src": "folder-src-open",
    "srcs": "folder-src-open",
    "source": "folder-src-open",
    "sources": "folder-src-open",
    "code": "folder-src-open",
    "dist": "folder-dist-open",
    "out": "folder-dist-open",
    "build": "folder-dist-open",
    "release": "folder-dist-open",
    "bin": "folder-dist-open",
    "css": "folder-css-open",
    "stylesheet": "folder-css-open",
    "stylesheets": "folder-css-open",
    "style": "folder-css-open",
    "styles": "folder-css-open",
    "sass": "folder-sass-open",
    "_sass": "folder-sass-open",
    "scss": "folder-sass-open",
    "_scss": "folder-sass-open",
    "images": "folder-images-open",
    "image": "folder-images-open",
    "imgs": "folder-images-open",
    "img": "folder-images-open",
    "icons": "folder-images-open",
    "icon": "folder-images-open",
    "icos": "folder-images-open",
    "ico": "folder-images-open",
    "screenshot": "folder-images-open",
    "screenshots": "folder-images-open",
    "screengrab": "folder-images-open",
    "screengrabs": "folder-images-open",
    "pic": "folder-images-open",
    "pics": "folder-images-open",
    "picture": "folder-images-open",
    "pictures": "folder-images-open",
    "script": "folder-scripts-open",
    "scripts": "folder-scripts-open",
    "node_modules": "folder-node-open",
    "js": "folder-javascript-open",
    "javascript": "folder-javascript-open",
    "javascripts": "folder-javascript-open",
    "json": "folder-json-open",
    "jsons": "folder-json-open",
    "font": "folder-font-open",
    "fonts": "folder-font-open",
    "bower_components": "folder-bower-open",
    "test": "folder-test-open",
    "tests": "folder-test-open",
    "testing": "folder-test-open",
    "__tests__": "folder-test-open",
    "__snapshots__": "folder-test-open",
    "__mocks__": "folder-test-open",
    "__test__": "folder-test-open",
    "spec": "folder-test-open",
    "specs": "folder-test-open",
    "jinja": "folder-jinja-open",
    "jinja2": "folder-jinja-open",
    "j2": "folder-jinja-open",
    "markdown": "folder-markdown-open",
    "md": "folder-markdown-open",
    "php": "folder-php-open",
    "phpmailer": "folder-phpmailer-open",
    "sublime": "folder-sublime-open",
    "doc": "folder-docs-open",
    "docs": "folder-docs-open",
    "document": "folder-docs-open",
    "documents": "folder-docs-open",
    "documentation": "folder-docs-open",
    "post": "folder-docs-open",
    "posts": "folder-docs-open",
    "article": "folder-docs-open",
    "articles": "folder-docs-open",
    ".git": "folder-git-open",
    "patches": "folder-git-open",
    "githooks": "folder-git-open",
    ".githooks": "folder-git-open",
    "submodules": "folder-git-open",
    ".submodules": "folder-git-open",
    ".github": "folder-github-open",
    ".gitlab": "folder-gitlab-open",
    ".vscode": "folder-vscode-open",
    ".vscode-test": "folder-vscode-open",
    "view": "folder-views-open",
    "views": "folder-views-open",
    "screen": "folder-views-open",
    "screens": "folder-views-open",
    "page": "folder-views-open",
    "pages": "folder-views-open",
    "html": "folder-views-open",
    "vue": "folder-vue-open",
    ".vuepress": "folder-vuepress-open",
    ".expo": "folder-expo-open",
    ".expo-shared": "folder-expo-open",
    "cfg": "folder-config-open",
    "cfgs": "folder-config-open",
    "conf": "folder-config-open",
    "confs": "folder-config-open",
    "config": "folder-config-open",
    "configs": "folder-config-open",
    "configuration": "folder-config-open",
    "configurations": "folder-config-open",
    "setting": "folder-config-open",
    ".setting": "folder-config-open",
    "settings": "folder-config-open",
    ".settings": "folder-config-open",
    "META-INF": "folder-config-open",
    "i18n": "folder-i18n-open",
    "internationalization": "folder-i18n-open",
    "lang": "folder-i18n-open",
    "langs": "folder-i18n-open",
    "language": "folder-i18n-open",
    "languages": "folder-i18n-open",
    "locale": "folder-i18n-open",
    "locales": "folder-i18n-open",
    "l10n": "folder-i18n-open",
    "localization": "folder-i18n-open",
    "translation": "folder-i18n-open",
    "translate": "folder-i18n-open",
    "translations": "folder-i18n-open",
    ".tx": "folder-i18n-open",
    "components": "folder-components-open",
    "widget": "folder-components-open",
    "widgets": "folder-components-open",
    "aurelia_project": "folder-aurelia-open",
    "resource": "folder-resource-open",
    "resources": "folder-resource-open",
    "res": "folder-resource-open",
    "asset": "folder-resource-open",
    "assets": "folder-resource-open",
    "static": "folder-resource-open",
    "report": "folder-resource-open",
    "reports": "folder-resource-open",
    "lib": "folder-lib-open",
    "libs": "folder-lib-open",
    "library": "folder-lib-open",
    "libraries": "folder-lib-open",
    "vendor": "folder-lib-open",
    "vendors": "folder-lib-open",
    "third-party": "folder-lib-open",
    "themes": "folder-theme-open",
    "theme": "folder-theme-open",
    "color": "folder-theme-open",
    "colors": "folder-theme-open",
    "design": "folder-theme-open",
    "designs": "folder-theme-open",
    "webpack": "folder-webpack-open",
    ".webpack": "folder-webpack-open",
    "global": "folder-global-open",
    "public": "folder-public-open",
    "www": "folder-public-open",
    "wwwroot": "folder-public-open",
    "web": "folder-public-open",
    "website": "folder-public-open",
    "include": "folder-include-open",
    "includes": "folder-include-open",
    "_includes": "folder-include-open",
    "inc": "folder-include-open",
    "partials": "folder-include-open",
    "_partials": "folder-include-open",
    "docker": "folder-docker-open",
    "dockerfiles": "folder-docker-open",
    ".docker": "folder-docker-open",
    "db": "folder-database-open",
    "database": "folder-database-open",
    "databases": "folder-database-open",
    "sql": "folder-database-open",
    "data": "folder-database-open",
    "_data": "folder-database-open",
    "log": "folder-log-open",
    "logs": "folder-log-open",
    "target": "folder-target-open",
    "temp": "folder-temp-open",
    ".temp": "folder-temp-open",
    "tmp": "folder-temp-open",
    ".tmp": "folder-temp-open",
    "cached": "folder-temp-open",
    "cache": "folder-temp-open",
    ".cache": "folder-temp-open",
    "aws": "folder-aws-open",
    ".aws": "folder-aws-open",
    "aud": "folder-audio-open",
    "auds": "folder-audio-open",
    "audio": "folder-audio-open",
    "audios": "folder-audio-open",
    "music": "folder-audio-open",
    "sound": "folder-audio-open",
    "sounds": "folder-audio-open",
    "vid": "folder-video-open",
    "vids": "folder-video-open",
    "video": "folder-video-open",
    "videos": "folder-video-open",
    "movie": "folder-video-open",
    "movies": "folder-video-open",
    "kubernetes": "folder-kubernetes-open",
    "k8s": "folder-kubernetes-open",
    "import": "folder-import-open",
    "imports": "folder-import-open",
    "imported": "folder-import-open",
    "export": "folder-export-open",
    "exports": "folder-export-open",
    "exported": "folder-export-open",
    "wakatime": "folder-wakatime-open",
    ".circleci": "folder-circleci-open",
    ".wordpress-org": "folder-wordpress-open",
    "wp-content": "folder-wordpress-open",
    "gradle": "folder-gradle-open",
    ".gradle": "folder-gradle-open",
    "coverage": "folder-coverage-open",
    ".nyc-output": "folder-coverage-open",
    ".nyc_output": "folder-coverage-open",
    "e2e": "folder-coverage-open",
    "it": "folder-coverage-open",
    "integration-test": "folder-coverage-open",
    "integration-tests": "folder-coverage-open",
    "class": "folder-class-open",
    "classes": "folder-class-open",
    "model": "folder-class-open",
    "models": "folder-class-open",
    "schemas": "folder-class-open",
    "schema": "folder-class-open",
    "other": "folder-other-open",
    "others": "folder-other-open",
    "misc": "folder-other-open",
    "miscellaneous": "folder-other-open",
    "extra": "folder-other-open",
    "extras": "folder-other-open",
    "typescript": "folder-typescript-open",
    "ts": "folder-typescript-open",
    "typings": "folder-typescript-open",
    "@types": "folder-typescript-open",
    "types": "folder-typescript-open",
    "graphql": "folder-graphql-open",
    "gql": "folder-graphql-open",
    "routes": "folder-routes-open",
    "router": "folder-routes-open",
    "routers": "folder-routes-open",
    ".ci": "folder-ci-open",
    "ci": "folder-ci-open",
    "benchmark": "folder-benchmark-open",
    "benchmarks": "folder-benchmark-open",
    "performance": "folder-benchmark-open",
    "measure": "folder-benchmark-open",
    "measures": "folder-benchmark-open",
    "measurement": "folder-benchmark-open",
    "messages": "folder-messages-open",
    "messaging": "folder-messages-open",
    "forum": "folder-messages-open",
    "chat": "folder-messages-open",
    "chats": "folder-messages-open",
    "conversation": "folder-messages-open",
    "conversations": "folder-messages-open",
    "less": "folder-less-open",
    "gulp": "folder-gulp-open",
    "python": "folder-python-open",
    "__pycache__": "folder-python-open",
    ".pytest_cache": "folder-python-open",
    "debug": "folder-debug-open",
    "debugging": "folder-debug-open",
    "fastlane": "folder-fastlane-open",
    "plugin": "folder-plugin-open",
    "plugins": "folder-plugin-open",
    "_plugins": "folder-plugin-open",
    "extension": "folder-plugin-open",
    "extensions": "folder-plugin-open",
    "addon": "folder-plugin-open",
    "addons": "folder-plugin-open",
    "module": "folder-plugin-open",
    "modules": "folder-plugin-open",
    "middleware": "folder-middleware-open",
    "middlewares": "folder-middleware-open",
    "controller": "folder-controller-open",
    "controllers": "folder-controller-open",
    "service": "folder-controller-open",
    "services": "folder-controller-open",
    "provider": "folder-controller-open",
    "providers": "folder-controller-open",
    "handler": "folder-controller-open",
    "handlers": "folder-controller-open",
    "ansible": "folder-ansible-open",
    "server": "folder-server-open",
    "servers": "folder-server-open",
    "backend": "folder-server-open",
    "client": "folder-client-open",
    "clients": "folder-client-open",
    "frontend": "folder-client-open",
    "pwa": "folder-client-open",
    "tasks": "folder-tasks-open",
    "tickets": "folder-tasks-open",
    "android": "folder-android-open",
    "ios": "folder-ios-open",
    "uploads": "folder-upload-open",
    "upload": "folder-upload-open",
    "downloads": "folder-download-open",
    "download": "folder-download-open",
    "tools": "folder-tools-open",
    "helpers": "folder-helper-open",
    "helper": "folder-helper-open",
    ".serverless": "folder-serverless-open",
    "serverless": "folder-serverless-open",
    "api": "folder-api-open",
    "apis": "folder-api-open",
    "restapi": "folder-api-open",
    "app": "folder-app-open",
    "apps": "folder-app-open",
    "apollo": "folder-apollo-open",
    "apollo-client": "folder-apollo-open",
    "apollo-cache": "folder-apollo-open",
    "apollo-config": "folder-apollo-open",
    "arc": "folder-archive-open",
    "arcs": "folder-archive-open",
    "archive": "folder-archive-open",
    "archives": "folder-archive-open",
    "archival": "folder-archive-open",
    "bkp": "folder-archive-open",
    "bkps": "folder-archive-open",
    "bak": "folder-archive-open",
    "baks": "folder-archive-open",
    "backup": "folder-archive-open",
    "backups": "folder-archive-open",
    "back-up": "folder-archive-open",
    "back-ups": "folder-archive-open",
    "batch": "folder-batch-open",
    "batchs": "folder-batch-open",
    "batches": "folder-batch-open",
    "cluster": "folder-cluster-open",
    "clusters": "folder-cluster-open",
    "command": "folder-command-open",
    "commands": "folder-command-open",
    "cmd": "folder-command-open",
    "cli": "folder-command-open",
    "clis": "folder-command-open",
    "constant": "folder-constant-open",
    "constants": "folder-constant-open",
    "container": "folder-container-open",
    "containers": "folder-container-open",
    ".devcontainer": "folder-container-open",
    "content": "folder-content-open",
    "contents": "folder-content-open",
    "context": "folder-context-open",
    "contexts": "folder-context-open",
    "core": "folder-core-open",
    "delta": "folder-delta-open",
    "deltas": "folder-delta-open",
    "changes": "folder-delta-open",
    "dump": "folder-dump-open",
    "dumps": "folder-dump-open",
    "demo": "folder-examples-open",
    "demos": "folder-examples-open",
    "example": "folder-examples-open",
    "examples": "folder-examples-open",
    "sample": "folder-examples-open",
    "samples": "folder-examples-open",
    "sample-data": "folder-examples-open",
    ".env": "folder-environment-open",
    ".environment": "folder-environment-open",
    "env": "folder-environment-open",
    "envs": "folder-environment-open",
    "environment": "folder-environment-open",
    "environments": "folder-environment-open",
    ".venv": "folder-environment-open",
    "func": "folder-functions-open",
    "funcs": "folder-functions-open",
    "function": "folder-functions-open",
    "functions": "folder-functions-open",
    "lambda": "folder-functions-open",
    "lambdas": "folder-functions-open",
    "logic": "folder-functions-open",
    "math": "folder-functions-open",
    "maths": "folder-functions-open",
    "calc": "folder-functions-open",
    "calcs": "folder-functions-open",
    "calculation": "folder-functions-open",
    "calculations": "folder-functions-open",
    "generator": "folder-generator-open",
    "generators": "folder-generator-open",
    "generated": "folder-generator-open",
    "cfn-gen": "folder-generator-open",
    "gen": "folder-generator-open",
    "gens": "folder-generator-open",
    "auto": "folder-generator-open",
    "hook": "folder-hook-open",
    "hooks": "folder-hook-open",
    "trigger": "folder-hook-open",
    "triggers": "folder-hook-open",
    "job": "folder-job-open",
    "jobs": "folder-job-open",
    "keys": "folder-keys-open",
    "key": "folder-keys-open",
    "token": "folder-keys-open",
    "tokens": "folder-keys-open",
    "layout": "folder-layout-open",
    "layouts": "folder-layout-open",
    "_layouts": "folder-layout-open",
    "mail": "folder-mail-open",
    "mails": "folder-mail-open",
    "email": "folder-mail-open",
    "emails": "folder-mail-open",
    "smtp": "folder-mail-open",
    "mailers": "folder-mail-open",
    "mappings": "folder-mappings-open",
    "mapping": "folder-mappings-open",
    "meta": "folder-meta-open",
    "package": "folder-packages-open",
    "packages": "folder-packages-open",
    "pkg": "folder-packages-open",
    "pkgs": "folder-packages-open",
    "shared": "folder-shared-open",
    "common": "folder-shared-open",
    "stack": "folder-stack-open",
    "stacks": "folder-stack-open",
    "template": "folder-template-open",
    "templates": "folder-template-open",
    "util": "folder-utils-open",
    "utils": "folder-utils-open",
    "utility": "folder-utils-open",
    "utilities": "folder-utils-open",
    "private": "folder-private-open",
    ".private": "folder-private-open",
    "error": "folder-error-open",
    "errors": "folder-error-open",
    "err": "folder-error-open",
    "event": "folder-event-open",
    "events": "folder-event-open",
    "auth": "folder-secure-open",
    "authentication": "folder-secure-open",
    "secure": "folder-secure-open",
    "security": "folder-secure-open",
    "cert": "folder-secure-open",
    "certs": "folder-secure-open",
    "certificate": "folder-secure-open",
    "certificates": "folder-secure-open",
    "ssl": "folder-secure-open",
    "custom": "folder-custom-open",
    "customs": "folder-custom-open",
    "mock": "folder-mock-open",
    "mocks": "folder-mock-open",
    "draft": "folder-mock-open",
    "drafts": "folder-mock-open",
    "concept": "folder-mock-open",
    "concepts": "folder-mock-open",
    "sketch": "folder-mock-open",
    "sketches": "folder-mock-open",
    "syntax": "folder-syntax-open",
    "syntaxes": "folder-syntax-open",
    "spellcheck": "folder-syntax-open",
    "vm": "folder-vm-open",
    "vms": "folder-vm-open",
    "stylus": "folder-stylus-open",
    "flow-typed": "folder-flow-open",
    "rule": "folder-rules-open",
    "rules": "folder-rules-open",
    "validation": "folder-rules-open",
    "validations": "folder-rules-open",
    "validator": "folder-rules-open",
    "validators": "folder-rules-open",
    "review": "folder-review-open",
    "reviews": "folder-review-open",
    "revisal": "folder-review-open",
    "revisals": "folder-review-open",
    "reviewed": "folder-review-open",
    "anim": "folder-animation-open",
    "anims": "folder-animation-open",
    "animation": "folder-animation-open",
    "animations": "folder-animation-open",
    "animated": "folder-animation-open",
    "guard": "folder-guard-open",
    "guards": "folder-guard-open",
    "prisma": "folder-prisma-open",
    "pipe": "folder-pipe-open",
    "pipes": "folder-pipe-open",
    "svg": "folder-svg-open",
    "svgs": "folder-svg-open",
    "terraform": "folder-terraform-open",
    ".terraform": "folder-terraform-open",
    "mobile": "folder-mobile-open",
    "mobiles": "folder-mobile-open",
    "portable": "folder-mobile-open",
    "portability": "folder-mobile-open",
    ".stencil": "folder-stencil-open",
    "firebase": "folder-firebase-open",
    ".firebase": "folder-firebase-open",
    "svelte": "folder-svelte-open",
    ".svelte-kit": "folder-svelte-open",
    "update": "folder-update-open",
    "updates": "folder-update-open",
    "upgrade": "folder-update-open",
    "upgrades": "folder-update-open",
    ".idea": "folder-intellij-open",
    ".azure-pipelines": "folder-azure-pipelines-open",
    ".azure-pipelines-ci": "folder-azure-pipelines-open",
    "mjml": "folder-mjml-open",
    "admin": "folder-admin-open",
    "scala": "folder-scala-open",
    "connection": "folder-connection-open",
    "connections": "folder-connection-open",
    "integration": "folder-connection-open",
    "integrations": "folder-connection-open",
    ".quasar": "folder-quasar-open",
    ".next": "folder-next-open",
    "cobol": "folder-cobol-open",
    "yarn": "folder-yarn-open",
    ".yarn": "folder-yarn-open",
    "husky": "folder-husky-open",
    ".husky": "folder-husky-open",
    ".storybook": "folder-storybook-open",
    "storybook": "folder-storybook-open",
    "stories": "folder-storybook-open",
    "__stories__": "folder-storybook-open",
    "base": "folder-base-open",
    ".base": "folder-base-open",
    "cart": "folder-cart-open",
    "shopping-cart": "folder-cart-open",
    "shopping": "folder-cart-open",
    "shop": "folder-cart-open",
    "home": "folder-home-open",
    ".home": "folder-home-open",
    "start": "folder-home-open",
    ".start": "folder-home-open",
    "project": "folder-project-open",
    "projects": "folder-project-open",
    ".project": "folder-project-open",
    ".projects": "folder-project-open",
    "interface": "folder-interface-open",
    "interfaces": "folder-interface-open",
    "pact": "folder-contract-open",
    "pacts": "folder-contract-open",
    "contract": "folder-contract-open",
    ".contract": "folder-contract-open",
    "contracts": "folder-contract-open",
    "contract-testing": "folder-contract-open",
    "contract-test": "folder-contract-open",
    "contract-tests": "folder-contract-open",
    "queue": "folder-queue-open",
    "queues": "folder-queue-open",
    "bull": "folder-queue-open",
    "mq": "folder-queue-open",
    "vercel": "folder-vercel-open",
    ".vercel": "folder-vercel-open",
    "now": "folder-vercel-open",
    ".now": "folder-vercel-open",
    "cypress": "folder-cypress-open",
    ".cypress": "folder-cypress-open",
    "java": "folder-java-open",
    "resolver": "folder-resolver-open",
    "resolvers": "folder-resolver-open",
    ".angular": "folder-angular-open",
    "unity": "folder-unity-open"
  },
  "fileExtensions": {
    "js": "javascript",
    "htm": "html",
    "xhtml": "html",
    "html_vm": "html",
    "asp": "html",
    "jade": "pug",
    "pug": "pug",
    "md": "markdown",
    "markdown": "markdown",
    "rst": "markdown",
    "blink": "blink",
    "css": "css",
    "scss": "sass",
    "sass": "sass",
    "less": "less",
    "json": "json",
    "jsonc": "json",
    "tsbuildinfo": "json",
    "json5": "json",
    "jsonl": "json",
    "ndjson": "json",
    "jinja": "jinja",
    "jinja2": "jinja",
    "j2": "jinja",
    "jinja-html": "jinja",
    "proto": "proto",
    "sublime-project": "sublime",
    "sublime-workspace": "sublime",
    "tw": "twine",
    "twee": "twine",
    "yml": "yaml",
    "yaml": "yaml",
    "yml.dist": "yaml",
    "yaml.dist": "yaml",
    "YAML-tmLanguage": "yaml",
    "xml": "xml",
    "plist": "xml",
    "xsd": "xml",
    "dtd": "xml",
    "xsl": "xml",
    "xslt": "xml",
    "resx": "xml",
    "iml": "xml",
    "xquery": "xml",
    "tmLanguage": "xml",
    "manifest": "xml",
    "project": "xml",
    "xml.dist": "xml",
    "xml.dist.sample": "xml",
    "dmn": "xml",
    "png": "image",
    "jpeg": "image",
    "jpg": "image",
    "gif": "image",
    "ico": "image",
    "tif": "image",
    "tiff": "image",
    "psd": "image",
    "psb": "image",
    "ami": "image",
    "apx": "image",
    "avif": "image",
    "bmp": "image",
    "bpg": "image",
    "brk": "image",
    "cur": "image",
    "dds": "image",
    "dng": "image",
    "exr": "image",
    "fpx": "image",
    "gbr": "image",
    "img": "image",
    "jbig2": "image",
    "jb2": "image",
    "jng": "image",
    "jxr": "image",
    "pgf": "image",
    "pic": "image",
    "raw": "image",
    "webp": "image",
    "eps": "image",
    "afphoto": "image",
    "ase": "image",
    "aseprite": "image",
    "clip": "image",
    "cpt": "image",
    "heif": "image",
    "heic": "image",
    "kra": "image",
    "mdp": "image",
    "ora": "image",
    "pdn": "image",
    "reb": "image",
    "sai": "image",
    "tga": "image",
    "xcf": "image",
    "jfif": "image",
    "ppm": "image",
    "pbm": "image",
    "pgm": "image",
    "pnm": "image",
    "esx": "javascript",
    "mjs": "javascript",
    "jsx": "react",
    "tsx": "react_ts",
    "routing.ts": "routing",
    "routing.tsx": "routing",
    "routing.js": "routing",
    "routing.jsx": "routing",
    "routes.ts": "routing",
    "routes.tsx": "routing",
    "routes.js": "routing",
    "routes.jsx": "routing",
    "ini": "settings",
    "dlc": "settings",
    "dll": "settings",
    "config": "settings",
    "conf": "settings",
    "properties": "settings",
    "prop": "settings",
    "settings": "settings",
    "option": "settings",
    "props": "settings",
    "toml": "settings",
    "prefs": "settings",
    "sln.dotsettings": "settings",
    "sln.dotsettings.user": "settings",
    "cfg": "settings",
    "d.ts": "typescript-def",
    "marko": "markojs",
    "astro": "astro",
    "pdf": "pdf",
    "xlsx": "table",
    "xls": "table",
    "csv": "table",
    "tsv": "table",
    "psv": "table",
    "ods": "table",
    "vscodeignore": "vscode",
    "vsixmanifest": "vscode",
    "vsix": "vscode",
    "code-workplace": "vscode",
    "csproj": "visualstudio",
    "ruleset": "visualstudio",
    "sln": "visualstudio",
    "suo": "visualstudio",
    "vb": "visualstudio",
    "vbs": "visualstudio",
    "vcxitems": "visualstudio",
    "vcxitems.filters": "visualstudio",
    "vcxproj": "visualstudio",
    "vcxproj.filters": "visualstudio",
    "pdb": "database",
    "sql": "database",
    "pks": "database",
    "pkb": "database",
    "accdb": "database",
    "mdb": "database",
    "sqlite": "database",
    "sqlite3": "database",
    "pgsql": "database",
    "postgres": "database",
    "psql": "database",
    "db": "database",
    "db3": "database",
    "kql": "kusto",
    "cs": "csharp",
    "csx": "csharp",
    "qs": "qsharp",
    "zip": "zip",
    "tar": "zip",
    "gz": "zip",
    "xz": "zip",
    "lzma": "zip",
    "lz4": "zip",
    "br": "zip",
    "bz2": "zip",
    "bzip2": "zip",
    "gzip": "zip",
    "brotli": "zip",
    "7z": "zip",
    "rar": "zip",
    "tz": "zip",
    "txz": "zip",
    "tgz": "zip",
    "vala": "vala",
    "zig": "zig",
    "exe": "exe",
    "msi": "exe",
    "dat": "hex",
    "bin": "hex",
    "hex": "hex",
    "java": "java",
    "jsp": "java",
    "jar": "jar",
    "class": "javaclass",
    "c": "c",
    "i": "c",
    "mi": "c",
    "h": "h",
    "cc": "cpp",
    "cpp": "cpp",
    "cxx": "cpp",
    "c++": "cpp",
    "cp": "cpp",
    "mm": "cpp",
    "mii": "cpp",
    "ii": "cpp",
    "hh": "hpp",
    "hpp": "hpp",
    "hxx": "hpp",
    "h++": "hpp",
    "hp": "hpp",
    "tcc": "hpp",
    "inl": "hpp",
    "go": "go",
    "py": "python",
    "pyc": "python-misc",
    "whl": "python-misc",
    "url": "url",
    "sh": "console",
    "ksh": "console",
    "csh": "console",
    "tcsh": "console",
    "zsh": "console",
    "bash": "console",
    "bat": "console",
    "cmd": "console",
    "awk": "console",
    "fish": "console",
    "exp": "console",
    "ps1": "powershell",
    "psm1": "powershell",
    "psd1": "powershell",
    "ps1xml": "powershell",
    "psc1": "powershell",
    "pssc": "powershell",
    "gradle": "gradle",
    "doc": "word",
    "docx": "word",
    "rtf": "word",
    "odt": "word",
    "cer": "certificate",
    "cert": "certificate",
    "crt": "certificate",
    "pub": "key",
    "key": "key",
    "pem": "key",
    "asc": "key",
    "gpg": "key",
    "passwd": "key",
    "woff": "font",
    "woff2": "font",
    "ttf": "font",
    "eot": "font",
    "suit": "font",
    "otf": "font",
    "bmap": "font",
    "fnt": "font",
    "odttf": "font",
    "ttc": "font",
    "font": "font",
    "fonts": "font",
    "sui": "font",
    "ntf": "font",
    "mrf": "font",
    "lib": "lib",
    "bib": "lib",
    "rb": "ruby",
    "erb": "ruby",
    "fs": "fsharp",
    "fsx": "fsharp",
    "fsi": "fsharp",
    "fsproj": "fsharp",
    "swift": "swift",
    "ino": "arduino",
    "dockerignore": "docker",
    "dockerfile": "docker",
    "tex": "tex",
    "sty": "tex",
    "dtx": "tex",
    "ltx": "tex",
    "pptx": "powerpoint",
    "ppt": "powerpoint",
    "pptm": "powerpoint",
    "potx": "powerpoint",
    "potm": "powerpoint",
    "ppsx": "powerpoint",
    "ppsm": "powerpoint",
    "pps": "powerpoint",
    "ppam": "powerpoint",
    "ppa": "powerpoint",
    "odp": "powerpoint",
    "webm": "video",
    "mkv": "video",
    "flv": "video",
    "vob": "video",
    "ogv": "video",
    "ogg": "video",
    "gifv": "video",
    "avi": "video",
    "mov": "video",
    "qt": "video",
    "wmv": "video",
    "yuv": "video",
    "rm": "video",
    "rmvb": "video",
    "mp4": "video",
    "m4v": "video",
    "mpg": "video",
    "mp2": "video",
    "mpeg": "video",
    "mpe": "video",
    "mpv": "video",
    "m2v": "video",
    "vdi": "virtual",
    "vbox": "virtual",
    "vbox-prev": "virtual",
    "ics": "email",
    "mp3": "audio",
    "flac": "audio",
    "m4a": "audio",
    "wma": "audio",
    "aiff": "audio",
    "wav": "audio",
    "coffee": "coffee",
    "cson": "coffee",
    "iced": "coffee",
    "txt": "document",
    "graphql": "graphql",
    "gql": "graphql",
    "rs": "rust",
    "ron": "rust",
    "raml": "raml",
    "xaml": "xaml",
    "hs": "haskell",
    "kt": "kotlin",
    "kts": "kotlin",
    "patch": "git",
    "lua": "lua",
    "clj": "clojure",
    "cljs": "clojure",
    "cljc": "clojure",
    "groovy": "groovy",
    "r": "r",
    "rmd": "r",
    "dart": "dart",
    "as": "actionscript",
    "mxml": "mxml",
    "ahk": "autohotkey",
    "swf": "flash",
    "swc": "swc",
    "cmake": "cmake",
    "asm": "assembly",
    "a51": "assembly",
    "inc": "assembly",
    "nasm": "assembly",
    "s": "assembly",
    "ms": "assembly",
    "agc": "assembly",
    "ags": "assembly",
    "aea": "assembly",
    "argus": "assembly",
    "mitigus": "assembly",
    "binsource": "assembly",
    "vue": "vue",
    "ml": "ocaml",
    "mli": "ocaml",
    "cmx": "ocaml",
    "odin": "odin",
    "js.map": "javascript-map",
    "mjs.map": "javascript-map",
    "cjs.map": "javascript-map",
    "css.map": "css-map",
    "lock": "lock",
    "hbs": "handlebars",
    "mustache": "handlebars",
    "pm": "perl",
    "raku": "perl",
    "hx": "haxe",
    "spec.ts": "test-ts",
    "e2e-spec.ts": "test-ts",
    "test.ts": "test-ts",
    "ts.snap": "test-ts",
    "spec.tsx": "test-jsx",
    "test.tsx": "test-jsx",
    "tsx.snap": "test-jsx",
    "spec.jsx": "test-jsx",
    "test.jsx": "test-jsx",
    "jsx.snap": "test-jsx",
    "spec.js": "test-js",
    "spec.cjs": "test-js",
    "spec.mjs": "test-js",
    "e2e-spec.js": "test-js",
    "e2e-spec.cjs": "test-js",
    "e2e-spec.mjs": "test-js",
    "test.js": "test-js",
    "test.cjs": "test-js",
    "test.mjs": "test-js",
    "js.snap": "test-js",
    "module.ts": "angular",
    "module.js": "angular",
    "ng-template": "angular",
    "component.ts": "angular-component",
    "component.js": "angular-component",
    "guard.ts": "angular-guard",
    "guard.js": "angular-guard",
    "service.ts": "angular-service",
    "service.js": "angular-service",
    "pipe.ts": "angular-pipe",
    "pipe.js": "angular-pipe",
    "filter.js": "angular-pipe",
    "directive.ts": "angular-directive",
    "directive.js": "angular-directive",
    "resolver.ts": "angular-resolver",
    "resolver.js": "angular-resolver",
    "pp": "puppet",
    "ex": "elixir",
    "exs": "elixir",
    "eex": "elixir",
    "leex": "elixir",
    "heex": "elixir",
    "ls": "livescript",
    "erl": "erlang",
    "twig": "twig",
    "jl": "julia",
    "elm": "elm",
    "pure": "purescript",
    "purs": "purescript",
    "tpl": "smarty",
    "styl": "stylus",
    "re": "reason",
    "rei": "reason",
    "cmj": "bucklescript",
    "merlin": "merlin",
    "vhd": "verilog",
    "sv": "verilog",
    "svh": "verilog",
    "nb": "mathematica",
    "wl": "wolframlanguage",
    "wls": "wolframlanguage",
    "njk": "nunjucks",
    "nunjucks": "nunjucks",
    "robot": "robot",
    "sol": "solidity",
    "au3": "autoit",
    "haml": "haml",
    "yang": "yang",
    "mjml": "mjml",
    "tf": "terraform",
    "tf.json": "terraform",
    "tfvars": "terraform",
    "tfstate": "terraform",
    "blade.php": "laravel",
    "inky.php": "laravel",
    "applescript": "applescript",
    "ipa": "applescript",
    "cake": "cake",
    "feature": "cucumber",
    "features": "cucumber",
    "nim": "nim",
    "nimble": "nim",
    "apib": "apiblueprint",
    "apiblueprint": "apiblueprint",
    "riot": "riot",
    "tag": "riot",
    "vfl": "vfl",
    "kl": "kl",
    "pcss": "postcss",
    "sss": "postcss",
    "todo": "todo",
    "cfml": "coldfusion",
    "cfc": "coldfusion",
    "lucee": "coldfusion",
    "cfm": "coldfusion",
    "cabal": "cabal",
    "nix": "nix",
    "slim": "slim",
    "http": "http",
    "rest": "http",
    "rql": "restql",
    "restql": "restql",
    "kv": "kivy",
    "graphcool": "graphcool",
    "sbt": "sbt",
    "apk": "android",
    "smali": "android",
    "dex": "android",
    "env": "tune",
    "gitlab-ci.yml": "gitlab",
    "jenkinsfile": "jenkins",
    "jenkins": "jenkins",
    "fig": "figma",
    "cr": "crystal",
    "ecr": "crystal",
    "drone.yml": "drone",
    "cu": "cuda",
    "cuh": "cuda",
    "log": "log",
    "def": "dotjs",
    "dot": "dotjs",
    "jst": "dotjs",
    "ejs": "ejs",
    ".wakatime-project": "wakatime",
    "pde": "processing",
    "stories.js": "storybook",
    "stories.jsx": "storybook",
    "stories.mdx": "storybook",
    "story.js": "storybook",
    "story.jsx": "storybook",
    "stories.ts": "storybook",
    "stories.tsx": "storybook",
    "story.ts": "storybook",
    "story.tsx": "storybook",
    "stories.svelte": "storybook",
    "story.mdx": "storybook",
    "wpy": "wepy",
    "hcl": "hcl",
    "san": "san",
    "djt": "django",
    "red": "red",
    "mk": "makefile",
    "fxp": "foxpro",
    "prg": "foxpro",
    "pot": "i18n",
    "po": "i18n",
    "mo": "i18n",
    "wat": "webassembly",
    "wasm": "webassembly",
    "ipynb": "jupyter",
    "d": "d",
    "mdx": "mdx",
    "bal": "ballerina",
    "balx": "ballerina",
    "rkt": "racket",
    "bzl": "bazel",
    "bazel": "bazel",
    "mint": "mint",
    "vm": "velocity",
    "fhtml": "velocity",
    "vtl": "velocity",
    "gd": "godot",
    "godot": "godot-assets",
    "tres": "godot-assets",
    "tscn": "godot-assets",
    "azure-pipelines.yml": "azure-pipelines",
    "azure-pipelines.yaml": "azure-pipelines",
    "azcli": "azure",
    "vagrantfile": "vagrant",
    "prisma": "prisma",
    "cshtml": "razor",
    "vbhtml": "razor",
    "abc": "abc",
    "ad": "asciidoc",
    "adoc": "asciidoc",
    "asciidoc": "asciidoc",
    "edge": "edge",
    "ss": "scheme",
    "scm": "scheme",
    "lisp": "lisp",
    "lsp": "lisp",
    "cl": "lisp",
    "fast": "lisp",
    "stl": "3d",
    "obj": "3d",
    "ac": "3d",
    "blend": "3d",
    "mesh": "3d",
    "mqo": "3d",
    "pmd": "3d",
    "pmx": "3d",
    "skp": "3d",
    "vac": "3d",
    "vdp": "3d",
    "vox": "3d",
    "svg": "svg",
    "svelte": "svelte",
    "vimrc": "vim",
    "gvimrc": "vim",
    "exrc": "vim",
    "vim": "vim",
    "viminfo": "vim",
    "moon": "moonscript",
    "prw": "advpl_prw",
    "prx": "advpl_prw",
    "ptm": "advpl_ptm",
    "tlpp": "advpl_tlpp",
    "ch": "advpl_include",
    "iso": "disc",
    "f": "fortran",
    "f77": "fortran",
    "f90": "fortran",
    "f95": "fortran",
    "f03": "fortran",
    "f08": "fortran",
    "tcl": "tcl",
    "liquid": "liquid",
    "p": "prolog",
    "pro": "prolog",
    "pl": "prolog",
    "coco": "coconut",
    "sketch": "sketch",
    "pwn": "pawn",
    "amx": "pawn",
    "4th": "forth",
    "fth": "forth",
    "frt": "forth",
    "iuml": "uml",
    "pu": "uml",
    "puml": "uml",
    "plantuml": "uml",
    "wsd": "uml",
    "wrap": "meson",
    "dhall": "dhall",
    "dhallb": "dhall",
    "sml": "sml",
    "mlton": "sml",
    "mlb": "sml",
    "sig": "sml",
    "fun": "sml",
    "cm": "sml",
    "lex": "sml",
    "use": "sml",
    "grm": "sml",
    "opam": "opam",
    "imba": "imba",
    "drawio": "drawio",
    "dio": "drawio",
    "pas": "pascal",
    "unity": "shaderlab",
    "sas": "sas",
    "sas7bdat": "sas",
    "sashdat": "sas",
    "astore": "sas",
    "ast": "sas",
    "sast": "sas",
    "nupkg": "nuget",
    "command": "command",
    "dsc": "denizenscript",
    "code-search": "search",
    "mcfunction": "minecraft",
    "mcmeta": "minecraft",
    "mcr": "minecraft",
    "mca": "minecraft",
    "mcgame": "minecraft",
    "mclevel": "minecraft",
    "mcworld": "minecraft",
    "mine": "minecraft",
    "mus": "minecraft",
    "res": "rescript",
    "resi": "rescript",
    "b": "brainfuck",
    "bf": "brainfuck",
    "bicep": "bicep",
    "cob": "cobol",
    "cbl": "cobol",
    "gr": "grain",
    "lol": "lolcode",
    "idr": "idris",
    "ibc": "idris",
    "pipeline": "pipeline",
    "rego": "opa",
    "windi": "windicss",
    "scala": "scala",
    "sc": "scala",
    "ly": "lilypond",
    "v": "vlang",
    "pgn": "chess",
    "fen": "chess",
    "gmi": "gemini",
    "gemini": "gemini",
    "tsconfig.json": "tsconfig",
    "tauri": "tauri",
    "jsconfig.json": "jsconfig",
    "ada": "ada",
    "adb": "ada",
    "ads": "ada",
    "ali": "ada",
    "horusec-config.json": "horusec",
    "coarc": "coala",
    "coafile": "coala",
    "bubble": "dinophp",
    "html.bubble": "dinophp",
    "php.bubble": "dinophp",
    "tl": "teal",
    "template": "template",
    "sy": "siyuan",
    "ndst.yml": "ndst",
    "ndst.yaml": "ndst",
    "ndst.json": "ndst",
    "tobi": "tobi",
    "gleam": "gleam",
    "steadybit.yml": "steadybit",
    "steadybit.yaml": "steadybit"
  },
  "fileNames": {
    ".pug-lintrc": "pug",
    ".pug-lintrc.js": "pug",
    ".pug-lintrc.json": "pug",
    ".jscsrc": "json",
    ".jshintrc": "json",
    "composer.lock": "json",
    ".jsbeautifyrc": "json",
    ".esformatter": "json",
    "cdp.pid": "json",
    ".lintstagedrc": "json",
    "playwright.config.js": "playwright",
    "playwright.config.ts": "playwright",
    ".htaccess": "xml",
    "router.js": "routing",
    "router.jsx": "routing",
    "router.ts": "routing",
    "router.tsx": "routing",
    "routes.js": "routing",
    "routes.jsx": "routing",
    "routes.ts": "routing",
    "routes.tsx": "routing",
    ".jshintignore": "settings",
    ".buildignore": "settings",
    ".mrconfig": "settings",
    ".yardopts": "settings",
    "manifest.mf": "settings",
    ".clang-format": "settings",
    ".clang-tidy": "settings",
    "astro.config.js": "astro",
    "astro.config.mjs": "astro",
    "astro.config.cjs": "astro",
    "go.mod": "go-mod",
    "go.sum": "go-mod",
    "go.work": "go-mod",
    "requirements.txt": "python-misc",
    "pipfile": "python-misc",
    ".python-version": "python-misc",
    "manifest.in": "python-misc",
    "pylintrc": "python-misc",
    ".pylintrc": "python-misc",
    "commit-msg": "console",
    "pre-commit": "console",
    "pre-push": "console",
    "post-merge": "console",
    "gradle.properties": "gradle",
    "gradlew": "gradle",
    "gradle-wrapper.properties": "gradle",
    "copying": "certificate",
    "copying.md": "certificate",
    "copying.rst": "certificate",
    "copying.txt": "certificate",
    "copyright": "certificate",
    "copyright.md": "certificate",
    "copyright.rst": "certificate",
    "copyright.txt": "certificate",
    "license": "certificate",
    "license.md": "certificate",
    "license.rst": "certificate",
    "license.txt": "certificate",
    "licence": "certificate",
    "licence.md": "certificate",
    "licence.rst": "certificate",
    "licence.txt": "certificate",
    ".htpasswd": "key",
    "gemfile": "gemfile",
    ".rubocop.yml": "rubocop",
    ".rubocop-todo.yml": "rubocop",
    ".rubocop_todo.yml": "rubocop",
    "dockerfile": "docker",
    "dockerfile.prod": "docker",
    "dockerfile.production": "docker",
    "dockerfile.alpha": "docker",
    "dockerfile.beta": "docker",
    "dockerfile.stage": "docker",
    "dockerfile.staging": "docker",
    "dockerfile.dev": "docker",
    "dockerfile.development": "docker",
    "dockerfile.local": "docker",
    "dockerfile.test": "docker",
    "dockerfile.testing": "docker",
    "dockerfile.ci": "docker",
    "dockerfile.web": "docker",
    "dockerfile.worker": "docker",
    "docker-compose.yml": "docker",
    "docker-compose.override.yml": "docker",
    "docker-compose.prod.yml": "docker",
    "docker-compose.production.yml": "docker",
    "docker-compose.alpha.yml": "docker",
    "docker-compose.beta.yml": "docker",
    "docker-compose.stage.yml": "docker",
    "docker-compose.staging.yml": "docker",
    "docker-compose.dev.yml": "docker",
    "docker-compose.development.yml": "docker",
    "docker-compose.local.yml": "docker",
    "docker-compose.test.yml": "docker",
    "docker-compose.testing.yml": "docker",
    "docker-compose.ci.yml": "docker",
    "docker-compose.web.yml": "docker",
    "docker-compose.worker.yml": "docker",
    "docker-compose.yaml": "docker",
    "docker-compose.override.yaml": "docker",
    "docker-compose.prod.yaml": "docker",
    "docker-compose.production.yaml": "docker",
    "docker-compose.alpha.yaml": "docker",
    "docker-compose.beta.yaml": "docker",
    "docker-compose.stage.yaml": "docker",
    "docker-compose.staging.yaml": "docker",
    "docker-compose.dev.yaml": "docker",
    "docker-compose.development.yaml": "docker",
    "docker-compose.local.yaml": "docker",
    "docker-compose.test.yaml": "docker",
    "docker-compose.testing.yaml": "docker",
    "docker-compose.ci.yaml": "docker",
    "docker-compose.web.yaml": "docker",
    "docker-compose.worker.yaml": "docker",
    ".mailmap": "email",
    ".graphqlconfig": "graphql",
    ".graphqlrc": "graphql",
    ".graphqlrc.json": "graphql",
    ".graphqlrc.js": "graphql",
    ".graphqlrc.ts": "graphql",
    ".graphqlrc.toml": "graphql",
    ".graphqlrc.yaml": "graphql",
    ".graphqlrc.yml": "graphql",
    "graphql.config.json": "graphql",
    "graphql.config.js": "graphql",
    "graphql.config.ts": "graphql",
    "graphql.config.toml": "graphql",
    "graphql.config.yaml": "graphql",
    "graphql.config.yml": "graphql",
    ".gitignore": "git",
    ".gitignore-global": "git",
    ".gitignore_global": "git",
    ".gitconfig": "git",
    ".gitattributes": "git",
    ".gitmodules": "git",
    ".gitkeep": "git",
    ".gitinclude": "git",
    "git-history": "git",
    ".luacheckrc": "lua",
    ".Rhistory": "r",
    ".pubignore": "dart",
    "cmakelists.txt": "cmake",
    "cmakecache.txt": "cmake",
    "vue.config.js": "vue-config",
    "vue.config.ts": "vue-config",
    "vetur.config.js": "vue-config",
    "vetur.config.ts": "vue-config",
    "nuxt.config.js": "nuxt",
    "nuxt.config.ts": "nuxt",
    "security.md": "lock",
    "security.txt": "lock",
    "security": "lock",
    "angular-cli.json": "angular",
    ".angular-cli.json": "angular",
    "angular.json": "angular",
    ".mjmlconfig": "mjml",
    "vercel.json": "vercel",
    ".vercelignore": "vercel",
    "now.json": "vercel",
    ".nowignore": "vercel",
    "next.config.js": "next",
    "next.config.ts": "next",
    "next.config.mjs": "next",
    "remix.config.js": "remix",
    "remix.config.ts": "remix",
    "artisan": "laravel",
    ".vfl": "vfl",
    ".kl": "kl",
    "postcss.config.js": "postcss",
    "postcss.config.cjs": "postcss",
    ".postcssrc.js": "postcss",
    ".postcssrc": "postcss",
    ".postcssrc.json": "postcss",
    ".postcssrc.yml": "postcss",
    "posthtml.config.js": "posthtml",
    ".posthtmlrc.js": "posthtml",
    ".posthtmlrc": "posthtml",
    ".posthtmlrc.json": "posthtml",
    ".posthtmlrc.yml": "posthtml",
    "cabal.project": "cabal",
    "cabal.project.freeze": "cabal",
    "cabal.project.local": "cabal",
    "CNAME": "http",
    "project.graphcool": "graphcool",
    "webpack.js": "webpack",
    "webpack.cjs": "webpack",
    "webpack.ts": "webpack",
    "webpack.base.js": "webpack",
    "webpack.base.cjs": "webpack",
    "webpack.base.ts": "webpack",
    "webpack.config.js": "webpack",
    "webpack.config.cjs": "webpack",
    "webpack.config.ts": "webpack",
    "webpack.common.js": "webpack",
    "webpack.common.cjs": "webpack",
    "webpack.common.ts": "webpack",
    "webpack.config.common.js": "webpack",
    "webpack.config.common.cjs": "webpack",
    "webpack.config.common.ts": "webpack",
    "webpack.config.common.babel.js": "webpack",
    "webpack.config.common.babel.ts": "webpack",
    "webpack.dev.js": "webpack",
    "webpack.dev.cjs": "webpack",
    "webpack.dev.ts": "webpack",
    "webpack.development.js": "webpack",
    "webpack.development.cjs": "webpack",
    "webpack.development.ts": "webpack",
    "webpack.config.dev.js": "webpack",
    "webpack.config.dev.cjs": "webpack",
    "webpack.config.dev.ts": "webpack",
    "webpack.config.dev.babel.js": "webpack",
    "webpack.config.dev.babel.ts": "webpack",
    "webpack.mix.js": "webpack",
    "webpack.mix.cjs": "webpack",
    "webpack.prod.js": "webpack",
    "webpack.prod.cjs": "webpack",
    "webpack.prod.config.js": "webpack",
    "webpack.prod.config.cjs": "webpack",
    "webpack.prod.ts": "webpack",
    "webpack.production.js": "webpack",
    "webpack.production.cjs": "webpack",
    "webpack.production.ts": "webpack",
    "webpack.server.js": "webpack",
    "webpack.server.cjs": "webpack",
    "webpack.server.ts": "webpack",
    "webpack.client.js": "webpack",
    "webpack.client.cjs": "webpack",
    "webpack.client.ts": "webpack",
    "webpack.config.server.js": "webpack",
    "webpack.config.server.cjs": "webpack",
    "webpack.config.server.ts": "webpack",
    "webpack.config.client.js": "webpack",
    "webpack.config.client.cjs": "webpack",
    "webpack.config.client.ts": "webpack",
    "webpack.config.production.babel.js": "webpack",
    "webpack.config.production.babel.ts": "webpack",
    "webpack.config.prod.babel.js": "webpack",
    "webpack.config.prod.babel.cjs": "webpack",
    "webpack.config.prod.babel.ts": "webpack",
    "webpack.config.prod.js": "webpack",
    "webpack.config.prod.cjs": "webpack",
    "webpack.config.prod.ts": "webpack",
    "webpack.config.production.js": "webpack",
    "webpack.config.production.cjs": "webpack",
    "webpack.config.production.ts": "webpack",
    "webpack.config.staging.js": "webpack",
    "webpack.config.staging.cjs": "webpack",
    "webpack.config.staging.ts": "webpack",
    "webpack.config.babel.js": "webpack",
    "webpack.config.babel.ts": "webpack",
    "webpack.config.base.babel.js": "webpack",
    "webpack.config.base.babel.ts": "webpack",
    "webpack.config.base.js": "webpack",
    "webpack.config.base.cjs": "webpack",
    "webpack.config.base.ts": "webpack",
    "webpack.config.staging.babel.js": "webpack",
    "webpack.config.staging.babel.ts": "webpack",
    "webpack.config.coffee": "webpack",
    "webpack.config.test.js": "webpack",
    "webpack.config.test.cjs": "webpack",
    "webpack.config.test.ts": "webpack",
    "webpack.config.vendor.js": "webpack",
    "webpack.config.vendor.cjs": "webpack",
    "webpack.config.vendor.ts": "webpack",
    "webpack.config.vendor.production.js": "webpack",
    "webpack.config.vendor.production.cjs": "webpack",
    "webpack.config.vendor.production.ts": "webpack",
    "webpack.test.js": "webpack",
    "webpack.test.cjs": "webpack",
    "webpack.test.ts": "webpack",
    "webpack.dist.js": "webpack",
    "webpack.dist.cjs": "webpack",
    "webpack.dist.ts": "webpack",
    "webpackfile.js": "webpack",
    "webpackfile.cjs": "webpack",
    "webpackfile.ts": "webpack",
    "ionic.config.json": "ionic",
    ".io-config.json": "ionic",
    "gulpfile.js": "gulp",
    "gulpfile.mjs": "gulp",
    "gulpfile.ts": "gulp",
    "gulpfile.babel.js": "gulp",
    "package.json": "nodejs",
    "package-lock.json": "nodejs",
    ".nvmrc": "nodejs",
    ".esmrc": "nodejs",
    ".node-version": "nodejs",
    ".npmignore": "npm",
    ".npmrc": "npm",
    ".yarnrc": "yarn",
    "yarn.lock": "yarn",
    ".yarnclean": "yarn",
    ".yarn-integrity": "yarn",
    "yarn-error.log": "yarn",
    ".yarnrc.yml": "yarn",
    ".yarnrc.yaml": "yarn",
    "androidmanifest.xml": "android",
    ".env.defaults": "tune",
    ".env.example": "tune",
    ".env.sample": "tune",
    ".env.template": "tune",
    ".env.schema": "tune",
    ".env.local": "tune",
    ".env.dev": "tune",
    ".env.development": "tune",
    ".env.qa": "tune",
    ".env.dist": "tune",
    ".env.prod": "tune",
    ".env.production": "tune",
    ".env.stage": "tune",
    ".env.staging": "tune",
    ".env.preview": "tune",
    ".env.test": "tune",
    ".env.testing": "tune",
    ".env.development.local": "tune",
    ".env.qa.local": "tune",
    ".env.production.local": "tune",
    ".env.staging.local": "tune",
    ".env.test.local": "tune",
    "turbo.json": "turborepo",
    ".babelrc": "babel",
    ".babelrc.cjs": "babel",
    ".babelrc.js": "babel",
    ".babelrc.mjs": "babel",
    ".babelrc.json": "babel",
    "babel.config.cjs": "babel",
    "babel.config.js": "babel",
    "babel.config.mjs": "babel",
    "babel.config.json": "babel",
    "babel-transform.js": "babel",
    ".babel-plugin-macrosrc": "babel",
    ".babel-plugin-macrosrc.json": "babel",
    ".babel-plugin-macrosrc.yaml": "babel",
    ".babel-plugin-macrosrc.yml": "babel",
    ".babel-plugin-macrosrc.js": "babel",
    "babel-plugin-macros.config.js": "babel",
    "blitz.config.js": "blitz",
    "blitz.config.ts": "blitz",
    ".blitz.config.compiled.js": "blitz",
    "contributing.md": "contributing",
    "contributing.rst": "contributing",
    "contributing.txt": "contributing",
    "contributing": "contributing",
    "readme.md": "readme",
    "readme.rst": "readme",
    "readme.txt": "readme",
    "readme": "readme",
    "changelog": "changelog",
    "changelog.md": "changelog",
    "changelog.rst": "changelog",
    "changelog.txt": "changelog",
    "changes": "changelog",
    "changes.md": "changelog",
    "changes.rst": "changelog",
    "changes.txt": "changelog",
    "credits.md": "credits",
    "credits.rst": "credits",
    "credits.txt": "credits",
    "credits": "credits",
    "authors.md": "authors",
    "authors.rst": "authors",
    "authors.txt": "authors",
    "authors": "authors",
    "contributors.md": "authors",
    "contributors.rst": "authors",
    "contributors.txt": "authors",
    "contributors": "authors",
    ".flowconfig": "flow",
    "favicon.ico": "favicon",
    "karma.conf.js": "karma",
    "karma.conf.ts": "karma",
    "karma.conf.coffee": "karma",
    "karma.config.js": "karma",
    "karma.config.ts": "karma",
    "karma-main.js": "karma",
    "karma-main.ts": "karma",
    ".bithoundrc": "bithound",
    "svgo.config.js": "svgo",
    ".appveyor.yml": "appveyor",
    "appveyor.yml": "appveyor",
    ".travis.yml": "travis",
    ".codecov.yml": "codecov",
    "codecov.yml": "codecov",
    "protractor.conf.js": "protractor",
    "protractor.conf.ts": "protractor",
    "protractor.conf.coffee": "protractor",
    "protractor.config.js": "protractor",
    "protractor.config.ts": "protractor",
    "fuse.js": "fusebox",
    "procfile": "heroku",
    "procfile.windows": "heroku",
    ".editorconfig": "editorconfig",
    ".bowerrc": "bower",
    "bower.json": "bower",
    ".eslintrc.js": "eslint",
    ".eslintrc.cjs": "eslint",
    ".eslintrc.yaml": "eslint",
    ".eslintrc.yml": "eslint",
    ".eslintrc.json": "eslint",
    ".eslintrc-md.js": "eslint",
    ".eslintrc-jsdoc.js": "eslint",
    ".eslintrc": "eslint",
    ".eslintignore": "eslint",
    ".eslintcache": "eslint",
    "code_of_conduct.md": "conduct",
    "code_of_conduct.txt": "conduct",
    ".watchmanconfig": "watchman",
    "aurelia.json": "aurelia",
    "mocha.opts": "mocha",
    ".mocharc.yml": "mocha",
    ".mocharc.yaml": "mocha",
    ".mocharc.js": "mocha",
    ".mocharc.json": "mocha",
    ".mocharc.jsonc": "mocha",
    "jenkinsfile": "jenkins",
    "firebase.json": "firebase",
    ".firebaserc": "firebase",
    "firestore.rules": "firebase",
    "firestore.indexes.json": "firebase",
    "rollup.config.js": "rollup",
    "rollup.config.ts": "rollup",
    "rollup-config.js": "rollup",
    "rollup-config.ts": "rollup",
    "rollup.config.common.js": "rollup",
    "rollup.config.common.ts": "rollup",
    "rollup.config.base.js": "rollup",
    "rollup.config.base.ts": "rollup",
    "rollup.config.prod.js": "rollup",
    "rollup.config.prod.ts": "rollup",
    "rollup.config.dev.js": "rollup",
    "rollup.config.dev.ts": "rollup",
    "rollup.config.prod.vendor.js": "rollup",
    "rollup.config.prod.vendor.ts": "rollup",
    ".hhconfig": "hack",
    "hardhat.config.js": "hardhat",
    "hardhat.config.ts": "hardhat",
    ".stylelintrc": "stylelint",
    "stylelint.config.js": "stylelint",
    "stylelint.config.cjs": "stylelint",
    ".stylelintrc.json": "stylelint",
    ".stylelintrc.yaml": "stylelint",
    ".stylelintrc.yml": "stylelint",
    ".stylelintrc.js": "stylelint",
    ".stylelintrc.cjs": "stylelint",
    ".stylelintignore": "stylelint",
    ".codeclimate.yml": "code-climate",
    ".prettierrc": "prettier",
    "prettier.config.js": "prettier",
    "prettier.config.cjs": "prettier",
    ".prettierrc.js": "prettier",
    ".prettierrc.cjs": "prettier",
    ".prettierrc.json": "prettier",
    ".prettierrc.json5": "prettier",
    ".prettierrc.yaml": "prettier",
    ".prettierrc.yml": "prettier",
    ".prettierignore": "prettier",
    ".prettierrc.toml": "prettier",
    ".renovaterc": "renovate",
    ".renovaterc.json": "renovate",
    "renovate-config.json": "renovate",
    "renovate.json": "renovate",
    "renovate.json5": "renovate",
    "apollo.config.js": "apollo",
    "nodemon.json": "nodemon",
    "nodemon-debug.json": "nodemon",
    ".hintrc": "webhint",
    "browserslist": "browserlist",
    ".browserslistrc": "browserlist",
    ".snyk": "snyk",
    ".drone.yml": "drone",
    ".sequelizerc": "sequelize",
    "gatsby.config.js": "gatsby",
    "gatsby-config.js": "gatsby",
    "gatsby-node.js": "gatsby",
    "gatsby-browser.js": "gatsby",
    "gatsby-ssr.js": "gatsby",
    ".wakatime-project": "wakatime",
    "circle.yml": "circleci",
    ".cfignore": "cloudfoundry",
    "gruntfile.js": "grunt",
    "gruntfile.ts": "grunt",
    "gruntfile.coffee": "grunt",
    "gruntfile.babel.js": "grunt",
    "gruntfile.babel.ts": "grunt",
    "gruntfile.babel.coffee": "grunt",
    "jest.config.js": "jest",
    "jest.config.ts": "jest",
    "jest.config.cjs": "jest",
    "jest.config.mjs": "jest",
    "jest.config.json": "jest",
    "jest.e2e.config.js": "jest",
    "jest.e2e.config.ts": "jest",
    "jest.e2e.config.cjs": "jest",
    "jest.e2e.config.mjs": "jest",
    "jest.e2e.config.json": "jest",
    "jest.e2e.json": "jest",
    "jest-unit.config.js": "jest",
    "jest-e2e.config.js": "jest",
    "jest-e2e.config.ts": "jest",
    "jest-e2e.config.cjs": "jest",
    "jest-e2e.config.mjs": "jest",
    "jest-e2e.config.json": "jest",
    "jest-e2e.json": "jest",
    "jest-github-actions-reporter.js": "jest",
    "jest.setup.js": "jest",
    "jest.setup.ts": "jest",
    "jest.json": "jest",
    ".jestrc": "jest",
    ".jestrc.js": "jest",
    ".jestrc.json": "jest",
    "jest.teardown.js": "jest",
    "fastfile": "fastlane",
    "appfile": "fastlane",
    ".helmignore": "helm",
    "wallaby.js": "wallaby",
    "wallaby.conf.js": "wallaby",
    "stencil.config.js": "stencil",
    "stencil.config.ts": "stencil",
    "makefile": "makefile",
    "gnumakefile": "makefile",
    "kbuild": "makefile",
    ".releaserc": "semantic-release",
    ".releaserc.yaml": "semantic-release",
    ".releaserc.yml": "semantic-release",
    ".releaserc.json": "semantic-release",
    ".releaserc.js": "semantic-release",
    "release.config.js": "semantic-release",
    "bitbucket-pipelines.yaml": "bitbucket",
    "bitbucket-pipelines.yml": "bitbucket",
    ".bazelignore": "bazel",
    ".bazelrc": "bazel",
    ".bazelversion": "bazel",
    "azure-pipelines.yml": "azure-pipelines",
    "azure-pipelines.yaml": "azure-pipelines",
    "vagrantfile": "vagrant",
    "prisma.yml": "prisma",
    ".nycrc": "istanbul",
    ".nycrc.json": "istanbul",
    "tailwind.js": "tailwindcss",
    "tailwind.ts": "tailwindcss",
    "tailwind.config.js": "tailwindcss",
    "tailwind.config.ts": "tailwindcss",
    "tailwind.config.cjs": "tailwindcss",
    "buildkite.yml": "buildkite",
    "buildkite.yaml": "buildkite",
    "netlify.json": "netlify",
    "netlify.yml": "netlify",
    "netlify.yaml": "netlify",
    "netlify.toml": "netlify",
    "svelte.config.js": "svelte",
    "svelte.config.cjs": "svelte",
    "nest-cli.json": "nest",
    ".nest-cli.json": "nest",
    "nestconfig.json": "nest",
    ".nestconfig.json": "nest",
    ".percy.yml": "percy",
    ".gitpod.yml": "gitpod",
    "codeowners": "codeowners",
    ".gcloudignore": "gcp",
    ".huskyrc": "husky",
    "husky.config.js": "husky",
    ".huskyrc.json": "husky",
    ".huskyrc.js": "husky",
    ".huskyrc.yaml": "husky",
    ".huskyrc.yml": "husky",
    "tiltfile": "tilt",
    "capacitor.config.json": "capacitor",
    "capacitor.config.ts": "capacitor",
    ".adonisrc.json": "adonis",
    "ace": "adonis",
    "meson.build": "meson",
    "meson_options.txt": "meson",
    ".commitlintrc": "commitlint",
    ".commitlintrc.js": "commitlint",
    "commitlint.config.js": "commitlint",
    ".commitlintrc.json": "commitlint",
    ".commitlint.yaml": "commitlint",
    ".commitlint.yml": "commitlint",
    ".commitlintrc.yaml": "commitlint",
    ".commitlintrc.yml": "commitlint",
    "commitlint.config.cjs": "commitlint",
    "commitlint.config.ts": "commitlint",
    ".commitlintrc.ts": "commitlint",
    ".commitlintrc.cjs": "commitlint",
    ".buckconfig": "buck",
    "nx.json": "nrwl",
    ".nxignore": "nrwl",
    "dune": "dune",
    "dune-project": "dune",
    "dune-workspace": "dune",
    "dune-workspace.dev": "dune",
    "roadmap.md": "roadmap",
    "roadmap.txt": "roadmap",
    "timeline.md": "roadmap",
    "timeline.txt": "roadmap",
    "milestones.md": "roadmap",
    "milestones.txt": "roadmap",
    "nuget.config": "nuget",
    ".nuspec": "nuget",
    "nuget.exe": "nuget",
    "stryker.conf.js": "stryker",
    "stryker.conf.json": "stryker",
    ".modernizrrc": "modernizr",
    ".modernizrrc.js": "modernizr",
    ".modernizrrc.json": "modernizr",
    ".slugignore": "slug",
    "stitches.config.js": "stitches",
    "stitches.config.ts": "stitches",
    "nginx.conf": "nginx",
    ".replit": "replit",
    "snowpack.config.cjs": "snowpack",
    "snowpack.config.js": "snowpack",
    "snowpack.config.mjs": "snowpack",
    "snowpack.deps.json": "snowpack",
    "snowpack.config.ts": "snowpack",
    "snowpack.config.json": "snowpack",
    "quasar.conf.js": "quasar",
    "dependabot.yml": "dependabot",
    "vite.config.js": "vite",
    "vite.config.mjs": "vite",
    "vite.config.cjs": "vite",
    "vite.config.ts": "vite",
    "lerna.json": "lerna",
    "windi.config.js": "windicss",
    "windi.config.ts": "windicss",
    "windi.config.cjs": "windicss",
    "windi.config.json": "windicss",
    ".textlintrc": "textlint",
    "vpkg.json": "vlang",
    "v.mod": "vlang",
    ".sentryclirc": "sentry",
    ".phpunit.result.cache": "phpunit",
    ".phpunit-watcher.yml": "phpunit",
    "phpunit.xml": "phpunit",
    "phpunit.xml.dist": "phpunit",
    "phpunit-watcher.yml": "phpunit",
    "phpunit-watcher.yml.dist": "phpunit",
    ".php_cs": "php-cs-fixer",
    ".php_cs.dist": "php-cs-fixer",
    ".php_cs.php": "php-cs-fixer",
    ".php_cs.dist.php": "php-cs-fixer",
    ".php-cs-fixer.php": "php-cs-fixer",
    ".php-cs-fixer.dist.php": "php-cs-fixer",
    "robots.txt": "robots",
    "tsconfig.json": "tsconfig",
    "tsconfig.app.json": "tsconfig",
    "tsconfig.editor.json": "tsconfig",
    "tsconfig.spec.json": "tsconfig",
    "tsconfig.base.json": "tsconfig",
    "tsconfig.build.json": "tsconfig",
    "tsconfig.eslint.json": "tsconfig",
    "tsconfig.lib.json": "tsconfig",
    "tauri.config.json": "tauri",
    "tauri.linux.conf.json": "tauri",
    "tauri.windows.conf.json": "tauri",
    "tauri.macos.conf.json": "tauri",
    "jsconfig.json": "jsconfig",
    "maven.config": "maven",
    "jvm.config": "maven",
    "pom.xml": "maven",
    "serverless.yml": "serverless",
    ".ember-cli": "ember",
    ".ember-cli.js": "ember",
    "ember-cli-builds.js": "ember",
    "horusec-config.json": "horusec",
    "pyproject.toml": "poetry",
    "poetry.lock": "poetry",
    ".parcelrc": "parcel",
    ".astylerc": "astyle",
    ".lighthouserc.js": "lighthouse",
    "lighthouserc.js": "lighthouse",
    ".lighthouserc.json": "lighthouse",
    "lighthouserc.json": "lighthouse",
    ".lighthouserc.yml": "lighthouse",
    "lighthouserc.yml": "lighthouse",
    ".lighthouserc.yaml": "lighthouse",
    "lighthouserc.yaml": "lighthouse",
    ".svgrrc": "svgr",
    "svgr.config.js": "svgr",
    ".svgrrc.js": "svgr",
    ".svgrrc.yaml": "svgr",
    ".svgrrc.yml": "svgr",
    ".svgrrc.json": "svgr",
    "rome.json": "rome",
    "cypress.json": "cypress",
    "cypress.env.json": "cypress",
    ".tobimake": "tobimake",
    "gleam.toml": "gleam",
    "pnpm-lock.yaml": "pnpm",
    "pnpm-workspace.yaml": "pnpm",
    ".pnpmfile.cjs": "pnpm",
    "gridsome.config.js": "gridsome",
    "gridsome.server.js": "gridsome",
    ".steadybit.yml": "steadybit",
    "steadybit.yml": "steadybit",
    ".steadybit.yaml": "steadybit",
    "steadybit.yaml": "steadybit"
  },
  "languageIds": {
    "git": "git",
    "git-commit": "git",
    "git-rebase": "git",
    "ignore": "git",
    "c": "c",
    "objective-c": "c",
    "objective-cpp": "c",
    "yaml": "yaml",
    "xml": "xml",
    "xquery": "xml",
    "xsl": "xml",
    "matlab": "matlab",
    "makefile": "settings",
    "toml": "settings",
    "ini": "settings",
    "properties": "settings",
    "shaderlab": "shaderlab",
    "diff": "diff",
    "json": "json",
    "jsonc": "json",
    "json5": "json",
    "blink": "blink",
    "java": "java",
    "razor": "razor",
    "aspnetcorerazor": "razor",
    "python": "python",
    "javascript": "javascript",
    "typescript": "typescript",
    "scala": "scala",
    "handlebars": "handlebars",
    "perl": "perl",
    "perl6": "perl",
    "haxe": "haxe",
    "hxml": "haxe",
    "puppet": "puppet",
    "elixir": "elixir",
    "livescript": "livescript",
    "erlang": "erlang",
    "twig": "twig",
    "julia": "julia",
    "elm": "elm",
    "purescript": "purescript",
    "stylus": "stylus",
    "nunjucks": "nunjucks",
    "pug": "pug",
    "robotframework": "robot",
    "sass": "sass",
    "scss": "sass",
    "less": "less",
    "css": "css",
    "testOutput": "visualstudio",
    "vb": "visualstudio",
    "ng-template": "angular",
    "graphql": "graphql",
    "solidity": "solidity",
    "autoit": "autoit",
    "haml": "haml",
    "yang": "yang",
    "terraform": "terraform",
    "applescript": "applescript",
    "cake": "cake",
    "cucumber": "cucumber",
    "nim": "nim",
    "nimble": "nim",
    "apiblueprint": "apiblueprint",
    "riot": "riot",
    "postcss": "postcss",
    "lang-cfml": "coldfusion",
    "haskell": "haskell",
    "dhall": "dhall",
    "cabal": "cabal",
    "nix": "nix",
    "ruby": "ruby",
    "slim": "slim",
    "php": "php",
    "hack": "hack",
    "javascriptreact": "react",
    "mjml": "mjml",
    "processing": "processing",
    "hcl": "hcl",
    "go": "go",
    "django-html": "django",
    "django-txt": "django",
    "html": "html",
    "gdscript": "godot",
    "viml": "vim",
    "prolog": "prolog",
    "pawn": "pawn",
    "reason": "reason",
    "reason_lisp": "reason",
    "sml": "sml",
    "tex": "tex",
    "doctex": "tex",
    "latex": "tex",
    "latex-expl3": "tex",
    "apex": "salesforce",
    "sas": "sas",
    "dockerfile": "docker",
    "csv": "table",
    "tsv": "table",
    "psv": "table",
    "csharp": "csharp",
    "bat": "console",
    "awk": "console",
    "shellscript": "console",
    "cpp": "cpp",
    "coffeescript": "coffee",
    "fsharp": "fsharp",
    "editorconfig": "editorconfig",
    "clojure": "clojure",
    "groovy": "groovy",
    "markdown": "markdown",
    "jinja": "jinja",
    "proto": "proto",
    "pip-requirements": "python-misc",
    "vue": "vue",
    "vue-postcss": "vue",
    "vue-html": "vue",
    "lua": "lua",
    "bibtex": "lib",
    "bibtex-style": "lib",
    "log": "log",
    "jupyter": "jupyter",
    "plaintext": "document",
    "pdf": "pdf",
    "powershell": "powershell",
    "jade": "pug",
    "r": "r",
    "rsweave": "r",
    "rust": "rust",
    "sql": "database",
    "kql": "kusto",
    "ssh_config": "lock",
    "svg": "svg",
    "swift": "swift",
    "typescriptreact": "react_ts",
    "search-result": "search",
    "mcfunction": "minecraft",
    "rescript": "rescript",
    "twee3": "twine",
    "twee3-harlowe-3": "twine",
    "twee3-chapbook-1": "twine",
    "twee3-sugarcube-2": "twine",
    "grain": "grain",
    "lolcode": "lolcode",
    "idris": "idris",
    "pgn": "chess",
    "gemini": "gemini",
    "text-gemini": "gemini",
    "v": "vlang",
    "wolfram": "wolframlanguage"
  },
  "light": {
    "fileExtensions": {
      "blink": "blink_light",
      "jinja": "jinja_light",
      "jinja2": "jinja_light",
      "j2": "jinja_light",
      "jinja-html": "jinja_light",
      "cr": "crystal_light",
      "ecr": "crystal_light",
      "drone.yml": "drone_light",
      ".wakatime-project": "wakatime_light",
      "hcl": "hcl_light",
      "iuml": "uml_light",
      "pu": "uml_light",
      "puml": "uml_light",
      "plantuml": "uml_light",
      "wsd": "uml_light",
      "pgn": "chess_light",
      "fen": "chess_light"
    },
    "fileNames": {
      ".rubocop.yml": "rubocop_light",
      ".rubocop-todo.yml": "rubocop_light",
      ".rubocop_todo.yml": "rubocop_light",
      "nuxt.config.js": "nuxt_light",
      "nuxt.config.ts": "nuxt_light",
      "vercel.json": "vercel_light",
      ".vercelignore": "vercel_light",
      "now.json": "vercel_light",
      ".nowignore": "vercel_light",
      "next.config.js": "next_light",
      "next.config.ts": "next_light",
      "next.config.mjs": "next_light",
      "remix.config.js": "remix_light",
      "remix.config.ts": "remix_light",
      "turbo.json": "turborepo_light",
      ".stylelintrc": "stylelint_light",
      "stylelint.config.js": "stylelint_light",
      "stylelint.config.cjs": "stylelint_light",
      ".stylelintrc.json": "stylelint_light",
      ".stylelintrc.yaml": "stylelint_light",
      ".stylelintrc.yml": "stylelint_light",
      ".stylelintrc.js": "stylelint_light",
      ".stylelintrc.cjs": "stylelint_light",
      ".stylelintignore": "stylelint_light",
      ".codeclimate.yml": "code-climate_light",
      "browserslist": "browserlist_light",
      ".browserslistrc": "browserlist_light",
      ".drone.yml": "drone_light",
      ".wakatime-project": "wakatime_light",
      "circle.yml": "circleci_light",
      ".releaserc": "semantic-release_light",
      ".releaserc.yaml": "semantic-release_light",
      ".releaserc.yml": "semantic-release_light",
      ".releaserc.json": "semantic-release_light",
      ".releaserc.js": "semantic-release_light",
      "release.config.js": "semantic-release_light",
      "stitches.config.js": "stitches_light",
      "stitches.config.ts": "stitches_light",
      "snowpack.config.cjs": "snowpack_light",
      "snowpack.config.js": "snowpack_light",
      "snowpack.config.mjs": "snowpack_light",
      "snowpack.deps.json": "snowpack_light",
      "snowpack.config.ts": "snowpack_light",
      "snowpack.config.json": "snowpack_light",
      "pnpm-lock.yaml": "pnpm_light",
      "pnpm-workspace.yaml": "pnpm_light",
      ".pnpmfile.cjs": "pnpm_light"
    },
    "folderNames": {
      "jinja": "folder-jinja_light",
      "jinja2": "folder-jinja_light",
      "j2": "folder-jinja_light",
      ".idea": "folder-intellij_light"
    },
    "folderNamesExpanded": {
      "jinja": "folder-jinja-open_light",
      "jinja2": "folder-jinja-open_light",
      "j2": "folder-jinja-open_light",
      ".idea": "folder-intellij-open_light"
    }
  },
  "options": {
    "folders": {
      "theme": "specific",
      "color": "#90a4ae",
      "associations": {}
    },
    "activeIconPack": "angular",
    "hidesExplorerArrows": false,
    "opacity": 1,
    "saturation": 1,
    "files": {
      "associations": {}
    },
    "languages": {
      "associations": {}
    },
    "showUpdateMessage": false,
    "showWelcomeMessage": false
  },
  "file": "file",
  "hidesExplorerArrows": false,
  "folder": "folder",
  "folderExpanded": "folder-open",
  "rootFolder": "folder-root",
  "rootFolderExpanded": "folder-root-open"
};

export default data;
