export const getWindowSelection = (iframe: any = null) => {
  if (iframe) return iframe.contentWindow.getSelection();
  return window.getSelection();
};

export const getDocument = (iframe: any = null) => {
  // if (xxx) {
  //   iframe = xxx.iframe;
  // }
  if (!iframe) {
    return document;
  } 
    return iframe.contentWindow.document;
  
};

export const isContentEditable = () => false;

// 获取光标位置
export const getCursorIndex = () => {
  const selection = window.getSelection();

  return selection?.focusOffset;
};

// 获取节点
export const getRangeNode = () => {
  const selection = window.getSelection();

  return selection?.focusNode;
};

export const checkTriggerKey = () => {
  const node = getRangeNode();
  if (!node || node.nodeType !== Node.TEXT_NODE) return false;
  const content = node.textContent || '';
  console.log(111, content);
  const key = '@';
  const regx = new RegExp(`${key}([^${key}s]*)$`);
  // const regx = /@([^@\s]*)$/;
  const preContent = content.slice(0, getCursorIndex());
  console.log(222, preContent);
  const match = regx.exec(preContent);
  return match && match.length === 2;
  // let match = preContent.endsWith('@');
  // return match;
};

export const getNodePositionInParent = (element: HTMLElement) => {
  if (element.parentNode === null) {
    return 0;
  }

  for (let i = 0; i < element.parentNode.childNodes.length; i++) {
    const node = element.parentNode.childNodes[i];

    if (node === element) {
      return i;
    }
  }
};

/**
 * 文本域 selected path
 * @returns
 */
export const getContentEditableSelectedPath = () => {
  const sel = getWindowSelection();
  let selected = sel?.anchorNode as any;
  const path = [];
  let offset;

  if (selected) {
    let i;
    let ce = selected?.contentEditable;
    while (selected !== null && ce !== 'true') {
      i = getNodePositionInParent(selected);
      path.push(i);
      selected = selected.parentNode;
      if (selected !== null) {
        ce = selected.contentEditable;
      }
    }
    path.reverse();

    // getRangeAt may not exist, need alternative
    offset = sel?.getRangeAt(0).startOffset;

    return {
      selected,
      path,
      offset,
    };
  }
};
/**
 * 获取文本域selection text
 * @param isContentEditable
 * @param element
 * @returns
 */
export const getTextPrecedingCurrentSelection = (
  element?: HTMLInputElement,
  isContentEditable = true
) => {
  let text = '';

  if (!isContentEditable) {
    const textComponent = element;
    if (textComponent) {
      const startPos = textComponent.selectionStart;
      if (textComponent.value && startPos && startPos >= 0) {
        text = textComponent.value.substring(0, startPos);
      }
    }
  } else {
    const selectedElem = getWindowSelection()?.anchorNode;
    if (selectedElem != null) {
      const workingNodeContent = selectedElem.textContent;
      const selectStartOffset = getWindowSelection()?.getRangeAt(0).startOffset;

      if (workingNodeContent && selectStartOffset && selectStartOffset >= 0) {
        text = workingNodeContent.substring(0, selectStartOffset);
      }
    }
  }

  return text;
};

export const getLastWordInText = (
  text: string,
  autocompleteSeparator = ''
) => {
  let wordsArray;
  if (autocompleteSeparator) {
    wordsArray = text.split(autocompleteSeparator);
  } else {
    wordsArray = text.split(/\s+/);
  }
  const wordsCount = wordsArray.length - 1;
  return wordsArray[wordsCount];
};

export const lastIndexWithLeadingSpace = (str: string, trigger: string) => {
  const reversedStr = str.split('').reverse().join('');
  let index = -1;

  for (let cidx = 0, len = str.length; cidx < len; cidx++) {
    const firstChar = cidx === str.length - 1;
    const leadingSpace = /\s/.test(reversedStr[cidx + 1]);

    let match = true;
    for (let triggerIdx = trigger.length - 1; triggerIdx >= 0; triggerIdx--) {
      if (trigger[triggerIdx] !== reversedStr[cidx - triggerIdx]) {
        match = false;
        break;
      }
    }

    if (match && (firstChar || leadingSpace)) {
      index = str.length - 1 - cidx;
      break;
    }
  }

  return index;
};

export const getTriggerInfo = (c: string, requireLeadingSpace: boolean) => {
  // triggers.forEach(c => {
  // })
  const selectionInfo = getContentEditableSelectedPath();

  const effectiveRange = getTextPrecedingCurrentSelection();
  const lastWordOfEffectiveRange = getLastWordInText(effectiveRange);
  console.log('lastWordOfEffectiveRange:', lastWordOfEffectiveRange);
  if (effectiveRange !== undefined && effectiveRange !== null) {
    let mostRecentTriggerCharPos = -1;
    let triggerChar = '';

    const idx = requireLeadingSpace
      ? lastIndexWithLeadingSpace(effectiveRange, c)
      : effectiveRange.lastIndexOf(c);

    if (idx > mostRecentTriggerCharPos) {
      mostRecentTriggerCharPos = idx;
      triggerChar = c;
      // requireLeadingSpace = config.requireLeadingSpace;
    }
    console.log(11, mostRecentTriggerCharPos);

    if (
      mostRecentTriggerCharPos >= 0 &&
      (mostRecentTriggerCharPos === 0 ||
        !requireLeadingSpace ||
        /\s/.test(
          effectiveRange.substring(
            mostRecentTriggerCharPos - 1,
            mostRecentTriggerCharPos
          )
        ))
    ) {
      let currentTriggerSnippet = effectiveRange.substring(
        mostRecentTriggerCharPos + triggerChar.length,
        effectiveRange.length
      );

      triggerChar = effectiveRange.substring(
        mostRecentTriggerCharPos,
        mostRecentTriggerCharPos + triggerChar.length
      );
      const firstSnippetChar = currentTriggerSnippet.substring(0, 1);
      const hasTrailingSpace = true;
      const leadingSpace =
        currentTriggerSnippet.length > 0 &&
        (firstSnippetChar === ' ' || firstSnippetChar === '\xA0');
      if (hasTrailingSpace) {
        currentTriggerSnippet = currentTriggerSnippet.trim();
      }
      const allowSpaces = true;
      const regex = allowSpaces ? /[^\S ]/g : /[\xA0\s]/g;
      const menuAlreadyActive = true;
      if (
        !leadingSpace &&
        (menuAlreadyActive || !regex.test(currentTriggerSnippet))
      ) {
        console.log('triggerChar:', triggerChar);
        return {
          mentionPosition: mostRecentTriggerCharPos,
          mentionText: currentTriggerSnippet,
          mentionSelectionInfo: selectionInfo,
          mentionTriggerChar: triggerChar,
        };
      }
    }
  }
};

export class MenuEvent {
  menuDom: HTMLElement;

  selectedNodePosition: number;

  constructor(menuDom: HTMLElement, selectedNodePosition: number) {
    this.menuDom = menuDom;
    this.selectedNodePosition = selectedNodePosition;
  }

  /**
   * 获取光标位置
   * @param selectedNodePosition
   * @param menuDom
   * @returns
   */
  getContentEditableCaretPosition() {
    const { selectedNodePosition } = this;
    const sel: any = getWindowSelection();

    const range = getDocument().createRange();
    range.setStart(sel?.anchorNode, selectedNodePosition);
    range.setEnd(sel?.anchorNode, selectedNodePosition);

    range.collapse(false);

    const rect = range.getBoundingClientRect();

    return this.getFixedCoordinatesRelativeToRect(rect);
  }

  getMenuDimensions() {
    // Width of the menu depends of its contents and position
    // We must check what its width would be without any obstruction
    // This way, we can achieve good positioning for flipping the menu
    const dimensions: any = {
      width: null,
      height: null,
    };
    const { menuDom } = this;
    const cssText = `top: 0px;
                                 left: 0px;
                                 position: fixed;
                                 display: block;
                                 visibility; hidden;
                                 max-height:500px;`;
    menuDom.style.cssText = cssText;
    dimensions.width = menuDom.offsetWidth;
    dimensions.height = menuDom.offsetHeight;

    menuDom.style.cssText = `display: none;`;

    return dimensions;
  }

  getFixedCoordinatesRelativeToRect(rect: any) {
    const coordinates: any = {
      position: 'fixed',
      left: rect.left,
      top: rect.top + rect.height,
    };

    const menuDimensions: any = this.getMenuDimensions();

    const availableSpaceOnTop = rect.top;
    const availableSpaceOnBottom = window.innerHeight - (rect.top + rect.height);

    // check to see where's the right place to put the menu vertically
    if (availableSpaceOnBottom < menuDimensions.height) {
      if (
        availableSpaceOnTop >= menuDimensions.height ||
        availableSpaceOnTop > availableSpaceOnBottom
      ) {
        coordinates.top = 'auto';
        coordinates.bottom = window.innerHeight - rect.top;
        if (availableSpaceOnBottom < menuDimensions.height) {
          coordinates.maxHeight = availableSpaceOnTop;
        }
      } else if (availableSpaceOnTop < menuDimensions.height) {
          coordinates.maxHeight = availableSpaceOnBottom;
        }
    }

    const availableSpaceOnLeft = rect.left;
    const availableSpaceOnRight = window.innerWidth - rect.left;

    // check to see where's the right place to put the menu horizontally
    if (availableSpaceOnRight < menuDimensions.width) {
      if (
        availableSpaceOnLeft >= menuDimensions.width ||
        availableSpaceOnLeft > availableSpaceOnRight
      ) {
        coordinates.left = 'auto';
        coordinates.right = window.innerWidth - rect.left;
        if (availableSpaceOnRight < menuDimensions.width) {
          coordinates.maxWidth = availableSpaceOnLeft;
        }
      } else if (availableSpaceOnLeft < menuDimensions.width) {
          coordinates.maxWidth = availableSpaceOnRight;
        }
    }

    return coordinates;
  }
}

/**
 * 光标位置
 * @returns
 */
export const getRangeRect = () => {
  const selection = window.getSelection();
  if (selection) {
    const range = selection.getRangeAt(0)!;
    const rects = range.getClientRects();
    const LINE_HEIGHT = 30;

    if (rects.length) {
      const rect = rects[0];
      return {
        x: rect.x,
        y: rect.y + LINE_HEIGHT,
      };
    }
  }
};
