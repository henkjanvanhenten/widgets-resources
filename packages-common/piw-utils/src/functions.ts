import { ActionValue, EditableValue, ValueStatus } from "mendix";

export const executeAction = (action?: ActionValue): void => {
    if (action && action.canExecute && !action.isExecuting) {
        action.execute();
    }
};

export function setAttributeValue<T extends any>(attribute?: EditableValue<T>, value?: T): void {
    if (attribute && !attribute.readOnly && attribute.status === ValueStatus.Available) {
        attribute.setValue(value);
    }
}
