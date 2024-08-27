import CustomSelect from '../Select/Select';

export default function Department({
  value,
  onChange,
  label = '',
  sx,
  options,
}) {
  const defaultOptions = [
    { value: '', label: <em>None</em> },
    { value: 'Digital Marketing', label: 'Digital Marketing' },
    { value: 'HR', label: 'HR' },
    { value: 'Finance', label: 'Finance' },
  ];

  return (
    <div>
      <CustomSelect
        value={value}
        label={label}
        options={options || defaultOptions}
        onChange={onChange}
        sx={sx}
      />
    </div>
  );
}
