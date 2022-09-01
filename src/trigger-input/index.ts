import { withInstall } from '../utils';
import _TriggerInput from './TriggerInput';

export const TriggerInput = withInstall(_TriggerInput);
export default TriggerInput;
export type { TriggerInputType } from './TriggerInput';

declare module 'vue' {
  export interface GlobalComponents {
    JxlTriggerInput: typeof TriggerInput;
  }
}
