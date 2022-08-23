import { defineComponent, type ExtractPropTypes } from 'vue';

const textProps = {
  text: String,
  num: Number,
};

export type MyTextType = ExtractPropTypes<typeof textProps>;

const name = 'my-text';

export default defineComponent({
  name,
  props: textProps,
  emits: ['click-thumb'],
  setup(props, { emit }) {
    console.log('setup:', props, emit);
    return () => {
      const { text } = props;
      return <div class={'my-text-wrap'}>{text}</div>;
    };
  },
});
