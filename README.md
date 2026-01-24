<p align="center">
  <img src="https://docs.wireweave.org/assets/wireweave-language-data.svg" width="128" height="128" alt="Wireweave Language Data">
</p>

<h1 align="center">@wireweave/language-data</h1>

<p align="center">Shared language definitions and editor integrations for Wireweave DSL</p>

## Installation

```bash
npm install @wireweave/language-data
# or
pnpm add @wireweave/language-data
```

## Features

- **Language Data** - Component and attribute definitions
- **Monaco Integration** - Full IntelliSense for Monaco Editor
- **CodeMirror Integration** - Full IntelliSense for CodeMirror 6
- **Zero Dependencies** - Standalone package

## Usage

### Basic Data

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
console.log(page?.description);

// Get attribute definition
const gap = getAttribute('gap');
console.log(gap?.type); // "number"

// Get valid children for a component
const children = getValidChildren('page');
console.log(children.map(c => c.name));

// Get attributes for a component
const attrs = getComponentAttributes('button');
console.log(attrs.map(a => a.name));
```

### Monaco Editor Integration

```typescript
import * as monaco from 'monaco-editor';
import {
  LANGUAGE_ID,
  getMonarchTokensProvider,
  getLanguageConfiguration,
  createHoverProvider,
  createCompletionProvider,
  createDiagnosticsSetup,
} from '@wireweave/language-data/monaco';

// Register language
monaco.languages.register({ id: LANGUAGE_ID });
monaco.languages.setMonarchTokensProvider(LANGUAGE_ID, getMonarchTokensProvider());
monaco.languages.setLanguageConfiguration(LANGUAGE_ID, getLanguageConfiguration());

// Register IntelliSense
monaco.languages.registerHoverProvider(LANGUAGE_ID, createHoverProvider(monaco));
monaco.languages.registerCompletionItemProvider(LANGUAGE_ID, createCompletionProvider(monaco));

// Setup diagnostics
const editor = monaco.editor.create(container, { language: LANGUAGE_ID });
const setupDiagnostics = createDiagnosticsSetup(monaco);
setupDiagnostics(editor);
```

### CodeMirror Integration

```typescript
import { StreamLanguage } from '@codemirror/language';
import { autocompletion } from '@codemirror/autocomplete';
import { hoverTooltip } from '@codemirror/view';
import { linter } from '@codemirror/lint';
import {
  createTokenizer,
  createCompletionSource,
  createHoverTooltipSource,
  createLinter,
} from '@wireweave/language-data/codemirror';

// Create language
const wireframeLanguage = StreamLanguage.define(createTokenizer());

// Setup extensions
const extensions = [
  wireframeLanguage,
  autocompletion({ override: [createCompletionSource()] }),
  hoverTooltip(createHoverTooltipSource()),
  linter(createLinter()),
];
```

## Exports

### Main (`@wireweave/language-data`)

| Export | Description |
|--------|-------------|
| `ALL_COMPONENTS` | Array of ~40 component definitions |
| `ATTRIBUTES` | Array of ~60 attribute definitions |
| `VALUE_KEYWORDS` | Array of valid value keywords |
| `CATEGORY_LABELS` | Category name to label mapping |
| `getComponent(name)` | Get component by name |
| `getAttribute(name)` | Get attribute by name |
| `getValidChildren(name)` | Get valid child components |
| `getComponentAttributes(name)` | Get attributes for component |
| `isComponent(word)` | Check if word is a component |
| `isAttribute(word)` | Check if word is an attribute |

### Monaco (`@wireweave/language-data/monaco`)

| Export | Description |
|--------|-------------|
| `LANGUAGE_ID` | Language identifier (`"wireframe"`) |
| `getMonarchTokensProvider()` | Monarch tokenizer for syntax highlighting |
| `getLanguageConfiguration()` | Brackets, comments, auto-closing |
| `createHoverProvider(monaco)` | Hover tooltip provider |
| `createCompletionProvider(monaco)` | Auto-completion provider |
| `createDiagnosticsSetup(monaco)` | Diagnostics/linting setup |

### CodeMirror (`@wireweave/language-data/codemirror`)

| Export | Description |
|--------|-------------|
| `createTokenizer()` | StreamLanguage tokenizer |
| `createCompletionSource()` | Auto-completion source |
| `createHoverTooltipSource()` | Hover tooltip source |
| `createLinter()` | Linter for diagnostics |

## Types

```typescript
interface ComponentDef {
  name: string;
  nodeType: string;
  category: ComponentCategory;
  attributes: string[];
  hasChildren: boolean;
  description: string;
  example: string;
  validChildren?: string[];
  validParents?: string[];
}

interface AttributeDef {
  name: string;
  type: 'string' | 'number' | 'boolean' | 'enum';
  values?: string[];
  description: string;
  example: string;
}

type ComponentCategory =
  | 'layout' | 'container' | 'grid' | 'text'
  | 'input' | 'display' | 'data' | 'feedback'
  | 'overlay' | 'navigation';
```

## Used By

- **[@wireweave/playground](https://github.com/wireweave/playground)** - Monaco Editor integration
- **[wireweave-vscode](https://github.com/wireweave/vscode-extension)** - VS Code extension
- **[mcp-dashboard](https://dashboard.wireweave.org)** - CodeMirror integration

## License

MIT
