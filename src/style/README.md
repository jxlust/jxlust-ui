# Built-in Style

### Intro

jxlt contains some common styles that can be used directly by the className.

### Text ellipsis

When the text content length exceeds the maximum container width, the excess text is automatically omitted.

```html
<div class="jxl-ellipsis">
  This is a paragraph that displays up to one line of text, and the rest of the
  text will be omitted.
</div>

<div class="jxl-multi-ellipsis--l2">
  This is a paragraph that displays up to two lines of text, and the rest of the
  text will be omitted.
</div>

<div class="jxl-multi-ellipsis--l3">
  This is a paragraph that displays up to three lines of text, and the rest of
  the text will be omitted.
</div>
```

### Hairline

Add 1px border under the Retina screen for the element, based on a pseudo element.

```html
<!-- border top -->
<div class="jxl-hairline--top"></div>

<!-- border bottom -->
<div class="jxl-hairline--bottom"></div>

<!-- border left -->
<div class="jxl-hairline--left"></div>

<!-- border right -->
<div class="jxl-hairline--right"></div>

<!-- border top & bottom -->
<div class="jxl-hairline--top-bottom"></div>

<!-- full border -->
<div class="jxl-hairline--surround"></div>
```

### Safe Area

Enable safe area.

```html
<!-- top -->
<div class="jxl-safe-area-top"></div>

<!-- bottom -->
<div class="jxl-safe-area-bottom"></div>
```

### Animation

```html
<!-- fade in  -->
<transition name="jxl-fade">
  <div v-show="visible">Fade</div>
</transition>

<!-- slide up -->
<transition name="jxl-slide-up">
  <div v-show="visible">Slide Up</div>
</transition>

<!-- slide down -->
<transition name="jxl-slide-down">
  <div v-show="visible">Slide Down</div>
</transition>

<!-- slide left -->
<transition name="jxl-slide-left">
  <div v-show="visible">Slide Left</div>
</transition>

<!-- slide right -->
<transition name="jxl-slide-right">
  <div v-show="visible">Slide Right</div>
</transition>
```
