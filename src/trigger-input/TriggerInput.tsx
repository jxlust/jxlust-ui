import {
  defineComponent,
  type ExtractPropTypes,
  ref,
  Teleport,
  reactive,
  onMounted,
  onUnmounted,
} from 'vue';
import {
  createNamespace,
  truthProp,
  // checkTriggerKey,
  getTriggerInfo,
} from '../utils';

const triggerInputProps = {
  color: String,
  type: {
    type: String,
    default: 'primary',
  },
  isEditable: truthProp,
  placeholder: String,
  trigger: String,
};

export type TriggerInputType = ExtractPropTypes<typeof triggerInputProps>;

const [name, bem] = createNamespace('trigger-input');

const getRect = (pos: number) => {
  const range = window.document.createRange();
  const selection = window.getSelection();
  if (selection !== null && selection.anchorNode) {
    range.setStart(selection.anchorNode, pos);
    range.setEnd(selection.anchorNode, pos);
  }
  range.collapse(false);
  const rect = range.getBoundingClientRect();
  // let rects = range.getClientRects();
  console.log('rect:', rect);
  return rect;
};
export default defineComponent({
  name,
  props: triggerInputProps,
  emits: ['click-thumb'],
  setup(props, { slots, emit }) {
    console.log('setup:', props, emit);
    const triggerInputRef = ref();
    const triggerKey = props.trigger || '';
    const menuShow = ref(false);
    //   right: 0;
    // bottom:0;
    const menuStyle = reactive({
      top: '0',
      left: '0',
      bottom: 'initial',
      right: 'initial',
    });
    const onCompositionstart = () => {
      console.log('chinese start.');
    };
    const onCompositionend = () => {
      console.log('chinese end.');
    };
    const onInputKeyup = (event: KeyboardEvent) => {
      // let isMatch = checkTriggerKey();
      // let path = getContentEditableSelectedPath();
      // let text = getTextPrecedingCurrentSelection();
      // console.log('path:', path);
      // console.log('text:', text);

      const triggerInfo = getTriggerInfo(triggerKey, false);
      if (triggerInfo) {
        menuShow.value = true;
        const { mentionPosition } = triggerInfo;
        const { x, y } = getRect(mentionPosition);
        menuStyle.left = `${x}px`;
        menuStyle.top = `${y + 30}px`;
        if (
          event.code === 'ArrowUp' ||
          event.code === 'ArrowDown' ||
          event.code === 'Enter'
        ) {
          event.preventDefault();
        }
      } else {
        menuShow.value = false;
      }
    };
    const onInputKeydown = (event: KeyboardEvent) => {
      console.log('keydown:', event);
    };
    const onInputFocus = (event: FocusEvent) => {
      console.log('focus:', event);
    };

    const handleMousedown = () => {
      menuShow.value = false;
    };
    const renderMenu = () => (
        <Teleport to="body">
          <div class={bem('menu')} v-show={menuShow.value} style={menuStyle}>
            <div class="menu-ul">
              <div class="menu-ul-item">sssssss</div>
            </div>
          </div>
        </Teleport>
      );
    const renderContentEditable = () => {
      // 插入contenteditable=“false” 标签会出现 光标消失的问题
      const defaultHtml = `<span contenteditable="false">abc</span> `;
      // let defaultHtml = 'abc';
      return (
        <div
          class={bem()}
          ref={triggerInputRef}
          onCompositionstart={onCompositionstart}
          onCompositionend={onCompositionend}
          onKeyup={onInputKeyup}
          onKeydown={onInputKeydown}
          onFocus={onInputFocus}
          contenteditable="true"
          placeholder={props.placeholder}
          v-html={defaultHtml}
        ></div>
      );
    };
    const renderTextarea = () => <textarea>{slots.default?.()}</textarea>;

    onMounted(() => {
      window.document.addEventListener('mousedown', handleMousedown);
    });
    onUnmounted(() => {
      window.document.removeEventListener('mousedown', handleMousedown);
    });
    return () =>
      props.isEditable ? (
        <>
          {renderContentEditable()} {renderMenu()}
        </>
      ) : (
        renderTextarea()
      );
  },
});
