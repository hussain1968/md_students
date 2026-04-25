/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type UserRole = 'teacher' | 'parent' | 'guest';

export interface StudentRecord {
  id: string;
  name: string;
  age: number;
  class: string;
  admissionDate: string;
  status: 'active' | 'graduated' | 'inactive';
  report?: string;
  parentId: string;
}

export interface UserProfile {
  id: string;
  email: string;
  role: UserRole;
  name: string;
}
