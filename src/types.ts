/**
 * Type definitions for Wireweave language data (editor-friendly)
 *
 * Editor-specific types for IDE integrations.
 * For core spec types, use @wireweave/core directly.
 */

/**
 * Extended component definition for editors
 * Includes documentation and autocomplete hints
 */
export interface ComponentDef {
  /** Component name (lowercase) */
  name: string;
  /** Human-readable description for tooltips */
  description: string;
  /** Component category for grouping */
  category: string;
  /** Valid attributes for this component */
  attributes: string[];
  /** Whether this component can have children */
  hasChildren: boolean;
  /** Valid child components (for autocomplete) */
  validChildren?: string[];
  /** Valid parent components (for validation hints) */
  validParents?: string[];
  /** Code example for documentation */
  example?: string;
}

/**
 * Extended attribute definition for editors
 * Includes documentation and autocomplete values
 */
export interface AttributeDef {
  /** Attribute name */
  name: string;
  /** Human-readable description for tooltips */
  description: string;
  /** Possible values (for autocomplete) */
  values?: string[] | 'number' | 'string' | 'boolean';
  /** Code example for documentation */
  example?: string;
}
