import Select, { components } from "react-select";
import { getPhotoUrl } from "../../util/image-utils";
import styles from "./ImageSelect.module.css";

export function ImageSelect({ imageUrls, value, onChange }) {
  const options = imageUrls.map((url, i) => ({ value: url, label: `Avatar #${i + 1}` }));
  return (
    <Select
      options={options}
      components={{
        SingleValue: CustomSingleValue,
        Option: CustomOption
      }}
      classNames={{
        control: () => "select-box"
      }}
      styles={{
        valueContainer: (base) => ({
          ...base,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          "& > input": {
            opcaity: 0,
            height: 0,
            padding: 0,
            margin: 0
          }
        })
      }}
      value={options.find((option) => option.value === value)}
      onChange={(e) => onChange?.(e.value)}
      isSearchable={false}
      isClearable={false}
      isMulti={false}
    />
  );
}

function CustomOption({ data, innerRef, innerProps }) {
  return (
    <div ref={innerRef} {...innerProps} className={styles.option}>
      <img src={getPhotoUrl(data.value)} />
    </div>
  );
}

function CustomSingleValue({ data }) {
  return (
    <div className={styles.singleValue}>
      <img src={getPhotoUrl(data.value)} />
    </div>
  );
}
