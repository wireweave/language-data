/**
 * @wireweave/language-data
 *
 * Shared language definitions for Wireweave DSL editors
 * Used by VS Code Extension, Playground, and other editor integrations
 */

// Types
export type { ComponentDef, AttributeDef, ComponentCategory } from './types.js';

// Data
export { ALL_COMPONENTS } from './components.js';
export { ATTRIBUTES } from './attributes.js';
export {
  CATEGORY_LABELS,
  VALUE_KEYWORDS,
  COMMON_NUMBERS,
  SPACING_SCALE,
} from './keywords.js';

// Utilities
export {
  getComponent,
  getAttribute,
  getValidChildren,
  isValidChild,
  getComponentAttributes,
  getComponentsByCategory,
  getAttributeTypeLabel,
  formatAttributeValues,
  isComponent,
  isAttribute,
  getComponentNames,
  getAttributeNames,
} from './utils.js';
