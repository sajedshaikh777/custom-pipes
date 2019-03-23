declare var process: any;

export class ModelConfig {

    static getConfig() {
        let m2mConfigId = document.getElementById('m2mConfigId'),
            siteConfig = document.getElementById('siteConfig'),
            jsonValue = siteConfig ? siteConfig.getAttribute('value') : null,
            modelConfig = process.env.envConfig,
            siteConfigval = null;

        if (m2mConfigId) {
            for (var att, i = 0, atts = m2mConfigId.attributes, n = atts.length; i < n; i++) {
                att = atts[i];
                modelConfig[att.nodeName] = att.nodeValue;
            }
        }

        if (jsonValue && jsonValue != null) {
            siteConfigval = JSON.parse(siteConfig.getAttribute('value'));
        }

        if (siteConfigval) {
            for (var key in siteConfigval) {
                modelConfig[key] = siteConfigval[key];
            }
        }
        return modelConfig;
    }

    static getGlobalConfig() {
        let smConfigId = document.getElementById('smConfigId'),
            siteConfig = document.getElementById('siteConfig'),
            jsonValue = siteConfig ? siteConfig.getAttribute('value') : null,
            modelConfig = process.env.envConfig,
            siteConfigval = null;

        if (smConfigId) {
            for (var att, i = 0, atts = smConfigId.attributes, n = atts.length; i < n; i++) {
                att = atts[i];
                modelConfig[att.nodeName] = att.nodeValue;
            }
        }
        
        if (jsonValue && jsonValue != null) {
            siteConfigval = JSON.parse(siteConfig.getAttribute('value'));
        }

        if (siteConfigval) {
            for (var key in siteConfigval) {
                modelConfig[key] = siteConfigval[key];
            }
        }
        return modelConfig;
    }
}
