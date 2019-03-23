declare var process: any;

export class GlobalConfigLoader {
    static getConfigLoader() {
        let globalConfigId = document.getElementById('siteConfig'),
            modelConfig = null;
        if (globalConfigId) {
            modelConfig = JSON.parse(globalConfigId.getAttribute('value'));
            if (modelConfig == null) {
                modelConfig = process.env.envConfig;
            }
        } else {
            modelConfig = process.env.envConfig;
        }
        return modelConfig;
    }
}

