/**
 * Component definitions for Wireweave DSL
 * Based on @wireweave/core AST types
 */

import type { ComponentDef } from './types.js';

export const ALL_COMPONENTS: ComponentDef[] = [
  // Layout
  {
    name: 'page',
    description: 'Page root container. Starting point for the entire layout.',
    category: 'layout',
    attributes: ['title', 'width', 'height', 'viewport', 'device', 'centered', 'p', 'px', 'py', 'pt', 'pr', 'pb', 'pl', 'm', 'gap'],
    hasChildren: true,
    validChildren: ['header', 'main', 'footer', 'sidebar', 'section', 'nav', 'row', 'col', 'card'],
    validParents: [],
    example: 'page "Dashboard" centered { ... }',
  },
  {
    name: 'header',
    description: 'Page header area. Place navigation, logo, etc.',
    category: 'layout',
    attributes: ['p', 'px', 'py', 'border', 'gap', 'justify', 'align'],
    hasChildren: true,
    validParents: ['page'],
    example: 'header p=4 border { ... }',
  },
  {
    name: 'main',
    description: 'Main content area. Place primary content here.',
    category: 'layout',
    attributes: ['p', 'px', 'py', 'gap'],
    hasChildren: true,
    validParents: ['page'],
    example: 'main p=6 { ... }',
  },
  {
    name: 'footer',
    description: 'Page footer area. Place copyright, links, etc.',
    category: 'layout',
    attributes: ['p', 'px', 'py', 'border', 'gap'],
    hasChildren: true,
    validParents: ['page'],
    example: 'footer p=4 border { ... }',
  },
  {
    name: 'sidebar',
    description: 'Sidebar area. Place auxiliary navigation or information.',
    category: 'layout',
    attributes: ['position', 'w', 'p', 'px', 'py', 'gap'],
    hasChildren: true,
    validParents: ['page'],
    example: 'sidebar w=240 { ... }',
  },
  {
    name: 'section',
    description: 'Section area. Logically group content.',
    category: 'layout',
    attributes: ['title', 'expanded', 'p', 'px', 'py', 'gap'],
    hasChildren: true,
    example: 'section "Settings" expanded { ... }',
  },

  // Grid
  {
    name: 'row',
    description: 'Horizontal flex container. Arrange children horizontally.',
    category: 'grid',
    attributes: ['gap', 'justify', 'align', 'wrap', 'direction', 'flex', 'p', 'm', 'mt', 'mb'],
    hasChildren: true,
    example: 'row flex gap=4 justify=between { ... }',
  },
  {
    name: 'col',
    description: 'Vertical flex container or grid column.',
    category: 'grid',
    attributes: ['span', 'sm', 'md', 'lg', 'xl', 'order', 'gap', 'justify', 'align', 'p', 'm', 'w'],
    hasChildren: true,
    example: 'col span=6 md=4 { ... }',
  },

  // Container
  {
    name: 'card',
    description: 'Card component. Group and display content.',
    category: 'container',
    attributes: ['title', 'p', 'shadow', 'border', 'gap'],
    hasChildren: true,
    example: 'card "Settings" p=4 shadow=md { ... }',
  },
  {
    name: 'modal',
    description: 'Modal dialog. Display content on an overlay.',
    category: 'container',
    attributes: ['title', 'w', 'h', 'p'],
    hasChildren: true,
    example: 'modal "Confirm" w=400 { ... }',
  },
  {
    name: 'drawer',
    description: 'Drawer panel. Slides in from the edge of the screen.',
    category: 'container',
    attributes: ['title', 'position', 'p'],
    hasChildren: true,
    example: 'drawer "Menu" position=left { ... }',
  },
  {
    name: 'accordion',
    description: 'Accordion. Collapsible content panel.',
    category: 'container',
    attributes: ['title', 'p'],
    hasChildren: true,
    example: 'accordion { section "FAQ 1" { ... } }',
  },

  // Text
  {
    name: 'text',
    description: 'Text element. Display plain text.',
    category: 'text',
    attributes: ['size', 'weight', 'align', 'muted', 'm', 'mt', 'mb'],
    hasChildren: false,
    example: 'text "Hello World" size=lg weight=bold',
  },
  {
    name: 'title',
    description: 'Title element. Display h1-h6 headings.',
    category: 'text',
    attributes: ['level', 'size', 'align', 'm', 'mt', 'mb'],
    hasChildren: false,
    example: 'title "Welcome" level=2',
  },
  {
    name: 'link',
    description: 'Link element. Display clickable hyperlink.',
    category: 'text',
    attributes: ['href', 'external'],
    hasChildren: false,
    example: 'link "Learn more" href="/docs" external',
  },

  // Input
  {
    name: 'input',
    description: 'Input field. Accept text, email, password, etc.',
    category: 'input',
    attributes: ['label', 'inputType', 'placeholder', 'value', 'disabled', 'required', 'readonly', 'icon', 'm', 'mb'],
    hasChildren: false,
    example: 'input "Email" inputType=email placeholder="user@example.com" required',
  },
  {
    name: 'textarea',
    description: 'Multi-line input field. Accept long text.',
    category: 'input',
    attributes: ['label', 'placeholder', 'value', 'rows', 'disabled', 'required', 'm', 'mb'],
    hasChildren: false,
    example: 'textarea "Description" rows=4 placeholder="Enter description..."',
  },
  {
    name: 'select',
    description: 'Dropdown select. Choose one from multiple options.',
    category: 'input',
    attributes: ['label', 'placeholder', 'value', 'disabled', 'required', 'm', 'mb'],
    hasChildren: false,
    example: 'select "Country" ["USA", "Canada", "UK"] placeholder="Select..."',
  },
  {
    name: 'checkbox',
    description: 'Checkbox. Select true/false value.',
    category: 'input',
    attributes: ['label', 'checked', 'disabled', 'm', 'mb'],
    hasChildren: false,
    example: 'checkbox "I agree to terms" checked',
  },
  {
    name: 'radio',
    description: 'Radio button. Select one within a group.',
    category: 'input',
    attributes: ['label', 'name', 'checked', 'disabled', 'm', 'mb'],
    hasChildren: false,
    example: 'radio "Option A" name="choice" checked',
  },
  {
    name: 'switch',
    description: 'Toggle switch. Switch on/off state.',
    category: 'input',
    attributes: ['label', 'checked', 'disabled', 'm', 'mb'],
    hasChildren: false,
    example: 'switch "Dark mode" checked',
  },
  {
    name: 'slider',
    description: 'Slider. Select a value within a range.',
    category: 'input',
    attributes: ['label', 'min', 'max', 'value', 'step', 'disabled', 'm', 'mb'],
    hasChildren: false,
    example: 'slider "Volume" min=0 max=100 value=50',
  },

  // Button
  {
    name: 'button',
    description: 'Button element. Display clickable button.',
    category: 'input',
    attributes: ['primary', 'secondary', 'outline', 'ghost', 'danger', 'size', 'icon', 'disabled', 'loading', 'w'],
    hasChildren: false,
    example: 'button "Submit" primary icon=send',
  },

  // Display
  {
    name: 'image',
    description: 'Image element. Display an image.',
    category: 'display',
    attributes: ['src', 'alt', 'w', 'h'],
    hasChildren: false,
    example: 'image w=200 h=150',
  },
  {
    name: 'placeholder',
    description: 'Placeholder. Image or content placeholder.',
    category: 'display',
    attributes: ['label', 'w', 'h'],
    hasChildren: false,
    example: 'placeholder "Banner Image" w=full h=200',
  },
  {
    name: 'avatar',
    description: 'Avatar element. Display user profile image.',
    category: 'display',
    attributes: ['name', 'src', 'size'],
    hasChildren: false,
    example: 'avatar "John Doe" size=lg',
  },
  {
    name: 'badge',
    description: 'Badge element. Display status or count as a small label.',
    category: 'display',
    attributes: ['variant', 'pill', 'icon', 'size'],
    hasChildren: false,
    example: 'badge "New" variant=success pill',
  },
  {
    name: 'icon',
    description: 'Icon element. Display a Lucide icon.',
    category: 'display',
    attributes: ['name', 'size', 'muted'],
    hasChildren: false,
    example: 'icon "settings" size=lg',
  },

  // Data
  {
    name: 'table',
    description: 'Table component. Display data in tabular format.',
    category: 'data',
    attributes: ['striped', 'bordered', 'hover'],
    hasChildren: false,
    example: 'table striped bordered { columns ["Name", "Email"] row ["John", "john@example.com"] }',
  },
  {
    name: 'list',
    description: 'List component. Display items as a list.',
    category: 'data',
    attributes: ['ordered', 'none', 'gap'],
    hasChildren: false,
    example: 'list ordered ["First", "Second", "Third"]',
  },

  // Feedback
  {
    name: 'alert',
    description: 'Alert element. Display a message to the user.',
    category: 'feedback',
    attributes: ['variant', 'dismissible', 'icon'],
    hasChildren: false,
    example: 'alert "Changes saved!" variant=success',
  },
  {
    name: 'toast',
    description: 'Toast notification. Display a temporary message.',
    category: 'feedback',
    attributes: ['position', 'variant'],
    hasChildren: false,
    example: 'toast "Item deleted" position=bottom-right variant=danger',
  },
  {
    name: 'progress',
    description: 'Progress bar. Display progress status.',
    category: 'feedback',
    attributes: ['value', 'max', 'label', 'indeterminate'],
    hasChildren: false,
    example: 'progress value=75 label="Uploading..."',
  },
  {
    name: 'spinner',
    description: 'Loading spinner. Display loading status.',
    category: 'feedback',
    attributes: ['label', 'size'],
    hasChildren: false,
    example: 'spinner size=lg',
  },

  // Overlay
  {
    name: 'tooltip',
    description: 'Tooltip element. Show additional info on hover.',
    category: 'overlay',
    attributes: ['position'],
    hasChildren: true,
    example: 'tooltip "More info" position=top { icon "help-circle" }',
  },
  {
    name: 'popover',
    description: 'Popover. Show additional content on click.',
    category: 'overlay',
    attributes: ['title'],
    hasChildren: true,
    example: 'popover "Details" { ... }',
  },
  {
    name: 'dropdown',
    description: 'Dropdown menu. Expand menu on click.',
    category: 'overlay',
    attributes: [],
    hasChildren: false,
    example: 'dropdown { item "Edit" icon=edit item "Delete" icon=trash danger }',
  },

  // Navigation
  {
    name: 'nav',
    description: 'Navigation area. Place menu items.',
    category: 'navigation',
    attributes: ['vertical', 'gap'],
    hasChildren: false,
    example: 'nav [{ label="Home" icon=home active }, { label="Settings" icon=settings }] vertical',
  },
  {
    name: 'tabs',
    description: 'Tabs component. Switch between multiple panels.',
    category: 'navigation',
    attributes: ['active'],
    hasChildren: true,
    example: 'tabs { tab "General" active { ... } tab "Advanced" { ... } }',
  },
  {
    name: 'breadcrumb',
    description: 'Breadcrumb. Display current location as a path.',
    category: 'navigation',
    attributes: [],
    hasChildren: false,
    example: 'breadcrumb [{ label="Home" href="/" }, { label="Products" }, { label="Details" }]',
  },

  // Divider
  {
    name: 'divider',
    description: 'Divider element. Visually separate content.',
    category: 'display',
    attributes: ['m', 'my', 'mx'],
    hasChildren: false,
    example: 'divider my=4',
  },
];
