import { ErrorContentObservableService } from '../data/error.content.observable.service';
import { PanelStateConstant } from '../../utils/utils.constants';

export class DataServicesFactory {

    private static ecInstance: any = null;
    private static journeyStep: any = null;

    static getErrorContentFactory() {
        if (this.ecInstance == null) {
            this.ecInstance = new ErrorContentObservableService();
        }
    }

    static getJourneyStep() {
        if (this.journeyStep == null) {
            this.journeyStep = PanelStateConstant.txCapture;
        }
        return this.journeyStep;
    }

    static setJourneyStep(step: any) {
        this.journeyStep = step;
    }

}
