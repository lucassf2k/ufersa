export function validationError(errors: string | string[]): {
  type: string
  errors: string | string[]
} {
  return {
    type: 'ValidationError',
    errors,
  }
}
