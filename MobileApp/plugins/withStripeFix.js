const { withProjectBuildGradle } = require("@expo/config-plugins");

module.exports = function withStripeFix(config) {
    return withProjectBuildGradle(config, (config) => {
        if (config.modResults.language === "groovy") {
            config.modResults.contents += `
subprojects {
  configurations.all {
    resolutionStrategy {
      force "com.stripe:stripe-android:21.22.0"
    }
  }
}
`;
        }
        return config;
    });
};
