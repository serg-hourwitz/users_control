import CustomSelect from '../Select/Select';

export default function User({
  value,
  onChange,
  label = '',
  sx,
  options,
}) {
  const defaultOptions = [
    { value: '', label: <em>None</em> },
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
