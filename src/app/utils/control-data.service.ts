declare var require: any;
import { GlobalConfigLoader } from './utils.globalConfig-loader';

export class ControlDataService {

    public static siteConfig: any = GlobalConfigLoader.getConfigLoader();

    static getEntitySpecificControlData() {
        let countryCode = this.siteConfig['countryCode'].toLowerCase();
        let controlData = 'control-data.' + countryCode;
        try {
            let entityControlData = require('../utils/control-data/' + controlData + '.ts');
            return entityControlData;
        } catch (error) {
            return null;
        }
    }
}
