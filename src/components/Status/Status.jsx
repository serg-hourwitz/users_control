import CustomSelect from '../Select/Select';

export default function Status({ value = '', onChange, label = '', sx, options }) {
  const defaultOptions = [
    { value: '', label: <em>None</em> },
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' },
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
