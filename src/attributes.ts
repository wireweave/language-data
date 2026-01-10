/**
 * Attribute definitions for Wireweave DSL
 */

import type { AttributeDef } from './types.js';

export const ATTRIBUTES: AttributeDef[] = [
  // Spacing
  { name: 'p', description: 'Padding. Set inner spacing.', values: 'number', example: 'p=4' },
  { name: 'px', description: 'Horizontal padding.', values: 'number', example: 'px=4' },
  { name: 'py', description: 'Vertical padding.', values: 'number', example: 'py=4' },
  { name: 'pt', description: 'Top padding.', values: 'number', example: 'pt=4' },
  { name: 'pr', description: 'Right padding.', values: 'number', example: 'pr=4' },
  { name: 'pb', description: 'Bottom padding.', values: 'number', example: 'pb=4' },
  { name: 'pl', description: 'Left padding.', values: 'number', example: 'pl=4' },
  { name: 'm', description: 'Margin. Set outer spacing.', values: 'number', example: 'm=4' },
  { name: 'mx', description: 'Horizontal margin. Can be "auto" for centering.', values: 'number', example: 'mx=auto' },
  { name: 'my', description: 'Vertical margin.', values: 'number', example: 'my=4' },
  { name: 'mt', description: 'Top margin.', values: 'number', example: 'mt=4' },
  { name: 'mr', description: 'Right margin.', values: 'number', example: 'mr=4' },
  { name: 'mb', description: 'Bottom margin.', values: 'number', example: 'mb=4' },
  { name: 'ml', description: 'Left margin.', values: 'number', example: 'ml=4' },
  { name: 'gap', description: 'Gap between child elements.', values: 'number', example: 'gap=4' },

  // Grid Layout
  { name: 'span', description: 'Grid column width (1-12).', values: 'number', example: 'span=6' },
  { name: 'sm', description: 'Column width at 576px and above.', values: 'number', example: 'sm=6' },
  { name: 'md', description: 'Column width at 768px and above.', values: 'number', example: 'md=4' },
  { name: 'lg', description: 'Column width at 992px and above.', values: 'number', example: 'lg=3' },
  { name: 'xl', description: 'Column width at 1200px and above.', values: 'number', example: 'xl=2' },
  { name: 'order', description: 'Order within flex container.', values: 'number', example: 'order=1' },

  // Flex Layout
  { name: 'flex', description: 'Enable flexbox layout.', values: 'boolean', example: 'flex' },
  { name: 'direction', description: 'Flex direction.', values: ['row', 'column', 'row-reverse', 'column-reverse'], example: 'direction=column' },
  { name: 'justify', description: 'Main axis alignment.', values: ['start', 'center', 'end', 'between', 'around', 'evenly'], example: 'justify=center' },
  { name: 'align', description: 'Cross axis alignment.', values: ['start', 'center', 'end', 'stretch', 'baseline'], example: 'align=center' },
  { name: 'wrap', description: 'Allow child elements to wrap.', values: 'boolean', example: 'wrap' },

  // Size
  { name: 'width', description: 'Width in pixels.', values: 'number', example: 'width=400' },
  { name: 'height', description: 'Height in pixels.', values: 'number', example: 'height=300' },
  { name: 'w', description: 'Width (full, auto, screen, fit, or number).', values: ['full', 'auto', 'screen', 'fit'], example: 'w=full' },
  { name: 'h', description: 'Height (full, auto, screen, or number).', values: ['full', 'auto', 'screen'], example: 'h=full' },
  { name: 'minW', description: 'Minimum width.', values: 'number', example: 'minW=200' },
  { name: 'maxW', description: 'Maximum width.', values: 'number', example: 'maxW=600' },
  { name: 'minH', description: 'Minimum height.', values: 'number', example: 'minH=100' },
  { name: 'maxH', description: 'Maximum height.', values: 'number', example: 'maxH=400' },
  { name: 'size', description: 'Size preset.', values: ['xs', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl'], example: 'size=lg' },
  { name: 'viewport', description: 'Viewport size (e.g., "1440x900").', values: 'string', example: 'viewport="1440x900"' },
  { name: 'device', description: 'Device preset.', values: ['iphone14', 'iphone14pro', 'desktop', 'tablet'], example: 'device="iphone14"' },

  // Visual
  { name: 'border', description: 'Show border.', values: 'boolean', example: 'border' },
  { name: 'shadow', description: 'Box shadow.', values: ['none', 'sm', 'md', 'lg', 'xl'], example: 'shadow=md' },
  { name: 'position', description: 'Position setting.', values: ['left', 'right', 'top', 'bottom', 'top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'], example: 'position=left' },

  // Text
  { name: 'level', description: 'Heading level (1-6).', values: 'number', example: 'level=2' },
  { name: 'weight', description: 'Font weight.', values: ['normal', 'medium', 'semibold', 'bold'], example: 'weight=bold' },
  { name: 'bold', description: 'Bold text (shorthand for weight=bold).', values: 'boolean', example: 'bold' },
  { name: 'muted', description: 'Muted style.', values: 'boolean', example: 'muted' },

  // Button variants
  { name: 'primary', description: 'Primary emphasis style.', values: 'boolean', example: 'primary' },
  { name: 'secondary', description: 'Secondary style.', values: 'boolean', example: 'secondary' },
  { name: 'outline', description: 'Outline style.', values: 'boolean', example: 'outline' },
  { name: 'ghost', description: 'Ghost/transparent style.', values: 'boolean', example: 'ghost' },
  { name: 'danger', description: 'Danger/delete style.', values: 'boolean', example: 'danger' },

  // Status variants
  { name: 'variant', description: 'Variant style.', values: ['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info'], example: 'variant=success' },

  // Form
  { name: 'inputType', description: 'Input field type.', values: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date'], example: 'inputType=email' },
  { name: 'placeholder', description: 'Placeholder text.', values: 'string', example: 'placeholder="Enter text"' },
  { name: 'value', description: 'Default value.', values: 'string', example: 'value="default"' },
  { name: 'label', description: 'Label text.', values: 'string', example: 'label="Name"' },
  { name: 'required', description: 'Required field.', values: 'boolean', example: 'required' },
  { name: 'disabled', description: 'Disabled state.', values: 'boolean', example: 'disabled' },
  { name: 'readonly', description: 'Read-only.', values: 'boolean', example: 'readonly' },
  { name: 'checked', description: 'Checked state.', values: 'boolean', example: 'checked' },
  { name: 'loading', description: 'Loading state.', values: 'boolean', example: 'loading' },
  { name: 'name', description: 'Form element name attribute.', values: 'string', example: 'name="field"' },
  { name: 'rows', description: 'Number of textarea rows.', values: 'number', example: 'rows=4' },
  { name: 'min', description: 'Minimum value.', values: 'number', example: 'min=0' },
  { name: 'max', description: 'Maximum value.', values: 'number', example: 'max=100' },
  { name: 'step', description: 'Step increment.', values: 'number', example: 'step=1' },

  // Scrolling
  { name: 'scroll', description: 'Enable vertical scrolling for overflow content.', values: 'boolean', example: 'scroll' },

  // Background
  { name: 'bg', description: 'Background color variant.', values: ['muted', 'primary', 'secondary'], example: 'bg=muted' },

  // Border radius
  { name: 'rounded', description: 'Apply border radius.', values: 'boolean', example: 'rounded' },

  // Position
  { name: 'x', description: 'Horizontal position (px or with unit).', values: 'number', example: 'x=100' },
  { name: 'y', description: 'Vertical position (px or with unit).', values: 'number', example: 'y=50' },

  // Other
  { name: 'title', description: 'Title text.', values: 'string', example: 'title="Title"' },
  { name: 'centered', description: 'Center alignment.', values: 'boolean', example: 'centered' },
  { name: 'vertical', description: 'Vertical orientation.', values: 'boolean', example: 'vertical' },
  { name: 'expanded', description: 'Expanded state.', values: 'boolean', example: 'expanded' },
  { name: 'active', description: 'Active state/index.', values: 'number', example: 'active=0' },
  { name: 'href', description: 'Link URL.', values: 'string', example: 'href="/path"' },
  { name: 'external', description: 'External link.', values: 'boolean', example: 'external' },
  { name: 'src', description: 'Image source URL.', values: 'string', example: 'src="/image.png"' },
  { name: 'alt', description: 'Alternative text.', values: 'string', example: 'alt="Image"' },
  { name: 'icon', description: 'Icon name (Lucide icons).', values: 'string', example: 'icon="home"' },
  { name: 'pill', description: 'Rounded pill badge.', values: 'boolean', example: 'pill' },
  { name: 'dismissible', description: 'Can be dismissed.', values: 'boolean', example: 'dismissible' },
  { name: 'indeterminate', description: 'Indeterminate state.', values: 'boolean', example: 'indeterminate' },
  { name: 'striped', description: 'Striped style.', values: 'boolean', example: 'striped' },
  { name: 'bordered', description: 'Bordered style.', values: 'boolean', example: 'bordered' },
  { name: 'hover', description: 'Hover effect.', values: 'boolean', example: 'hover' },
  { name: 'ordered', description: 'Ordered list.', values: 'boolean', example: 'ordered' },
  { name: 'none', description: 'No list style.', values: 'boolean', example: 'none' },
];
