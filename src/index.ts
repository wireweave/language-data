/**
 * @wireweave/language-data
 *
 * Editor-specific metadata for Wireweave DSL
 * Provides descriptions, examples, and autocomplete hints for IDE integrations.
 *
 * For DSL spec and validation, use @wireweave/core directly.
 */

// Editor-specific types
export type { ComponentDef, AttributeDef } from './types.js';

// Editor-specific data (with descriptions, examples)
export { ALL_COMPONENTS } from './components.js';
export { ATTRIBUTES } from './attributes.js';
export {
  CATEGORY_LABELS,
  VALUE_KEYWORDS,
  COMMON_NUMBERS,
  SPACING_SCALE,
} from './keywords.js';

// Editor utilities
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
