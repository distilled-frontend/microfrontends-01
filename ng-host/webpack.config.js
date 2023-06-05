const { ModuleFederationPlugin } = require("webpack").container;
const dependencies = require("./package.json").dependencies;
const shared = Object.keys(dependencies).map((dep) => ({
    [dep]: {
        singleton: true,
        eager: true,
        requiredVersion: dependencies[dep],
    },
}))
module.exports = {
    plugins: [
        new ModuleFederationPlugin({
            name: "ng-host",
            filename: "remoteEntry.js",
            shared,
        }),
    ]
}
