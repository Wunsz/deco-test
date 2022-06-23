import { useFormikContext } from 'formik';
import { useCallback } from 'react';
import { FocusEventHandler } from 'react';

export type TouchTrigger = 'onBlur' | 'onFocus';

interface UseFormikConnectionConfig<T> {
  touchedTrigger?: 'onBlur' | 'onFocus';
  onFocus?: FocusEventHandler<T>;
  onBlur?: FocusEventHandler<T>;
}

interface FormikConnection<F, T> {
  value: F;
  setValue: (value: F) => void;
  touched: boolean;
  error: string | undefined;
  onFocus: FocusEventHandler<T>;
  onBlur: FocusEventHandler<T>;
}

export type WithoutInjectedProps<T, Additional extends number | string | symbol> = Omit<
  T,
  'value' | 'touched' | 'error' | Additional
>;

const DEFAULT_CONFIG = {};

const useFormikConnection = <F, T>(
  name: string,
  { onFocus, onBlur, touchedTrigger = 'onBlur' }: UseFormikConnectionConfig<T> = DEFAULT_CONFIG,
): FormikConnection<F, T> => {
  const { getFieldMeta, getFieldHelpers } = useFormikContext();

  const { setTouched, setValue } = getFieldHelpers(name);
  const { value, touched, error } = getFieldMeta<F>(name);

  const handleFocus: FocusEventHandler<T> = useCallback(
    (event) => {
      if (touchedTrigger === 'onFocus') {
        setTouched(true);
      }
      onFocus?.(event);
    },
    [touchedTrigger, setTouched, onFocus],
  );

  const handleBlur: FocusEventHandler<T> = useCallback(
    (event) => {
      if (touchedTrigger === 'onBlur') {
        setTouched(true);
      }
      onBlur?.(event);
    },
    [touchedTrigger, setTouched, onBlur],
  );

  return {
    value,
    setValue,
    touched,
    error,
    onFocus: handleFocus,
    onBlur: handleBlur,
  };
};

export default useFormikConnection;
