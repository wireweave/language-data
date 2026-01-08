<p align="center">
  <img src="https://raw.githubusercontent.com/wireweave/language-data/main/logo.svg" width="128" height="128" alt="Wireweave Language Data">
</p>

<h1 align="center">@wireweave/language-data</h1>

<p align="center">Shared language definitions for Wireweave DSL editors</p>

## Installation

```bash
npm install @wireweave/language-data
# or
pnpm add @wireweave/language-data
```

## Usage

```typescript
import {
  ALL_COMPONENTS,
  ATTRIBUTES,
  getComponent,
  getAttribute,
  getValidChildren,
  getComponentAttributes,
} from '@wireweave/language-data';

// Get component definition
const page = getComponent('page');
console.log(page?.description); // "Page root container..."

// Get attribute definition
const gap = getAttribute('gap');
console.log(gap?.values); // "number"

// Get valid children for a component
const children = getValidChildren('page');
console.log(children.map(c => c.name)); // ["header", "main", "footer", ...]

// Get attributes for a component
const attrs = getComponentAttributes('button');
console.log(attrs.map(a => a.name)); // ["primary", "secondary", ...]
```

## Exports

### Data

| Export | Description |
|--------|-------------|
| `ALL_COMPONENTS` | Array of all 36 component definitions |
| `ATTRIBUTES` | Array of all attribute definitions |
| `VALUE_KEYWORDS` | Array of valid value keywords |
| `CATEGORY_LABELS` | Category name to label mapping |
| `COMMON_NUMBERS` | Common number values for suggestions |
| `SPACING_SCALE` | Spacing scale (4px base) |

### Types

```typescript
interface ComponentDef {
  name: string;
  description: string;
  category: ComponentCategory;
  attributes: string[];
  hasChildren: boolean;
  validChildren?: string[];
  validParents?: string[];
  example?: string;
}

interface AttributeDef {
  name: string;
  description: string;
  values?: string[] | 'number' | 'string' | 'boolean';
  example?: string;
}

type ComponentCategory =
  | 'layout' | 'container' | 'grid' | 'text'
  | 'input' | 'display' | 'data' | 'feedback'
  | 'overlay' | 'navigation';
```

### Utilities

| Function | Description |
|----------|-------------|
| `getComponent(name)` | Get component by name |
| `getAttribute(name)` | Get attribute by name |
| `getValidChildren(componentName)` | Get valid child components |
| `isValidChild(child, parent)` | Check if child is valid |
| `getComponentAttributes(componentName)` | Get attributes for component |
| `getComponentsByCategory(category)` | Get components by category |
| `getAttributeTypeLabel(attr)` | Get type label for display |
| `formatAttributeValues(attr)` | Format values for display |
| `isComponent(word)` | Check if word is a component |
| `isAttribute(word)` | Check if word is an attribute |
| `getComponentNames()` | Get all component names |
| `getAttributeNames()` | Get all attribute names |

## Used By

- [@wireweave/playground](https://www.npmjs.com/package/@wireweave/playground) - Monaco Editor integration
- [wireweave-vscode](https://marketplace.visualstudio.com/items?itemName=wireweave.wireweave-vscode) - VS Code Extension

## License

MIT
