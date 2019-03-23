export class ContentManagementFactory {

    static getContent(elementRef: any) {
        let content = document.getElementById("app-content").getAttribute("content");
        let contentObject: any;
        try {
            contentObject = JSON.parse(content);
        }
        catch (e) {
            contentObject = null;
        }
        return contentObject;
    }

    static getErrorContent(elementRef: any) {
        let content = document.getElementById("app-content").getAttribute("errorcontent");
        let contentArray: any = JSON.parse("[" + content + "]");
        let errorContent: any = {};
        for (let index: number = 0; index < contentArray.lenght; index++) {
            if (contentArray[index] !== null) {
                errorContent[contentArray[index].errorCode] = contentArray[index].errorText;
            }
        }
        return errorContent;
    }

    static getControlData(elementRef: any) {
        let content = document.getElementById("app-content").getAttribute("controlData");
        let controlDataObject: any;
        try {
            controlDataObject = JSON.parse(content);
        }
        catch (e) {
            controlDataObject = null;
        }
        return controlDataObject;
    }

    static getSource(elementRef: any) {
        let source = elementRef.nativeElement.getAttribute("source");
        return source;
    }

}