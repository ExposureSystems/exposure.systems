export type CategoryCodeKind = "category" | "subcategory";

export function isCategoryCode(value: string) {
  return /^CAT-\d{4}$/.test(value);
}

export function isParentCategoryCode(value: string) {
  if (!isCategoryCode(value)) {
    return false;
  }

  return value.endsWith("00") && value !== "CAT-0000";
}

export function isSubcategoryCode(value: string) {
  if (!isCategoryCode(value)) {
    return false;
  }

  return !isParentCategoryCode(value);
}

export function getCategoryKind(code: string): CategoryCodeKind {
  assertCategoryCode(code);

  return isParentCategoryCode(code) ? "category" : "subcategory";
}

export function getParentCategoryCode(code: string) {
  assertCategoryCode(code);

  return `${code.slice(0, 6)}00`;
}

export function assertCategoryCode(code: string) {
  if (!isCategoryCode(code)) {
    throw new Error(`Invalid category code: ${code}`);
  }
}

export function assertParentCategoryCode(code: string) {
  if (!isParentCategoryCode(code)) {
    throw new Error(`Invalid parent category code: ${code}`);
  }
}

export function assertSubcategoryCode(code: string) {
  if (!isSubcategoryCode(code)) {
    throw new Error(`Invalid subcategory code: ${code}`);
  }
}
