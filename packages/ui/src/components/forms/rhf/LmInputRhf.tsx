import { Controller } from 'react-hook-form'
import { LmInput, LmInputProps } from '../LmInput'
import { LmRhfProps } from './lmRhfProps'

export type LmInputRhfProps = LmInputProps & LmRhfProps & {}

export function LmInputRhf({
  name,
  control,
  rules = {},
  defaultValue,
  ...inputProps
}: LmInputRhfProps) {
  if (inputProps.required) {
    rules.required = 'This field is required'
  }
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
        <LmInput
          {...inputProps}
          value={value ?? ''}
          onBlur={onBlur}
          error={!!error}
          onChangeText={onChange}
          helperText={error ? error.message : inputProps.helperText}
        />
      )}
    />
  )
}
