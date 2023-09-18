import { TransformFnParams } from 'class-transformer';

export function TransformDate(params: TransformFnParams) {
  return new Date(params.value);
}
