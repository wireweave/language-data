/**
 * Type definitions for Wireweave language data
 */

export type ComponentCategory =
  | 'layout'
  | 'container'
  | 'grid'
  | 'text'
  | 'input'
  | 'display'
  | 'data'
  | 'feedback'
  | 'overlay'
  | 'navigation';

export interface ComponentDef {
  name: string;
  description: string;
  category: ComponentCategory;
  attributes: string[];
  hasChildren: boolean;
  validChildren?: string[]; // Valid child components (undefined = all, empty array = none)
  validParents?: string[]; // Valid parent components (undefined = any)
  example?: string;
}

export interface AttributeDef {
  name: string;
  description: string;
  values?: string[] | 'number' | 'string' | 'boolean';
  example?: string;
}
