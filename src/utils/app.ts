export const onChangeSetter =
  (set: React.Dispatch<React.SetStateAction<string>>) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    set(e.target.value)
  }
