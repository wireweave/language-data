/**
 * Utility functions for Wireweave language data
 */

import type { ComponentDef, AttributeDef } from './types.js';
import { ALL_COMPONENTS } from './components.js';
import { ATTRIBUTES } from './attributes.js';

/**
 * Get component definition by name
 */
export function getComponent(name: string): ComponentDef | undefined {
  return ALL_COMPONENTS.find((c) => c.name === name.toLowerCase());
}

/**
 * Get attribute definition by name
 */
export function getAttribute(name: string): AttributeDef | undefined {
  return ATTRIBUTES.find((a) => a.name === name);
}

/**
 * Get valid child components for a parent component
 */
export function getValidChildren(componentName: string): ComponentDef[] {
  const component = getComponent(componentName);
  if (!component || !component.hasChildren) return [];

  if (component.validChildren === undefined) {
    // All components except page are valid children
    return ALL_COMPONENTS.filter((c) => c.name !== 'page');
  }

  return component.validChildren
    .map((name) => getComponent(name))
    .filter((c): c is ComponentDef => c !== undefined);
}

/**
 * Check if a component is a valid child of another
 */
export function isValidChild(childName: string, parentName: string): boolean {
  const parent = getComponent(parentName);
  if (!parent || !parent.hasChildren) return false;

  if (parent.validChildren === undefined) return true;
  return parent.validChildren.includes(childName.toLowerCase());
}

/**
 * Get attribute definitions for a specific component
 */
export function getComponentAttributes(componentName: string): AttributeDef[] {
  const component = getComponent(componentName);
  if (!component) return ATTRIBUTES;

  return ATTRIBUTES.filter((attr) => component.attributes.includes(attr.name));
}

/**
 * Get all components in a category
 */
export function getComponentsByCategory(category: string): ComponentDef[] {
  return ALL_COMPONENTS.filter((c) => c.category === category);
}

/**
 * Get attribute type label for display
 */
export function getAttributeTypeLabel(attr: AttributeDef): string {
  if (attr.values === 'number') return 'number';
  if (attr.values === 'string') return 'string';
  if (attr.values === 'boolean') return 'boolean';
  if (Array.isArray(attr.values)) {
    const preview = attr.values.slice(0, 3).join(' | ');
    return attr.values.length > 3 ? `${preview}...` : preview;
  }
  return '';
}

/**
 * Format attribute values for display
 */
export function formatAttributeValues(attr: AttributeDef): string {
  if (attr.values === 'number') return 'Type: number';
  if (attr.values === 'string') return 'Type: string';
  if (attr.values === 'boolean') return 'Type: boolean (can be omitted)';
  if (Array.isArray(attr.values)) {
    return `Values: ${attr.values.join(' | ')}`;
  }
  return '';
}

/**
 * Check if a word is a known component
 */
export function isComponent(word: string): boolean {
  return ALL_COMPONENTS.some((c) => c.name === word.toLowerCase());
}

/**
 * Check if a word is a known attribute
 */
export function isAttribute(word: string): boolean {
  return ATTRIBUTES.some((a) => a.name === word);
}

/**
 * Get all component names
 */
export function getComponentNames(): string[] {
  return ALL_COMPONENTS.map((c) => c.name);
}

/**
 * Get all attribute names
 */
export function getAttributeNames(): string[] {
  return ATTRIBUTES.map((a) => a.name);
}
