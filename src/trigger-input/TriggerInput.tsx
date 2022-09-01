import { defineComponent, type ExtractPropTypes } from 'vue';

const buttonProps = {
  color: String,
  type: {
    type: String,
    default: 'primary',
  },
};

export type DemoButtonType = ExtractPropTypes<typeof buttonProps>;

const name = 'demo-button';

export default defineComponent({
  name,
  props: buttonProps,
  emits: ['click-thumb'],
  setup(props, { slots, emit }) {
    console.log('setup:', props, emit);
    return () => (
      <button class="demo-button">{slots.default && slots.default()}</button>
    );
  },
});
