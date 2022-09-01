import { defineComponent, type ExtractPropTypes, ref } from 'vue';
import { createNamespace, truthProp } from '../utils';
// const isContentEditable = () => {
//   return false;
// };

const triggerInputProps = {
  color: String,
  type: {
    type: String,
    default: 'primary',
  },
  isEditable: truthProp,
  placeholder: String,
};

export type TriggerInputType = ExtractPropTypes<typeof triggerInputProps>;

const [name, bem] = createNamespace('trigger-input');

export default defineComponent({
  name,
  props: triggerInputProps,
  emits: ['click-thumb'],
  setup(props, { slots, emit }) {
    console.log('setup:', props, emit);
    const triggerInputRef = ref();

    const renderContentEditable = () => (
        <div
          class={bem()}
          ref={triggerInputRef}
          contenteditable="true"
          placeholder={props.placeholder}
        ></div>
      );
    const renderTextarea = () => <textarea>{slots.default?.()}</textarea>;
    return () =>
      props.isEditable ? renderContentEditable() : renderTextarea();
  },
});
