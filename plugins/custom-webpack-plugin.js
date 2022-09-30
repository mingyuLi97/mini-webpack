const fs = require("fs-extra");
const path = require("path");

class CustomWebpackPlugin {
  apply(compiler) {
    const outputPath = compiler.options.output.path;
    const hooks = compiler.hooks;

    // 清除 build 目录
    hooks.emit.tap("custom-webpack-plugin", (compilation) => {
      fs.removeSync(outputPath);
    });

    // copy 静态资源
    const otherFilesPath = path.resolve(__dirname, "../src/public");
    hooks.done.tap("custom-webpack-plugin", (compilation) => {
      fs.copySync(otherFilesPath, path.resolve(outputPath, "public"));
    });
  }
}
module.exports = CustomWebpackPlugin;
