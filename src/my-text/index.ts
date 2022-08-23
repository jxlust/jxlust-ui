import { withInstall } from '../utils';
import _MyText from './MyText';

export const MyText = withInstall(_MyText);
export default MyText;
export type { MyTextType } from './MyText';

declare module 'vue' {
  export interface GlobalComponents {
    JxlMyText: typeof MyText;
  }
}
