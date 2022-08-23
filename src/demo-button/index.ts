import { withInstall } from '../utils';
import _DemoButton from './DemoButton';

export const DemoButton = withInstall(_DemoButton);
export default DemoButton;
export type { DemoButtonType } from './DemoButton';

declare module 'vue' {
  export interface GlobalComponents {
    JxlDemoButton: typeof DemoButton;
  }
}
