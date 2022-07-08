import AsyncSelect from "react-select/async";

const loadOptions = (search, callback) => {
  fetch("/api/products?search=" + search)
    .then((response) => response.json())
    .then((products) => {
      return products.map((product) => ({
        value: product.id,
        label: product.name,
      }));
    })
    .then(callback)
    .catch(() => {
      console.error("Error occured");
    });
};

const SearchDropdown = ({ label, onSelect, ...props }) => {
  return (
    <AsyncSelect
      label={label}
      loadOptions={loadOptions}
      value=""
      onChange={({ value }) => onSelect(value)}
      {...props}
    />
  );
};

export default SearchDropdown;
