import CustomSelect from '../Select/Select';

export default function Country({
  value,
  onChange,
  label = '',
  sx,
  options,
}) {
  const defaultOptions = [
    { value: '', label: <em>None</em> },
    { value: 'USA', label: 'USA' },
    { value: 'Canada', label: 'Canada' },
    { value: 'Germany', label: 'Germany' },
    { value: 'France', label: 'France' },
    { value: 'UK', label: 'UK' },
    { value: 'Australia', label: 'Australia' },
    { value: 'India', label: 'India' },
    { value: 'Japan', label: 'Japan' },
    { value: 'China', label: 'China' },
    { value: 'Brazil', label: 'Brazil' },
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
