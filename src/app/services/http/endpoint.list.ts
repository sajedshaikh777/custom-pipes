import { ModelConfig } from '../../utils/utils.config-loader';

const modelConfig: any = ModelConfig.getConfig();

export const ENDPOINTLIST: Object = {
    m2m: {
        m2mAccountList: {
            method: 'GET',
            url: modelConfig.accountlistpapiurl,
            cache: true,
            appendToURL: modelConfig.authormode === "Y" ? false : true
        }
    }
};
