import { extend } from "@vue/shared";
const component = extend({});
type VueComponent = InstanceType<typeof component>;

//? Тип компонента должен работать. Если ругается, снести нахер или при наличии избыточной тонны времени пофиксить
export interface IStoreProps {
  component: null | VueComponent;
  props?: object;
}

export interface IStoreState {
  modalState: IStoreProps;
}
